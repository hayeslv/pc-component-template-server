/*
 * @Author: Lvhz
 * @Date: 2021-08-12 16:31:54
 * @Description: Description
 */
'use strict';
const nodemailer = require('nodemailer');
const path = require('path');
const fse = require('fs-extra');
const { Service } = require('egg');

const userEmail = 'lvhaizhoudylan@126.com';
const transporter = nodemailer.createTransport({
  service: '126',
  secureConnection: true,
  // secure: false,
  auth: {
    user: userEmail,
    pass: 'KPLWHFVVBNGARUFA', // 授权码，不是密码
  },
});

class ToolService extends Service {
  async mergeFile(filePath, filehash, size) {
    const chunkDir = path.resolve(this.config.UPLOAD_DIR, filehash); // 切片的文件夹
    let chunks = fse.readdirSync(chunkDir);
    // 排序（从小到大）
    chunks.sort((a, b) => a.split('-')[1] - b.split('-')[1]);
    // 构成一个完整的文件路径
    chunks = chunks.map(cp => path.resolve(chunkDir, cp));
    await this.mergeChunks(chunks, filePath, size);
  }
  async mergeChunks(files, dest, size) {
    console.log(size);
    // 可能是同时写文件造成的问题
    // const pipStream = (filePath, writeStream) => new Promise(resolve => {
    //   const readStream = fse.createReadStream(filePath);
    //   readStream.on('end', () => {
    //     fse.unlinkSync(filePath);
    //     resolve();
    //   });
    //   readStream.pipe(writeStream);
    // });
    // files.map((file, index) => {
    //   const isFileExist = fse.existsSync(dest);
    //   return pipStream(file, fse.createWriteStream(dest, {
    //     flags: isFileExist ? 'r+' : 'w', //  修改文件而不是替换它可能需要将 flags 选项设置为 r+ 而不是默认的 w。
    //     start: index * size, // 写入的开始位置
    //   }));
    // });

    function merge(i) {
      return new Promise(resolve => {
        if (i === files.length) { // 合并完成
          fse.remove(dest.split('.')[0]); // 删除切片文件夹
          return resolve();
        }
        const data = fse.readFileSync(files[i]);
        fse.appendFileSync(dest, data);
        resolve(merge(i + 1));
      });
    }
    merge(0);
  }
  async sendMail(email, subject, text, html) {
    const mailOptions = {
      from: userEmail,
      cc: userEmail, // 抄送：抄送一份给自己，可以规避掉一部分垃圾邮件的验证
      to: email,
      subject,
      text,
      html,
    };
    try {
      await transporter.sendMail(mailOptions);
      return true;
    } catch (err) {
      console.log('email error', err);
      return false;
    }
  }
}

module.exports = ToolService;

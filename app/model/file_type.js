/*
 * @Author: Lvhz
 * @Date: 2021-08-12 15:21:09
 * @Description: 保存的文件类型：echart-config、markdown
 */
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const FileTypeSchema = new Schema({
    __v: { type: Number, select: false },
    type: { type: String, require: true }, // example: 'echart'
    code: { type: Number, require: false }, // 图表类型：1柱状图、2折线图、3饼图，9其他类型图
    name: { type: String, require: true }, // 图表类型名称
    value: { type: String, require: true }, // example: 'column'
  }, { timestamps: true });

  return mongoose.model('FileType', FileTypeSchema, 'file_type');
};

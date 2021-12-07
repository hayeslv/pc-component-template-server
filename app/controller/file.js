/*
 * @Author: Lvhz
 * @Date: 2021-08-12 10:10:02
 * @Description: Description
 */
'use strict';
// const fse = require('fs-extra');
// const path = require('path');
const BaseController = require('./base');

class FileController extends BaseController {
  // 保存文件路径（入库）
  async saveFileUrl() {
    const { ctx } = this;
    const { url, sourceType, chartType, hash } = ctx.request.body;
    const res = await ctx.model.File.create({
      url,
      sourceType,
      chartType,
      hash,
    });
    if (res._id) return this.success(res);
    return this.error('保存文件失败');
  }
  // 保存文件路径
  async saveFileURL() {
    const { ctx } = this;
    const { projectType, groupId, articleTypeId, title, nav, url } = ctx.request.body;

    if (projectType === 'article') {
      // 根据type获取type_id
      // const infoData = await this.app.mysql.query(`
      //   SELECT * FROM article_info WHERE title = ?
      // `, [ title ]);
      // if (infoData.length !== 0) return this.error('该名称已存在');
      // TODO oss需要从前端移到后端
      // 获取文章类型id
      const articleTypeData = await this.app.mysql.query(`
        SELECT * FROM article_type WHERE id = ?
      `, [ articleTypeId ]);
      if (articleTypeData.length === 0) return this.error('不存在该文章类型');
      // 插入数据
      const articleInfo = await this.app.mysql.query(`
        INSERT INTO article_info ( type_id, group_id, title, nav, url ) 
        VALUES ( ? , ? , ? , ?, ? )
      `, [ articleTypeData[0].id, groupId, title, nav, url ]);
      if (articleInfo) {
        return this.message('文件保存成功');
      }
      return this.error('文件保存失败');
    }
  }
}
module.exports = FileController;

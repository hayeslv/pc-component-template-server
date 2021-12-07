/*
 * @Author: Lvhz
 * @Date: 2021-08-12 10:10:02
 * @Description: 文章操作
 */
'use strict';
const BaseController = require('./base');

class ArticleController extends BaseController {
  // 获取文章类型
  async getArticleType() {
    try {
      const list = await this.app.mysql.query('SELECT * FROM article_type');
      return this.success(list);
    } catch (error) {
      return this.error('系统异常', 500, error);
    }
  }
  // 获取文章信息
  async getArticleInfo() {
    const { ctx } = this;
    const { name } = ctx.query;
    try {
      const articleInfoData = await this.app.mysql.query(`
        SELECT * FROM article_info WHERE name = ?
      `, [ name ]);
      if (articleInfoData[0]) return this.success(articleInfoData[0]);
      return this.error('操作失败');
    } catch (error) {
      return this.error('系统异常', 500, error);
    }
  }
  // 获取文章分组列表
  async getArticleGroupList() {
    const { ctx } = this;
    const { typeId } = ctx.query;
    try {
      const list = await this.app.mysql.query(`
        SELECT * FROM article_group WHERE type_id = ?
      `, [ typeId ]);
      return this.success(list);
    } catch (error) {
      return this.error('系统异常', 500, error);
    }
  }
}
module.exports = ArticleController;

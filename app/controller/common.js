/*
 * @Author: Lvhz
 * @Date: 2021-08-12 10:10:02
 * @Description: 公共
 */
'use strict';
const BaseController = require('./base');

class ArticleController extends BaseController {
  // 根据typeId获取分组列表
  async getGroupListByTypeId(type_id) {
    return await this.app.mysql.query('SELECT * FROM article_group WHERE type_id = ?', [ type_id ]);
  }
  // 根据typeId获取文章列表
  async getArticleListByTypeId(type_id) {
    return await this.app.mysql.query('SELECT * FROM article_info WHERE type_id = ?', [ type_id ]);
  }
  // 获取group路由列表
  async getGroupListByArray(list) {
    const groupList = [];
    for (let i = 0; i < list.length; i++) {
      const articleList = await this.app.mysql.query('SELECT * FROM article_info WHERE group_id = ?', [ list[i].id ]);
      groupList.push({
        id: list[i].id,
        name: list[i].name,
        value: list[i].value,
        list: articleList,
      });
    }
    return groupList;
  }
  // 获取路由列表
  async getArticleRoutes() {
    try {
      const result = [];
      const list = await this.app.mysql.query('SELECT * FROM article_type');
      for (let i = 0; i < list.length; i++) {
        const groupList = await this.getGroupListByTypeId(list[i].id);
        if (groupList.length === 0) { // 没有分组
          const articleList = await this.getArticleListByTypeId(list[i].id);
          const obj = { ...list[i], children: articleList };
          result.push(obj);
        } else {
          const groupObj = await this.getGroupListByArray(groupList);
          const obj = { ...list[i], group: groupObj };
          result.push(obj);
        }
      }
      return this.success(result);
    } catch (error) {
      return this.error('系统异常', 500, error);
    }
  }
}
module.exports = ArticleController;

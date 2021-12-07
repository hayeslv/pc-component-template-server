/*
 * @Author: Lvhz
 * @Date: 2021-08-18 10:20:59
 * @Description: Description
 */
'use strict';
const BaseController = require('./base');

class UserController extends BaseController {
  // 初始化数据库
  async initDB() {
    // 初始化顶级类型表
    await this.app.mysql.query(`
      CREATE TABLE IF NOT EXISTS project_type(
        id INTEGER PRIMARY KEY AUTO_INCREMENT COMMENT '主键', 
        name VARCHAR(100) NOT NULL COMMENT '项目类型名称（中文）',
        type VARCHAR(20) NOT NULL COMMENT '类型'
      )
    `);
    // 创建“文章类型”表
    await this.app.mysql.query(`
      CREATE TABLE IF NOT EXISTS article_type(
        id INTEGER PRIMARY KEY AUTO_INCREMENT, 
        project_type_id INTEGER NOT NULL COMMENT '项目类型id',
        name VARCHAR(20) NOT NULL COMMENT '当前类型名称',
        type VARCHAR(20) NOT NULL COMMENT '当前类型'
      )
    `);
    // 创建“文章信息”表
    await this.app.mysql.query(`
      CREATE TABLE IF NOT EXISTS article_info(
        id INTEGER PRIMARY KEY AUTO_INCREMENT, 
        type_id INTEGER NOT NULL COMMENT '文章类型id',
        group_id VARCHAR(20) COMMENT '分组id',
        title VARCHAR(125) NOT NULL COMMENT '文章名称',
        nav VARCHAR(125) COMMENT '路由导航',
        url VARCHAR(255) NOT NULL COMMENT '地址'
      )
    `);
    // 创建“文章分组”表
    await this.app.mysql.query(`
      CREATE TABLE IF NOT EXISTS article_group(
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        type_id INTEGER NOT NULL COMMENT '文章类型id',
        name VARCHAR(20) NOT NULL COMMENT '分组名称',
        value VARCHAR(20) COMMENT '分组类型'
      )
    `);

    this.message('数据库初始化成功');
  }
}

module.exports = UserController;

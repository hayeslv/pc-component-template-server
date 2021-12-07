/*
 * @Author: Lvhz
 * @Date: 2021-08-18 10:20:59
 * @Description: Description
 */
'use strict';
const BaseController = require('./base');

class UserController extends BaseController {
  async createTable() {
    // const { ctx } = this;
    // 组件name
    // const { name } = ctx.query;
    await this.app.mysql.query(`
      CREATE TABLE IF NOT EXISTS test_pc(
        id INTEGER PRIMARY KEY AUTO_INCREMENT, 
        name VARCHAR(255),
        deptId INT(11),
        salary FLOAT
      )
    `);
    this.message('建表成功');
  }
  async deleteTable() {
    await this.app.mysql.query(`
      DROP TABLE test_pc
    `);
    this.message('删除成功');
  }
  async insterData() {
    await this.app.mysql.query(`
      INSERT INTO test_pc (
        name,
        deptId,
        salary
      ) VALUES (
        'dylanLv',
        1,
        9999.00
      )
    `);
    this.message('插入数据成功');
  }
  async deleteData() {
    await this.app.mysql.query(`
      DELETE FROM test_pc
        WHERE name = 'dylanLv'
    `);
    this.message('删除数据成功');
  }
  async updateData() {
    await this.app.mysql.query(`
      UPDATE test_pc
      SET
        salary = 10000
      WHERE name = 'dylanLv'
    `);
    this.message('更新数据成功');
  }
  // 新增字段
  async addField() {
    await this.app.mysql.query(`
      ALTER TABLE test_pc
      ADD target FLOAT NULL
    `);
    this.message('新增字段成功');
  }
  // 删除字段
  async deleteField() {
    await this.app.mysql.query(`
      ALTER TABLE test_pc
      DROP COLUMN target
    `);
    this.message('删除字段成功');
  }
  async renameTable() {
    await this.app.mysql.query(`
      RENAME TABLE test_pc TO test_pc_1
    `);
    this.message('重命名表成功');
  }
  async testget() {
    const { ctx } = this;
    console.log('22222222222222');
    console.log(ctx.query);
    console.log(ctx.request.body);
    console.log(ctx.request.header);
    this.message('succ');
  }
}

module.exports = UserController;

/*
 * @Author: Lvhz
 * @Date: 2021-08-17 16:45:42
 * @Description: echart图表接口
 */
'use strict';
const BaseController = require('./base');

class UserController extends BaseController {
  // ! 用法：/echart/:id
  // async column() {
  //   const { ctx } = this;
  //   const { id } = ctx.params;
  //   const query = { type: 1, order: id };
  //   const list = await ctx.model.EchartData.find(query);
  //   this.success(list);
  // }
  async getFileByCompName() {
    const { ctx } = this;
    // 组件name
    const { name } = ctx.query;
    const data = await ctx.model.File.findOne({ hash: name });

    this.success(data);
  }
}
module.exports = UserController;

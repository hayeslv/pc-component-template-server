/*
 * @Author: Lvhz
 * @Date: 2021-08-17 09:27:15
 * @Description: Description
 */
'use strict';
const BaseController = require('./base');

class UserController extends BaseController {
  // mock数据
  // async mockData() {
  //   const { ctx } = this;
  //   await clearDB(ctx);
  //   // 图表类型：1柱状图、2折线图、3饼图，9其他类型图
  //   await initColumnData(this);
  //   ctx.body = '你成功了，勇士！';

  //   // 清空DB中数据相关的表
  //   async function clearDB(ctx) {
  //     // 删除echart中mock的全部数据
  //     await ctx.model.EchartData.remove({});
  //   }
  //   // 初始化柱状图数据
  //   async function initColumnData(that) {
  //     const { service, ctx } = that;
  //     let list = [];
  //     // 柱状图1
  //     list = service.mockdata.getColunmData(1);
  //     await ctx.model.EchartData.create(list);
  //   }
  // }
}

module.exports = UserController;

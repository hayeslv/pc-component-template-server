/*
 * @Author: Lvhz
 * @Date: 2021-08-18 10:29:16
 * @Description: 图表类型echart：1柱状图、2折线图、3饼图，9其他类型图
 */
'use strict';
const { Service } = require('egg');
class mockdataService extends Service {
  getColunmData(order = 1) {
    let list = [];
    switch (parseInt(order)) {
      case 1: list = [
        { name: '天元区', value1: 5000, type: 1, order },
        { name: '芦淞区', value1: 2200, type: 1, order },
        { name: '荷塘区', value1: 1000, type: 1, order },
        { name: '石峰区', value1: 500, type: 1, order },
        { name: '云龙区', value1: 1200, type: 1, order },
      ]; break;
      default: break;
    }
    return list;
  }
}

module.exports = mockdataService;

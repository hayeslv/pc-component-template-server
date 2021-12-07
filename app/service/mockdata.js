/*
 * @Author: Lvhz
 * @Date: 2021-08-17 17:54:07
 * @Description:
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
      case 2: list = [
        { name: '今日结案', value1: 3456, type: 1, order },
        { name: '今日立案', value1: 3456, type: 1, order },
        { name: '今日上报', value1: 8456, type: 1, order },
      ]; break;
      default: break;
    }
    return list;
  }
}

module.exports = mockdataService;

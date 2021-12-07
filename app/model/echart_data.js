/*
 * @Author: Lvhz
 * @Date: 2021-08-12 15:21:09
 * @Description: echart数据
 */
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const EchartDataSchema = new Schema({
    __v: { type: Number, select: false },
    type: { type: Number, require: true }, // 图表类型：1柱状图、2折线图、3饼图，9其他类型图
    order: { type: Number, require: true }, // 当前type下的次序
    name: { type: String, require: true }, // 横坐标
    value1: { type: String, require: true }, // 数据1
    value2: { type: String, require: false }, // 数据2
  }, { timestamps: true });

  return mongoose.model('EchartData', EchartDataSchema, 'echart_data');
};

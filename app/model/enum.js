/*
 * @Author: Lvhz
 * @Date: 2021-08-18 10:13:55
 * @Description: 枚举
 */
'use strict';
// echart类型：1柱状图、2折线图、3饼图，9其他类型图
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const EnumSchema = new Schema({
    __v: { type: Number, select: false },
    type: { type: String, require: true }, // type：echart图表
    name: { type: String, require: true }, // 中文名
    value: { type: String, require: false },
    code: { type: Number, require: true }, // 编码
  }, { timestamps: true });

  return mongoose.model('Enum', EnumSchema, 'Enum');
};

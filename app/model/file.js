/*
 * @Author: Lvhz
 * @Date: 2021-08-12 15:21:09
 * @Description:
 */
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const FileSchema = new Schema({
    __v: { type: Number, select: false },
    sourceType: { type: Number, require: true }, // 文件类型：1-echart、2文章
    chartType: { type: Number, require: false }, // 图表类型：1柱状图、2折线图、3饼图，9其他类型图
    url: { type: String, require: true },
    hash: { type: String, require: true },
  }, { timestamps: true });

  return mongoose.model('File', FileSchema, 'file');
};

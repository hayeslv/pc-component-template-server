/*
 * @Author: Lvhz
 * @Date: 2021-08-17 09:27:15
 * @Description: Description
 */
'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };
exports.routerGroup = {
  enable: true,
  package: 'egg-router-group',
};
// exports.mongoose = {
//   enable: true,
//   package: 'egg-mongoose',
// };
exports.mongoose = {
  enable: true,
  package: 'egg-mysql',
};
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

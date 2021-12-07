/*
 * @Author: Lvhz
 * @Date: 2021-08-17 09:27:15
 * @Description: Description
 */
/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1629163459050_9835';

  // 打开文件上传
  config.multipart = {
    mode: 'file',
    whitelist: () => true,
    fileSize: 100 * 1024 * 1024,
  };
  // 上传文件的配置
  config.UPLOAD_DIR = path.resolve(__dirname, '..', 'app/public');

  // add your middleware config here
  config.middleware = [];

  // 静态文件路径
  config.static = {
    prefix: '/public',
    dir: path.join(appInfo.baseDir, 'app/public'), // `String` or `Array:[dir1, dir2, ...]` 静态化目录,可以设置多个静态化目录
    dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
    preload: false,
  };

  // 端口号
  config.cluster = {
    listen: {
      path: '',
      port: 7011,
      hostname: '0.0.0.0',
    },
    // https: {
    //   key: path.join(__dirname, '../app/utils/cert/5746197_www.dylanlv.com.key'),
    //   cert: path.join(__dirname, '../app/utils/cert/5746197_www.dylanlv.com.pem'),
    // },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  return {
    ...config,
    ...userConfig,
    security: {
      csrf: {
        enable: false,
        headerName: 'x-csrf-token', // 自定义请求头
      },
    },
    cors: {
      origin: '*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    },
    mysql: {
      client: {
        host: '192.168.2.135',
        // host: '0.0.0.0',
        port: '3306',
        user: 'root',
        password: '123',
        database: 'pc-comp',
      },
    },
  };
};

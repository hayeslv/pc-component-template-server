/*
 * @Author: Lvhz
 * @Date: 2021-08-17 09:27:15
 * @Description: Description
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/uploadfile', controller.util.uploadfile); // 文件上传
  router.post('/api/uploadfileChunk', controller.util.uploadfileChunk); // 文件切片上传
  router.post('/api/mergefile', controller.util.mergefile); // 文件切片合并
  router.post('/api/checkfile', controller.util.checkfile); // 检查文件
  router.post('/api/saveFileUrl', controller.file.saveFileUrl); // 存储文件路径

  // router.group({ name: 'user', prefix: '/api/user' }, router => {
  //   console.log(router);
  //   // const { initdb } = controller.user;

  //   // router.get('/initdb', initdb);
  // });
  router.group({ name: 'db', prefix: '/api/db' }, router => {
    const { initDB } = controller.db;

    router.get('/initdb', initDB);
  });

  router.group({ name: 'component', prefix: '/api/component' }, router => {
    const { getFileByCompName } = controller.component;

    // 根据组件name，获取echart图表地址
    router.get('/echart', getFileByCompName);
  });

  // ------ 上面内容需要全部删除 ------
  // 数据库操作
  router.group({ name: 'test', prefix: '/api/test' }, router => {
    const { createTable, deleteTable, insterData, deleteData, updateData, addField, deleteField, renameTable, testget } = controller.test;

    router.get('/createTable', createTable);
    router.get('/deleteTable', deleteTable);
    router.get('/insterData', insterData);
    router.get('/deleteData', deleteData);
    router.get('/updateData', updateData);
    router.get('/addField', addField);
    router.get('/deleteField', deleteField);
    router.get('/renameTable', renameTable);

    router.post('/testget', testget);
  });
  // 公共
  router.group({ name: 'common', prefix: '/api/common' }, router => {
    const { getArticleRoutes } = controller.common;

    router.get('/getArticleRoutes', getArticleRoutes);
  });
  // 文件操作
  router.group({ name: 'file', prefix: '/api/file' }, router => {
    const { saveFileURL } = controller.file;

    router.post('/saveFileURL', saveFileURL);
  });
  // 文章操作
  router.group({ name: 'article', prefix: '/api/article' }, router => {
    const { getArticleType, getArticleInfo, getArticleGroupList } = controller.article;

    router.get('/getArticleType', getArticleType);
    router.get('/getArticleInfo', getArticleInfo);
    router.get('/getArticleGroupList', getArticleGroupList);
  });
};

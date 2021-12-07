/*
 * @Author: Lvhz
 * @Date: 2021-08-17 09:27:15
 * @Description: Description
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;

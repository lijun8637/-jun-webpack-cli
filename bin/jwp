#!/usr/bin/env node

/**
 * 定义指令
 * 把命令挂载到全局，执行： npm link
 * success-> xr
*/

const program = require('commander')
 
// 定义当前版本
// 定义使用方法
// 定义四个指令
program
 .version(require('../package').version)
 .usage('<command> [options]')
 .command('add', 'add a new template')
 .command('delete', 'delete a template')
 .command('list', 'list all the templates')
 .command('init', 'generate a new project from a template')
  
// 解析命令行参数
program.parse(process.argv)
#!/usr/bin/env node

/**
 * 配置基本命令
*/

const { chalk, program } = require('../libs/tools/module')
const packageData = require('../package.json')
const log = console.log; 
//当前cli的名称 
const cliName = packageData.name; console.log(chalk.yellowBright.bold(`🌟---------------------------------------🌟\n    👏 welcome to use ${cliName}👏    \n🌟---------------------------------------🌟`));

//credit-cli 的版本信息
program
  .version(`${cliName}@${packageData.version}`)
  .usage('<command> [option]')

//在 --help 的时候进行调整
program.on('--help', () => {
  log(`Run ${chalk.red(`${cliName} <command> --help`)} show details`)
})
//解析用户执行命令时候传入的参数 根据参数进行配置 
program.parse(process.argv)

if (!program.args.length) {
  program.help()
}

// 解析命令

//创建create命令 并进行操作  f
program.command('create <app-name>')
  .description("create a new project")
  .option("-f,--force", 'overwrite target if it exists')
  .action((name, cmd) => {
    //我们输入的name = app-name  
    // cmd中包含了一些参数信息 比如输入的-f、--force等
    if (!name) {
      log(chalk.red("please write project name"))
      return;
    }
    require('../libs/command/create.js')(name, clearArgs(cmd))
}) 


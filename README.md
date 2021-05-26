### jun-webpack-cli

```
package.json
  "name": "jun-webpack-cli", //脚手架名称
  "version": "1.0.0",         //当前包的版本
  "description": "jun-webpack-cli",
  "bin": "index", //入口文件
  "gitOwner": "webpack5-template", //配置的的git模版
  "defaultOwner": "webpack5-template",//默认的git模版 
  "keywords": [
    "cli",
    "jun-webpack-cli"
  ],

```
cd jun-webpack-cli

npm unlink 

npm cache clean --force   清理缓存命令

npm link

-D handlebars

cnpm i -D  commander download-git-repo inquirer ora chalk


cnpm i -D babel-cli babel-preset-env babel-env chalk commander download-git-repo ini inquirer log-symbols ora

babel-cli/babel-env/babel-preset-env: 语法转换

commander: 命令行工具

download-git-repo: 用来下载远程模板

ini: 格式转换

inquirer: 交互式命令行工具

ora: 显示loading动画

chalk: 修改控制台输出内容样式

log-symbols: 显示出 √ 或 × 等的图标


### 安装依赖

`npm install`

### 启动

`npm run watch`

### 执行 `npm link`

此时就可以使用 `eos` 命令了。

  ` "postinstall": "eos config set"`
  
- `eos init vue-template myVue`
- `eos config get`
- `eos config set type orgs`
- `eos config set registry vuejs-templates`

- `eos config set type users`
- `eos config set registry YvetteLau`

```
├── bin
│   └── www             //可执行文件
├── dist
    ├── ...             //生成文件
└── src
    ├── config.js       //管理eos配置文件
    ├── index.js        //主流程入口文件
    ├── init.js         //init command
    ├── main.js         //入口文件
    └── utils
        ├── constants.js //定义常量
        ├── get.js       //获取模板
        └── rc.js        //配置文件
├── .babelrc             //babel配置文件
————————————————

```



## 提交规范

### 1、提交日志规范（帮助编写特定的说明）

（1）git提交规范插件（全局安装）

```bash
npm install -g commitizen
```

（2）在当前项目下

```bash
commitizen init cz-conventional-changelog --save-dev --save-exact
```

（3）然后每次修改文件之后进行git提交，就可以使用相应的commit规范了

```bash
git add .
git cz
# 经过一系列的选择后
git log # 就可以看到此次commit了
```

commit的类型：

- feat: 新功能、新特性
- fix: 修改 bug
- perf: 更改代码，以提高性能（在不影响代码内部行为的前提下，对程序性能进行优化）
- refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
- docs: 文档修改
- style: 代码格式修改, 注意不是 css 修改（例如分号修改）
- test: 测试用例新增、修改
- build: 影响项目构建或依赖项修改
- revert: 恢复上一次提交
- ci: 持续集成相关文件修改
- chore: 其他修改（不在上述类型中的修改）
- release: 发布新版本
- workflow: 工作流相关文件修改

如果依然有人想用原本的git commit，那么就用git hook来验证：validate-commit-msg 插件



### 2、husky：提交代码规范（提交前进行检测）

（1）安装

```bash
npm install -D husky
```

（2）在packgae.json中添加prepare脚本

```bash
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

（3）prepare脚本会在`npm install`（不带参数）之后自动执行。也就是说当我们执行npm install安装完项目依赖后会执行 `husky install`命令，该命令会创建.husky/目录并指定该目录为git hooks所在的目录。

```bash
npm run prepare
# 或者
npm i
```

（4）添加git hooks，运行一下命令创建git hooks

```bash
npx husky add .husky/pre-commit "npm run test"
# 注 node14版本对应的husky7.0.1有点问题，使用下面的方式
node node_modules\husky\lib\bin.js add .husky\pre-commit "npm run test"
```

（5）测试：修改packgae.json，修改test，取消 --fix（自动修复eslint错误）

```json
{
  "scripts": {
    "test": "npm run lint && npm run test-local",
  }
}
```

故意少写分号（让eslint报错），执行提交命令

```bash
git add .
git commit -m "husky-commit-test"
```

此时会发现无法提交，提示错误

执行如下命令，可以看到当前所有改变都在暂存区里，没有提交到git的管理区里

```bash
git status
```








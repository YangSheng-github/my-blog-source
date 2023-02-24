#!/usr/bin/env sh
 
# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件， npm run docs:build
yarn build
rm -rf ../my-blog-dist/*

# 提交更新代码
git add -A
git commit -m 'node_modules变更'
git push

# 将build生成的dist目录拷贝至上一层目录中
cp -rf .vuepress/dist ../my-blog-dist/
cp -r .github ../my-blog-dist/dist/

# 进入生成的文件夹
cd ../my-blog-dist/dist

# git初始化，每次初始化不影响推送
git init -b gh-pages
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push -f https://github.com/YangSheng-github/YangSheng-gitee.git gh-pages

scp -v -r * root@121.36.102.218:/www/wwwroot/web-ysh.top
cnp200@YS

cd - 
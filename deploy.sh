#!/usr/bin/env sh
 
# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件， npm run docs:build
yarn build
rm -rf ../my-blog-dist/*

# 提交更新代码
git add -A
git commit -m 'node_modules变更'
git push -u origin master:dev

# 将build生成的dist目录拷贝至上一层目录中
cp -rf docs/.vuepress/dist ../my-blog-dist/

# 进入生成的文件夹
cd ../my-blog-dist/dist

# git初始化，每次初始化不影响推送
git init
git add -A
git commit -m 'deploy'
git remote add origin https://github.com/Yangsheng-WEB/my-blog.git
git push -u origin master:gh-pages
git checkout gh-pages
# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:Yangsheng-WEB/my-blog.git master:gh-pages
#!/usr/bin/env sh
 
# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件， npm run docs:build
yarn build
rm -rf ../my-blog-dist-github/*

# 提交更新代码
git add -A
git commit -m 'node_modules变更'
git push

# 将build生成的dist目录拷贝至上一层目录中
cp -rf docs/.vuepress/dist ../my-blog-dist-github/
cp -r .github ../my-blog-dist-github/

# 进入生成的文件夹
cd ../my-blog-dist-github/dist

# git初始化，每次初始化不影响推送
git init -b gh-pages
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git remote add origin https://github.com/Yangsheng-WEB/my-blog.git
git push -f https://github.com/Yangsheng-WEB/my-blog.git gh-pages

cd - 
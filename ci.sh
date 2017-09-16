#!/bin/sh
git config --global user.name ${GIT_NAME}
git config --global user.email ${GIT_EMAIL}
if git branch | grep -w gh-pages > /dev/null 2>&1; then git branch -D gh-pages; fi
git checkout --orphan gh-pages
yes | now rm $INSTANCE_NAME -t $NOW_TOKEN
url=`now --public -t $NOW_TOKEN`
npm run clean
env NOW_BASE=$url npm run build:gh
ls -a | grep -v -E "^(\.|\.\.|\.git|public)$" | xargs rm -rf
mv ./public/* ./
rm -rf ./public
if [ ! -z ${CNAME} ]; then echo -n ${CNAME} > CNAME; fi
git add -A
git commit -m "update [skip ci]"
git push -f ${GIT_REPO} gh-pages

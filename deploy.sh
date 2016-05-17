#!/bin/sh

git checkout --orphan gh-pages
git commit -m 'update gh-pages'
git push origin gh-pages -f
git checkout master
git branch -D gh-pages

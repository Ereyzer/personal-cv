#!/bin/bash

DEV='dev'
CURRENT=$(git branch --show-current)

git push origin $CURRENT
PR_LINK=$(gh pr create --base $DEV --head $CURRENT --fill)
git checkout $DEV

PR_NUM=$(echo $PR_LINK | rev | cut -d/ -f1 | rev)
echo $PR_NUM

gh pr merge $PR_NUM --admin
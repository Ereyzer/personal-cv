#!/bin/bash

DEV='dev'
CURRENT=$(git branch --show-current)
if [ $CURRENT = $DEV ]; then
 
    git pull origin $DEV
    npm run deploy
else
./scripts/merge.sh
 
    git pull origin $DEV
    npm run deploy
fi
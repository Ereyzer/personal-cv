#!/bin/bash

DEV='dev'
CURRENT=$(git branch --show-current)
if [ $CURRENT = $DEV ]; then
 
    git pull origin $DEV
    npm run clear:dist
    parcel build src/index.html --public-url /personal-cv/
    gh-pages -d dist
else
./scripts/merge.sh
 
    git pull origin $DEV
    npm run deploy
fi
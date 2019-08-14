#!/bin/sh

# BABEL_ENV related only to babel configuration `babel.config.js`
# Currently we have only 2 configurations:
# * production
# * test
export BABEL_ENV=production

if [ "$NODE_ENV" = "production" ]; then
  npm run server:prod
else
  npm run server:dev
fi

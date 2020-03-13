#!/usr/bin/env bash

# shortcut to run specific test
# you should run it from the main directory - `soc-ui/`
# for example:
# $ ./jest/test.sh ./source/components/Input/__tests__/Input.test.jsx
#
# You can also pass "-u" flag in order to update snapshots
# for example:
# $ ./jest/test.sh ./source/components/Input/__tests__/Input.test.jsx -u

JEST="./node_modules/jest-cli/bin/jest.js"
JEST_CONFIG="./jest/jest.config.js"

export BABEL_ENV=test

if [ -z "${2}" ];
then
    BABEL_DISABLE_CACHE=1 node "${JEST}" --config "${JEST_CONFIG}" "$1"
else
    BABEL_DISABLE_CACHE=1 node "${JEST}" --config "${JEST_CONFIG}" "$1" "$2"
fi

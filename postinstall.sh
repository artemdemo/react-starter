#!/usr/bin/env bash

echo "Copying hooks"
yes | cp -i hooks/pre-commit.sh .git/hooks/pre-commit


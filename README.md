# React with webpack - starter pack

Basic packages and scripts to start app developing in react, redux and webpack

## yarn commands

- `$ yarn start` - build bundle, but without minification and serve it in the browser
- `$ yarn build` - build version of bundle
- `$ yarn serve` - serve build files
- `$ yarn outdated` - check if some of yarn packages are outdated
- `$ yarn stats` - analyze code distribution in bundle files
- `$ yarn lint` - run linting
- `$ yarn test` - run tests

**Notice**

In order to run command in production mode you'll need use env variable `NODE_ENV='production'`

### Check for outdated packages

```
$ yarn outdated
```

After that you can upgrade them:

```
$ yarn update [-g] [<pkg>...]
```

If you want to upgrade to the latest version use:

```
$ yarn update <pkg>@latest
```

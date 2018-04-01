# Cond

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

React Conditional Component a declarative way to branch logic during render:

```
<Cond test={componentState}>
  <Cond.State equals={'LOADING'} component={LoadingView} />
  <Cond.State equals={'READY'} component={ShowView} />
  <Cond.State equals={'ERROR'} component={ErrorView} />
</Cond>
```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

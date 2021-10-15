# Building A React Sample

---

## Developer

First, use `npm install`,
and use below npm script

```bash
npm run dev // building serve to develop with local
npm run build // bundle code and optimization
npm run test // test code
```

### Tip:build

If you want to push data to remote, we will do this command `npm run test` pre your command `git commit`.

When test fail, you can try delete file and folder with this path `[youModifyFolder]/__snapshots__/[fileName].spec.tsx.snap`

Or you can try this command `npm run test -- -u`. but this command just tell you that your test file is pass or not,and you still need do above delete method.

And the result should be success, you commit become pass.
So, if result not change, you need to checkout your test file.

---

## css

If you want build common style, just announce the style class in `global.scss`.
You want more that use scss's variable, recommand create a file and that just use to announce variable,
In anywhere, just `import` the announce file.

In your components, please use `*.module.scss` to set style.
Why dose do it?
We will set a unique to module, so don't worry affect global css!

Laster, if you more like `*.css`, we can support it.

### Tip:css

Use other css preload, you need to change this file `webpack.config.ts`

---

## language

The project allow developer use `typescript` or `javascript`, but we more recommand use `typescript`.
Because the `typescript` can tip types for you for everyone!

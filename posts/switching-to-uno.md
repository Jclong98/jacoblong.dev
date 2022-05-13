---
title: Switching to UnoCSS
date: 2022-05-07
author: Jacob Long
---

Replacing [TailwindCSS](https://tailwindcss.com/) with [UnoCSS](https://github.com/unocss/unocss/tree/main/packages/preset-typography) in a VitePress project

---

[[toc]]

In a previous blogpost I had mentioned wanting to use UnoCSS to style my site, but I ended up using TailwindCSS because I didn't think that VitePress had the ability to use Vite plugins. I was happy to learn that I was mistaken when I found [this github issue](https://github.com/vuejs/vitepress/issues/189).

Basically, this issue asks that `vite.config.js` be loaded and used by VitePress, allowing the use of other Vite plugins, thus enabling the use of UnoCSS and many other Vite plugins should I choose to use any in the future 😁

## Adding UnoCSS

To actually add UnoCSS, first I had to remove Tailwind from the package.json, remove its use in `.vitepress/theme/style.css`, and remove the `tailwind.config.js` and `postss.config.js` files.

Then I had to install UnoCSS

```
pnpm add -D unocss
```

and create `vite.config.js`

```js vite.config.js
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'

export default {
  plugins: [
    Unocss({
      presets: [presetUno()],
    }),
  ],
}
```

Then, in `.vitepress/theme.index` add the following line to load the styles

```js .vitepress/theme.index
import 'uno.css'
```

After all that, the site looks like this:

![unocss no reset](/unocss-no-reset.png)

## Style Reset

Well that's not right. I forgot to add the style reset. Luckily, UnoCSS comes with some style reset packages.

All you've got to do to add them is install the style reset and import it where you're importing `uno.css`

```
npm i @unocss/reset
```

I chose Tailwind Preflights because it was what I was using previously and it meant that I didn't have to change how I styled anything.

```js .vitepress/theme.index
import 'uno.css'
import '@unocss/reset/tailwind.css'
```

Now the homepage looks like this:

![homepage with reset](/unocss-with-reset.png)

Much better!

## Typography

The last step is to get the typography back with the [UnoCSS Typography Package](https://github.com/unocss/unocss/tree/main/packages/preset-typography) and the site should look almost exactly the same as before! I say almost because the way UnoCSS typography is styled is a bit different.

Right now a blog post looks like this:

![no typography](/unocss-no-typography.png)

```
pnpm add @unocss/preset-typography -D
```

`vite.config.js`

```js vite.config.js
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import { presetTypography } from '@unocss/preset-typography'

export default {
  plugins: [
    Unocss({
      presets: [presetUno(), presetTypography()],
    }),
  ],
}
```

and bada bing bada boom we have styled typography.

![with typography](/unocss-with-typography.png)

The last thing to do is style up some of the elements like **hr** and **pre**

To do this, I added some stlye changes to the presetTypography plugin:

```js
presetTypography({
  cssExtend: {
    hr: {
      background: 'rgba(125, 125, 125, 0.5)',
      height: '1px',
    },
    // reset both pre and code first to override default
    'pre,code': {
      background: '',
    },
    pre: {
      background: 'rgba(0, 0, 0, 0.07)',
    },
  },
}),
```

and found some themes for that typography at this neat git repo: [https://github.com/PrismJS/prism-themes](https://github.com/PrismJS/prism-themes)

For light mode I chose [Coldark Cold by Armand Philippot](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-coldark-cold.css)

and for dark mode [Atom Dark by Joe Gibson](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-atom-dark.css)

The final Product Looks like this:

![unocss final style](/unocss-final-style.png)

## Concluding Thoughts

UnoCSS has a lot of customization options to offer with regex based rules and macros to apply multiple classes at once so I'd like to use more of it in the future. I also am interested in the UnoCSS icons package to replace the Iconify Vue components that I'm using.

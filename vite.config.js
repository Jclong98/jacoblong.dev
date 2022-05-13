import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import { presetTypography } from '@unocss/preset-typography'

export default {
  plugins: [
    Unocss({
      shortcuts: [
        {
          btn: 'rounded-lg bg-stone-100 dark:bg-stone-900 p-4 transition duration-200 active:scale-95 hover:brightness-75',
        },
        { card: 'bg-white dark:bg-stone-900 rounded-lg p-4' },
      ],
      presets: [
        presetUno(),
        presetTypography({
          cssExtend: {
            hr: {
              background: 'rgba(125, 125, 125, 0.4)',
              height: '1px',
            },
            // reset both pre and code first to override default
            'pre,code': {
              background: '',
            },
            pre: {
              background: '#f3f4f6',
            },
            'html.dark pre': {
              background: '#1c1917',
            },
          },
        }),
      ],
    }),
  ],
}

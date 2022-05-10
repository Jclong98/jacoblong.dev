import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import { presetTypography } from '@unocss/preset-typography'

export default {
  plugins: [
    Unocss({
      shortcuts: [
        {
          btn: 'rounded-lg bg-gray-100 dark:bg-stone-900 p-4 shadow-lg transition duration-200 active:scale-90',
        },
        { card: 'bg-white dark:bg-stone-900 rounded-lg p-4 shadow-lg' },
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

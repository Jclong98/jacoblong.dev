import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import { presetTypography } from '@unocss/preset-typography'

export default {
  plugins: [
    Unocss({
      presets: [
        presetUno(),
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
      ],
    }),
  ],
}

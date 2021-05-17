import { resolve } from 'path'
import { mergeWindicssConfig, defineConfig } from 'vite-plugin-windicss'
import BaseConfig from '@slidev/client/windi.config'

// extend the base config
export default mergeWindicssConfig(
  BaseConfig,
  defineConfig({
    extract: {
      include: [
        resolve(__dirname, '**/*.{vue,ts}'),
      ],
    },
    shortcuts: {
      // custom the default background
      'bg-main': 'bg-purple-50 text-purple-900 dark:(bg-[#121212] text-purple-100)',
      'border-image': 'border border-[#121212] border-opacity-10 shadow-md shadow-[#121212] dark:(border-purple-100 border-opacity-10 shadow-purple-100)',
      'bg-barBottom': 'bg-purple-900 text-purple-50 dark:(bg-purple-900 text-purple-50)',
    },
    theme: {
      extend: {
        // fonts can be replaced here, remember to update the web font links in `index.html`
        fontFamily: {
          sans: '"Rubik", ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
          mono: '"Fira Code", monospace',
        },
      },
    },
  }),
)

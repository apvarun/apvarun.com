import Typography from 'typography'

import wordpress2015Theme from 'typography-theme-wordpress-2015'
const typography = new Typography(
  Object.assign(
    {},
    wordpress2015Theme,
    {
      googleFonts: [
        {
          name: 'Varela Round',
          styles: ['400']
        },
        {
          name: 'Oxygen',
          styles: ['700']
        }
      ],
      headerFontFamily: ['Oxygen', 'serif'],
      bodyFontFamily: ['Varela Round', 'serif'],
    }
  )
)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}


const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };

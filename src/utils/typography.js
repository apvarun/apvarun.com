import Typography from 'typography'

import wordpress2015Theme from 'typography-theme-wordpress-2015'
const typography = new Typography(wordpress2015Theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}


const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };
// export default typography

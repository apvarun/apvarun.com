import Typography from 'typography'
import wordpress2015Theme from 'typography-theme-wordpress-2015'
const typography = new Typography(wordpress2015Theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography

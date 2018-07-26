import Typography from 'typography'
import funstonTheme from 'typography-theme-funston'
const typography = new Typography(funstonTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography

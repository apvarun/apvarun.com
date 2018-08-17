import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    let blogPath = `/blog`
    let projectPath = `/projects`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    let menu = (
      <div style={{ fontSize: '1rem', fontFamily: "'Patua One',sans-serif" }}>
        <Link
          style={{ paddingRight: '10px' }}
          activeStyle={{
            color: '#E0324C',
          }}
          to={'/'}
          exact
        >
          Home
        </Link>
        <Link
          style={{ paddingRight: '10px' }}
          activeStyle={{
            color: '#E0324C',
          }}
          to={'/projects'}
          exact
        >
          Projects
        </Link>
        <Link
          style={{ paddingRight: '10px' }}
          activeStyle={{
            color: '#E0324C',
          }}
          to={'/blog'}
          exact
        >
          Blog
        </Link>
      </div>
    )

    if (
      location.pathname === rootPath ||
      location.pathname === blogPath ||
      location.pathname === projectPath
    ) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
              paddingRight: '10px',
            }}
            to={'/'}
          >
            apvarun
          </Link>
          {menu}
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(1),
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
              paddingRight: '10px',
            }}
            to={'/'}
          >
            apvarun
          </Link>
          {menu}
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children()}
      </div>
    )
  }
}

export default Template

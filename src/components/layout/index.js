import React from 'react'
import {Link} from 'gatsby'

import { rhythm, scale } from '../../utils/typography'
import './style.scss'

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
      <div style={{ fontSize: '1rem'}} className="menu">
        <Link
          style={{ paddingRight: '10px' }}
          activeStyle={{
            color: '#E0324C',
          }}
          to={'/'}
        >
          Home
        </Link>
        <Link
          style={{ paddingRight: '10px' }}
          activeStyle={{
            color: '#E0324C',
          }}
          to={'/projects'}
        >
          Projects
        </Link>
        <Link
          style={{ paddingRight: '10px' }}
          activeStyle={{
            color: '#E0324C',
          }}
          to={'/blog'}
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
      <nav
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
      </nav>
    )
  }
}

export default Template

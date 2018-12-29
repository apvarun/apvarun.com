import React, {Fragment} from 'react'
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
      <div className="menu">
        <Link to={'/'} activeClassName="active">
          Home
        </Link>
        <Link to={'/projects'} activeClassName="active">
          Projects
        </Link>
        <Link to={'/blog'} activeClassName="active">
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
          }}
        >
          <Link className="title" to={'/'}>
            apvarun
          </Link>
          {menu}
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
            marginBottom: rhythm(1)
          }}
        >
          <Link className="title" to={'/'}>
            apvarun
          </Link>
          {menu}
        </h3>
      )
    }
    return (
      <Fragment>
        <nav>
          {header}
        </nav>
        <section 
          className="content-box"
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(25),
            padding: `${rhythm(0)} ${rhythm(3 / 4)}`,
          }}>
        {children}
        </section>
      </Fragment>
    )
  }
}

export default Template

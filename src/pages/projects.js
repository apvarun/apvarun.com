import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

import ProjectList from '../utils/project-list'
import styles from './style.module.css'

class Projects extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={siteTitle} />
        <h2
          style={{
            marginBottom: rhythm(1 / 2),
          }}
        >
          Projects
        </h2>
        {ProjectList.map((project, index) => (
          <div
            key={index}
            className={styles.card}
            style={{
              background: project.color,
              flexDirection: !(index & 1) ? 'row' : 'row-reverse',
              textAlign: !(index & 1) ? 'left' : 'right',
            }}
          >
            <div>
              <h2>{project.name}</h2>
              <p>{project.excerpt}</p>
              <a
                style={{
                  backgroundColor: project.button,
                }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit
              </a>
            </div>
            <div className={styles.img}>
              <img src={project.image} alt={`${project.name} - Preview`} />
            </div>
          </div>
        ))}
        <hr />
        <Bio />
      </div>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query ProjectQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

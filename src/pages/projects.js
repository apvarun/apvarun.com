import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

import ProjectList from '../utils/project-list'
import styles from './style.module.scss'

export default (props) => (
  <StaticQuery
    query={graphql`
      query ProjectQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Layout location={props.location}>
        <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} defaultTitle={data.site.siteMetadata.title} />
        <h2
          style={{
            marginBottom: rhythm(1 / 2),
          }}
          className="heading"
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
      </Layout>
    )}
  />
);

import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import BioHome from '../components/BioHome'
import Layout from '../components/layout'

export default (props) => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
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
        <BioHome />
      </Layout>
    )}
  />
)
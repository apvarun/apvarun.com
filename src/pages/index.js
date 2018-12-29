import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import BioHome from '../components/BioHome'
import Layout from '../components/layout'

// class BlogIndex extends React.Component {
//   render() {
//     const siteTitle = get(this, 'props.data.site.siteMetadata.title')

//     return (
//       <Layout location={props.location}>
//         <Helmet title={siteTitle} />
//         <BioHome />
//       </Layout>
//     )
//   }
// }

// export default BlogIndex

// export const pageQuery = graphql`
//   query IndexQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
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
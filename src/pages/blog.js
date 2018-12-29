import React from 'react'
import {StaticQuery,Link, graphql} from 'gatsby'

import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'
import Layout from "../components/layout"

// class Blog extends React.Component {
//   render() {
//     const siteTitle = get(this, 'props.data.site.siteMetadata.title')
//     const posts = get(this, 'props.data.allMarkdownRemark.edges')

//     return (
//       <Layout location={props.location}>
//         <Helmet title={siteTitle} />
//         {posts.map(({ node }) => {
//           const title = get(node, 'frontmatter.title') || node.fields.slug
//           return (
//             <div key={node.fields.slug}>
//               <h3
//                 style={{
//                   marginBottom: rhythm(1 / 4),
//                 }}
//               >
//                 <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
//                   {title}
//                 </Link>
//               </h3>
//               <small>{node.frontmatter.date}</small>
//               <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
//             </div>
//           )
//         })}
//         <hr />
//         <Bio />
//       </Layout>
//     )
//   }
// }

// export default Blog

// export const pageQuery = graphql`
//   query BlogQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "DD MMMM, YYYY")
//             title
//           }
//         }
//       }
//     }
//   }
// `


export default ( props ) => (
  <StaticQuery
    query={graphql`
      query BlogQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "DD MMMM, YYYY")
                title
              }
            }
          }
        }
      }
    `}
    render={data => {
      const posts = data.allMarkdownRemark.edges
      // console.log(posts)
      return(
        <Layout location={props.location}>
          <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} defaultTitle={data.site.siteMetadata.title} />
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })
          }
          <hr />
          <Bio />
        </Layout>
      )}
    }
  />
)
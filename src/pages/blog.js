import React from 'react'
import {StaticQuery,Link, graphql} from 'gatsby'

import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'
import Layout from "../components/layout"

export default ( props ) => (
  <StaticQuery
    query={graphql`
      query BlogQuery {
        site {
          siteMetadata {
            title
            description
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
          <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} defaultTitle={data.site.siteMetadata.title}>
            <meta name="description" content={data.site.siteMetadata.description} />
          </Helmet>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div key={node.fields.slug} className="blog-post-card">
                <h3>
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

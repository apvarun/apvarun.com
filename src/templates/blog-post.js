import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'
import "./prism-dracula.css"
// import "prismjs/plugins/line-numbers/prism-line-numbers.css"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pageContext
    console.log(post)

    return (
      <Layout location={this.props.pageContext.slug}>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`}>
          <meta name="description" content={this.props.data.site.siteMetadata.description} />
        </Helmet>
        <div className="post-header">
          <h1>{post.frontmatter.title}</h1>
          <small style={{...scale(-1 / 5)}}>
            <span>{post.frontmatter.date}</span>
            <span>{post.fields.readingTime.text}</span>
          </small>
        </div>
        <div className="markdown" dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage
      }
      fields {
        slug
        readingTime {
          text
        }
      }
    }
  }
`

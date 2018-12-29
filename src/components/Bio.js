import React from 'react'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <p>
          I'm <strong>ναяυη α ρ ⚡️</strong>, a front-end dev from Bangalore,
          building things for the web.&nbsp;
          <a href="https://twitter.com/apvarun" target="_blank">
            Follow me on Twitter
          </a>
        </p>
        <img
          src="https://avatars.io/twitter/apvarun"
          alt="Varun A P"
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
      </div>
    )
  }
}

export default Bio

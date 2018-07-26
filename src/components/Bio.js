import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

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
          I'm <strong>𝕍𝔸ℝ𝕌ℕ 𝔸 ℙ ⚡</strong> who lives and works in Bangalore,
          building useful things for everyone.&nbsp;
          <a href="https://twitter.com/apvarun" target="_blank">
            Follow me on Twitter
          </a>
        </p>
        <img
          src={profilePic}
          alt={`Varun A P`}
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

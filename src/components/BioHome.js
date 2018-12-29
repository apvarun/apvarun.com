import React from 'react'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

import CodepenIcon from './codepen.svg'
import DribbbleIcon from './dribbble.svg'
import GithubIcon from './github.svg'
import TwitterIcon from './twitter.svg'
import MediumIcon from './medium.svg'

class BioHome extends React.Component {
  render() {
    return (
      <div
        style={{
          marginBottom: rhythm(2.5),
          marginTop: rhythm(2),
        }}
      >
        <h2 className="heading">Hey there 👋🏻</h2>
        <p>
          I'm frontend developer at <a href="https://www.springboard.com" target="_blank">Springboard</a> and a CS grad based in
          Bangalore. I love building useful things for the web. Here are a few
          capabilities that I am equipped with.
        </p>
        <ul>
          <li>UI Development</li>
          <li>Web Performance</li>
          <li>Web Design</li>
          <li>Tooling development</li>
        </ul>
        <p>
          I love minimalistic designs that deliver better user experiences,
          rather than fancy graphics &amp; animations.
        </p>
        {/* <h3>#frontend&nbsp;#developer&nbsp;#designer&nbsp;</h3> */}
        <img
          className="profile-pic"
          src="https://avatars.io/twitter/apvarun"
          alt={`Varun A P`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(8),
            height: rhythm(8),
            float: 'right',
            transform: 'translate(0%,-25%)',
            zIndex: '-1',
            opacity: '0.6',
          }}
        />
        <h3>Get in touch</h3>
        <p>Feel free to get in touch with me.</p>
        <div>
          <ol style={{ listStyleType: 'none', marginLeft: 0 }} className="sharing-list">
            <li>
              <a
                href="https://twitter.com/apvarun"
                target="_blank"
                rel="noopener"
              >
                <img
                  src={TwitterIcon}
                  alt="Twitter"
                  style={{ width: '30px' }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/apvarun"
                target="_blank"
                rel="noopener"
              >
                <img src={GithubIcon} alt="GitHub" style={{ width: '30px' }} />
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@apvarun"
                target="_blank"
                rel="noopener"
              >
                <img src={MediumIcon} alt="Medium" style={{ width: '30px' }} />
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/apvarun/"
                target="_blank"
                rel="noopener"
              >
                <img
                  src={CodepenIcon}
                  alt="Codepen"
                  style={{ width: '30px' }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com/apvarun"
                target="_blank"
                rel="noopener"
              >
                <img
                  src={DribbbleIcon}
                  alt="Dribbble"
                  style={{ width: '30px' }}
                />
              </a>
            </li>
          </ol>
        </div>
        <p
          style={{
            transform: 'rotate(270deg) translate(125%, -250%)',
            float: 'right',
            fontSize: '0.8rem',
            position: 'absolute',
            MozUserSelect: 'none',
            WebkitUserSelect: 'none',
            msUserSelect: 'none',
            opacity: '0.25'
          }}
        >
          @apvarun
        </p>
      </div>
    )
  }
}

export default BioHome

<template>
  <div class="nav-container">
    <nav>

      <div class="name">
        <g-link to="/">Varun A P</g-link>
      </div>

      <ul>
        <li v-for="(linkItem, index) in navigationLinks" v-bind:key="index">
          <g-link v-bind:to="linkItem.link" v-bind:exact="true" exact-active-class="active">
            {{ linkItem.title }}
          </g-link>
        </li>
        <li>
          <g-link to="/blog" active-class="active">
            Blog
          </g-link>
        </li>
        <div class="is_mobile">
          <DarkMode />
        </div>
      </ul>

      <div class="social-icons">
        <a
          v-for="(linkItem, index) in socialLinks"
          v-bind:key="index"
          v-bind:href="linkItem.link"
          target="_blank"
          rel="noopener"
          v-bind:title="linkItem.name"
        >
          <component :is="linkItem.icon" />
        </a>
        <div class="is_desktop">
          <DarkMode />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import TwitterIcon from '../assets/icons/twitter.svg'
import GithubIcon from '../assets/icons/github.svg'
import DribbbleIcon from '../assets/icons/dribbble.svg'
import CodepenIcon from '../assets/icons/codepen.svg'
import DarkMode from "../components/DarkMode"

export default {
  components: {
    DarkMode
  },
  data: () => ({
    navigationLinks: [
      {
        title: 'Home',
        link: '/'
      },
      {
        title: 'About',
        link: '/about'
      },
      {
        title: 'Work',
        link: '/work'
      },
    ],
    socialLinks: [
      {
        name: "Twitter",
        link: 'https://twitter.com/apvarun',
        icon: TwitterIcon
      },
      {
        name: "Github",
        link: 'https://github.com/apvarun',
        icon: GithubIcon
      },
      {
        name: "Dribbble",
        link: 'https://dribbble.com/apvarun',
        icon: DribbbleIcon
      },
      {
        name: "Codepen",
        link: 'https://codepen.io/apvarun/',
        icon: CodepenIcon
      },
    ]
  })
}
</script>

<style scoped>
.nav-container {
  border-bottom: 1px solid var(--lighter);
}
nav {
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
}
.name {
  font-weight: 700;
  font-size: 24px;
}
.name a {
  color: var(--text-color);
  text-decoration: none;
  padding-right:20px;
}
ul {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}
li {
  padding: 0 5px;
}
li a {
  display: inline-block;
  padding: 15px 0;
  font-weight: 100;
  text-decoration: none;
  color: var(--text-color);
  border-bottom: 2px solid transparent;
}
li a.active {
  font-weight: 700;
  border-bottom: 2px solid var(--text-color);
}
.social-icons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.social-icons a {
  padding: 0 5px;
}
.social-icons svg {
  width: 24px;
  padding-top: 6px;
}
.social-icons svg path {
  fill: var(--light);
  transition: 150ms ease-in fill;
}
.social-icons svg:hover path {
  fill: var(--text-color);
}
.is_mobile {
  display: none;
}
@media only screen and (max-width: 480px) {
  .social-icons {
    display: none;
  }
  li a {
    font-size: 14px;
  }
  .is_desktop {
    display: none;
  }
  .is_mobile {
    display: flex;
    align-items: center;
  }
}
</style>

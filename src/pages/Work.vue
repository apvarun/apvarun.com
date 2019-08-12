<template>
  <Layout>
    <h1 class="page-heading">Work <WorkIcon /></h1>
    <div class="projects">
      <fragment v-for="(projectItem, index) in projects" v-bind:key="index">
        <a v-bind:href="projectItem.link" target="_blank" rel="noopener">
          <div class="project-item" v-bind:class="{ inverted: index % 2 }">
            <div>
              <div class="count">{{ index+1 | padleft }}</div>
              <h2 class="title">{{ projectItem.name }}</h2>
              <span class="swiggle">
                <SwiggleShape v-bind:color="projectItem.underline_color" />
              </span>
              <p class="excerpt">{{ projectItem.excerpt }}</p>
              <a
                v-bind:href="projectItem.link"
                rel="noopener"
                target="_blank"
                class="project-link"
              >Visit Project →</a>
            </div>
            <g-image v-bind:src="projectItem.image" v-bind:alt="projectItem.name"/>
          </div>
        </a>
        <div class="join-line" v-bind:class="{ inverted: !(index % 2) }" />
      </fragment>
    </div>
  </Layout>
</template>

<style scoped>
.page-heading {
  text-align: center;
  margin: 5rem;
}
.page-heading svg {
  margin-bottom: -5px;
}
.projects a {
  text-decoration: none;
}
.project-item {
  /* margin: 20px 0; */
  padding: 10px 20px;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  color: initial;
}
.project-item.inverted > img {
  grid-column: 1;
  grid-row: 1;
}
.project-item > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title {
  font-weight: 1.5rem;
  font-weight: 700;
  margin: 0;
}
.count {
  font-weight: 100;
  font-size: 2rem;
}
.excerpt {
  margin-top: 0;
  margin-bottom: 20px;
}
.project-link {
  color: var(--light);
  text-align: right;
}
.project-link:hover {
  color: var(--text-color);
}
.join-line {
  width: 2px;
  height: 40px;
  background-color: var(--lighter);
  margin: 0 auto;
  transform: skewX(45deg);
}
.join-line.inverted {
  transform: skewX(-45deg);
}
.join-line:last-child {
  display: none;
}
.swiggle {
  margin-top: -10px;
}
@media only screen and (max-width: 480px) {
  .project-item {
    grid-template-columns: 1fr;
  }
  .project-item > img {
    grid-column: 1;
    grid-row: 1;
  }
}
</style>

<script>
import SwiggleShape from '../components/SwiggleShape'
import WorkIcon from '../assets/icons/work-icon.svg'

export default {
  components: {
    SwiggleShape,
    WorkIcon,
  },
  metaInfo: {
    title: 'Work - Varun A P',
  },
  filters: {
    padleft: (value) => {
      return ('00'+value).slice(-2);
    }
  },
  data: () => ({
    projects: [
      {
        name: 'Gradients Party',
        excerpt:
          'Collection 🗃️ of gradients for your buttons. It allows to filter based on colors, autoprefix and copy CSS for the gradient, edit the gradient in realtime and more.',
        link: 'https://gradients.party/',
        image: '/static/GradientsParty.jpeg',
        color: 'linear-gradient(135deg,#6253E1,#04BEFE)',
        underline_color: '#6253E1',
        button: '#1f3bed',
      },
      {
        name: 'StarterGrid',
        excerpt:
          'Handpicked Collection of starter boilerplates for your next side-project, be it with React, Vue, Node, Meteor, Backbone etc.',
        link: 'https://startergrid.apvarun.com/',
        image: '/static/StarterGrid.jpeg',
        color: 'linear-gradient(135deg,#F5515F,#A1051D)',
        underline_color: '#F5515F',
        button: '#fc3c3c',
      },
      {
        name: 'Toastify JS',
        excerpt:
          'Pure JavaScript library for highly customizable notification messages, with support for multiple stacked notifications.',
        link: 'https://github.com/apvarun/toastify-js',
        image: '/static/toastify-js.png',
        color: 'linear-gradient(135deg, #00b09b, #96c93d)',
        underline_color: '#00b09b',
        button: '#0f887c',
      },
      {
        name: 'Poppy JS',
        excerpt: 'Simple, Multipurpose Open Source Pop-in Messages for marketers, freelancers and hobbyists.',
        link: 'https://github.com/apvarun/poppyjs',
        image: '/static/poppyjs.png',
        color: 'linear-gradient(135deg, #fdd54f, #f8049c)',
        underline_color: '#fdd54f',
        button: '#0f887c',
      },
      {
        name: 'Confs.space',
        excerpt: 'Confs.Space is a platform to stash all the conference talks and showcase it with ease of access.',
        link: 'https://confs.space/',
        image: '/static/confs-space.png',
        color: 'linear-gradient(135deg, #f74646, #1060ff)',
        underline_color: '#f74646',
        button: '#0f887c',
      },
    ],
  }),
}
</script>

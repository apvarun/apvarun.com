<template>
  <Layout>
    <h1 class="page-heading">About Me <MeIcon /></h1>
    <div class="container">
      <div>
        <h2 class="title-text">→ I'm Varun</h2>
        <p class="description">
          Frontend Engineer at
          <a href="https://www.backbase.com" target="_blank">Backbase</a>, ex.
          <a href="https://www.springboard.com" target="_blank">Springboard</a>.
          I spend my free time learning and building stuff for the web.
        </p>
        <p>
          <em
            >I love minimalistic designs with subtle transitions that deliver
            better user experiences, rather than fancy graphics &
            animations.</em
          >
        </p>
        <ul>
          <fragment
            v-for="(capability, index) of capabilities"
            v-bind:key="index"
          >
            <li>{{ capability.text }}</li>
            <SwiggleShape v-bind:color="capability.color" />
          </fragment>
        </ul>
      </div>
      <div>
        <div class="image-card">
          <img src="https://avatars.io/twitter/apvarun" alt="Varun" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import MeIcon from '../assets/icons/me-icon.svg'
import SwiggleShape from '../components/SwiggleShape'

export default {
  components: {
    MeIcon,
    SwiggleShape,
  },
  data: () => ({
    capabilities: [
      {
        text: 'UI Development',
        color: '#6253E1',
      },
      {
        text: 'Web Performance',
        color: '#F5515F',
      },
      {
        text: 'Web Design',
        color: '#00b09b',
      },
      {
        text: 'Tooling',
        color: '#fdd54f',
      },
    ],
  }),
  metaInfo: {
    title: 'About me - Varun A P',
    meta: [
      {
        key: 'og:title',
        property: 'og:title',
        content: 'About me - Varun A P',
      },
      {
        key: 'twitter:title',
        property: 'twitter:title',
        content: 'About me - Varun A P',
      },
    ],
  },
}
</script>

<style scoped>
.page-heading {
  text-align: center;
  margin: 5rem;
}
.page-heading svg {
  margin-bottom: -5px;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
li {
  font-weight: 700;
  font-size: 2rem;
  padding: 20px 0 0;
  margin-bottom: -15px;
  margin-left: 20px;
}
.container {
  display: grid;
  grid-template-columns: 1fr 350px;
  grid-gap: 20px;
  align-items: center;
}
.title-text {
  font-size: 2.5rem;
  margin-bottom: 10px;
}
.description {
  font-size: 1.25rem;
}
.image-card {
  padding: 20px;
  box-shadow: var(--default-box-shadow);
  transform: rotate(5deg);
}
.image-card img {
  border-radius: 4px;
}
@media only screen and (max-width: 480px) {
  .container {
    grid-template-columns: 1fr;
  }
  .container > div:nth-child(1) {
    grid-row: 2;
  }
  .container > div:nth-child(2) {
    grid-row: 1;
    grid-column: 1;
  }
  .image-card {
    transform: rotate(4deg);
  }
}
</style>

<template>
  <Layout>
    <h1 class="page-heading">About Me <MeIcon /></h1>
    <img src="https://avatars.io/twitter/apvarun" alt="Varun" class="picture" />
    <p>
      I'm frontend developer at <a href="https://www.springboard.com" target="_blank">Springboard</a> based in
      Bangalore. I spend my free time learning and building stuff for the web.
    </p>
    <h3>Capabilities?</h3>
    <ul>
      <li>UI Development</li>
      <li>Web Performance</li>
      <li>Web Design</li>
      <li>Tooling</li>
    </ul>
    <p>
      I love minimalistic designs with subtle transitions that deliver better user experiences, rather than fancy graphics &amp; animations.
    </p>
  </Layout>
</template>

<script>
import MeIcon from '../assets/icons/me-icon.svg'

export default {
  components: {
    MeIcon,
  },
  metaInfo: {
    title: 'About me - Varun A P'
  }
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
.picture {
  border-radius: 5px;
  width: 200px;
  margin: 0 auto;
  display: block;
  margin-top: -4rem;
  filter: hue-rotate(-25deg) brightness(1.2);
}
</style>

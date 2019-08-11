<template>
  <Layout>
    <h1 class="page-heading">Work</h1>
    <div class="projects">
      <fragment v-for="(projectItem, index) in projects" v-bind:key="index">
        <a v-bind:href="projectItem.link"
          target="_blank"
          rel="noopener"
        >
          <div class="project-item" v-bind:class="{ inverted: index % 2 }">
            <div>
              <h2 class="title">{{ projectItem.name }}</h2>
              <p>{{ projectItem.excerpt }}</p>
              <a v-bind:href="projectItem.link" rel="noopener" target="_blank" class="project-link">Visit Project →</a>
            </div>
            <g-image v-bind:src="projectItem.image" />
          </div>
        </a>
        <div class="join-line"  v-bind:class="{ inverted: !(index % 2) }"/>
      </fragment>
    </div>
  </Layout>
</template>

<style scoped>
.page-heading {
  text-align: center;
  margin: 5rem;
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
  grid-row: 1
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
.project-link {
  color: #757575;
}
.project-link:hover {
  color: black;
}
.join-line {
  width: 2px;
  height: 25px;
  background-color: #F0F0F0;
  margin: 0 auto;
  transform: skewX(45deg);
}
.join-line.inverted {
  transform: skewX(-45deg);
}
.join-line:last-child {
  display: none;
}
@media only screen and (max-width: 480px) {
  .project-item {
    grid-template-columns: 1fr;
  }
  .project-item > img {
    grid-column: 1;
    grid-row: 1
  }
}
</style>

<script>
export default {
  metaInfo: {
    title: "Work - Varun A P"
  },
  data: () => ({
    projects: [
      {
        name: "Gradients Party",
        excerpt:
          "Collection 🗃️ of gradients for your buttons. It allows to filter based on colors, autoprefix and copy CSS for the gradient, edit the gradient in realtime and more.",
        link: "https://gradients.party/",
        image: "/static/GradientsParty.jpeg",
        color: "linear-gradient(135deg,#6253E1,#04BEFE)",
        button: "#1f3bed"
      },
      {
        name: "StarterGrid",
        excerpt:
          "Handpicked Collection of starter boilerplates for your next side-project, be it with React, Vue, Node, Meteor, Backbone etc.",
        link: "https://startergrid.co/",
        image: "/static/StarterGrid.jpeg",
        color: "linear-gradient(135deg,#F5515F,#A1051D)",
        button: "#fc3c3c"
      },
      {
        name: "Toastify JS",
        excerpt:
          "Pure JavaScript library for highly customizable notification messages, with support for multiple stacked notifications.",
        link: "https://github.com/apvarun/toastify-js",
        image: "/static/toastify-js.png",
        color: "linear-gradient(135deg, #00b09b, #96c93d)",
        button: "#0f887c"
      }
    ]
  })
};
</script>

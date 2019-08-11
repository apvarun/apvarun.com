<template>
  <Layout>
    
    <div class="content">

      <div>
        <h1>
          <strong>Developing</strong> performant web applications
        </h1>
        <p>Frontend Engineer - UX enthusiast</p>
        <g-link class="link" to="/about">whoami <span>→</span></g-link>
      </div>

      <!-- <div class="cards">
        <div class="card">
          <g-image src="~/assets/logos/react.png" width="500" title="React JS" />
        </div>
        <div class="card">
          <g-image src="~/assets/logos/angular.png" width="500" title="Angular JS" />
        </div>
        <div class="card">
          <g-image src="~/assets/logos/vue.png" width="500" title="Vue JS" />
        </div>
      </div> -->

    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Varun A P'
  }
}
</script>

<style>
.content {
  padding: 2rem 0 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.content h1 {
  font-weight: 400;
  font-size: 2.5rem;
}
.link {
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  color: black;
}
.link:hover {
  border-bottom: 2px solid black;
}
.link:hover span {
  animation: 400ms move infinite ease-in-out alternate;
}
@keyframes move {
  from {margin-left: 0;}
  to {margin-left: 2px;}
}

/* .cards {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card {
  max-width: 120px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(200, 200, 200, 0.25);
  background-color: white;
  margin-top: -50px;
}
.card img {
  width: 100%;
}

.card:nth-child(even) {
  transform: translateX(50%);
} */

@media only screen and (max-width: 480px) {
  .content {
    grid-template-columns: 1fr;
  }
}
</style>

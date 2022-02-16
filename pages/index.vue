<template>
  <div id="app">
    <Html>
      <Head>
        <Title>Nuxt3 on Layer0</Title>
        <Meta name="description" :content="description" />
      </Head>
    </Html>
    <div>
     <h1 class="title">
       This is the example app of
       <a target="_blank" href="https://v3.nuxtjs.org">Nuxt3</a> on
       <a target="_blank" href="">Layer0</a>.
       </h1>
     <span>
       See the
       <a target="_blank" href="https://github.com/layer0-docs/layer0-nuxt3-example">GitHub repo</a>
       for more information.</span>
    </div>
  </div>
</template>


<script setup>
const description = "Nuxt3 on Layer0";
</script>

<style scoped>
#app {
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
  font-family: 'Lato', sans-serif;
  padding: 20px;
  line-height: 1.5;
}

.title {
  margin: 0;
  margin-bottom: 10px;
  line-height: initial;
}

a {
  text-decoration: none;
}
</style>
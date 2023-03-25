<template>
  <div>
    <the-header title="I Love vue"></the-header>
    <the-resources></the-resources>
  </div>
</template>

<script>
import TheHeader from './components/Layouts/theHeader.vue';
import TheResources from './components/Learning-Resources/TheResources.vue';

// import StoredResources from './components/Learning-Resources/StoredResources.vue';

export default {
  components: {
    // 'stored-resources': StoredResources,
    TheHeader,
    TheResources,
  },
  data() {
    return {
      
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>

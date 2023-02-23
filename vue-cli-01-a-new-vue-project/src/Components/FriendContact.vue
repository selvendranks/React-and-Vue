<template>
  <div>
    <h2>{{ name }}</h2>
    <button @click="showDetails">Show Details</button>
    <ul v-if="displayDetils">
      <li><strong>Phone:</strong> {{ phone }}</li>
      <li><strong>Email:</strong>{{ email }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    props:['name','email','phone']
    ,

  data() {
    return {
      displayDetils: false
    };
  },
  methods: {
    showDetails() {
      this.displayDetils = !this.displayDetils;
    },
  },
};
</script>



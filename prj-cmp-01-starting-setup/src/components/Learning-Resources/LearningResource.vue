<template>
  <base-card>
    <li>
      <div>
        <header>
          <h3>{{ resources.title }}</h3>
          <base-button mode="flat" @click="deleteItem(resources.title)">Delete</base-button>
        </header>
      </div>
      <p>{{ resources.description }}</p>
      <nav>
        <a :href="resources.link">View Resources</a>
      </nav>
    </li>
  </base-card>
</template>

<script>

export default {
  props: ['resources'],
  inject:['deleteItem']
};

</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>

<template>
  <section>
    <div v-if="$slots.header">
      <slot name="header">
      </slot>
    </div>
    <slot>
      <h2>The default</h2>
    </slot>
  </section>
</template>

<script>
export default {

};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>

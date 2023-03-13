<template>
  <dialog open>
    <slot></slot>
    
  </dialog>
</template>

<script>
export default {
 
}
</script>

<style scoped>
 dialog{
    background: white;
    position: fixed;
    top: 20vh;
    left: 30%;
    width: 40%;
    box-shadow: 0 2px 8px gray;
    padding: 1rem;
    margin:0;
 }
</style>
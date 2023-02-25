<template>
  <div>
    <h2>{{ name }}{{ isFavourite ? "(Favourite)" : "" }}</h2>
    <button @click="toggleFavourite">Toggle Favourite</button>
    <button @click="showDetails">Show Details</button>
    <button @click="deleteContact">Delete</button>
    <ul v-if="displayDetils">
      <li><strong>Phone:</strong> {{ phone }}</li>
      <li><strong>Email:</strong>{{ email }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: false, default: "example@mail.com" },
    isFavourite: {
      type: Boolean,
      required: false,
      // validator(value){
      //      return value === 1 || value ===0;
      // }
    },
  },

  emits: {
    "toggle-favourite": function (id) { 
      if(id){
        return true
      }
      else{
         console.warn('need to pass an id')
         return false
      }
    },
  },
  data() {
    return {
      displayDetils: false,
    };
  },
  methods: {
    showDetails() {
      this.displayDetils = !this.displayDetils;
    },
    toggleFavourite() {
      this.$emit("toggle-favourite", this.id);
    },
    deleteContact(){
      this.$emit("delete-contact",this.id)
    }
  },
};
</script>

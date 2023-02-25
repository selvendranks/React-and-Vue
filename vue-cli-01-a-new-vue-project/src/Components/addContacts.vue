<template>
  
    <form @submit.prevent="submitForm">
      
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" />
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input type="text" id="phone" v-model="formData.phone" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" />
      </div>
      <div>
        <label for="isfriend">Is Friend:</label>
        <input type="checkbox" id="isfriend" v-model="formData.isFriend" />
      </div>
      <button type="submit">Submit</button>
    </form>
    
</template>

<script>
export default {
  data() {
    return {
       formData:{ 
        id:null,
        name:null,
        phone:null,
        email:null,
        isFriend:null
       }
    };
  },
  methods:{
    submitForm(){
        
        this.formData.id = new Date().toISOString()
        this.$emit('friend-data',this.formData);
        
        
        }

    
  }
};
</script>

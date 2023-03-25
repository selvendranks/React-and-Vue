<template>
  <div>
    <base-card>
      <base-button
        @click="select('stored-resources')"
        :mode="selectedcmp === 'stored-resources' ? '' : 'flat'"
      >
        storedResources
      </base-button>
      <base-button
        @click="select('add-resources')"
        :mode="selectedcmp === 'add-resources' ? '' : 'flat'"
      >
        Add Resources
      </base-button>
    </base-card>
    <keep-alive>
      <component :is="selectedcmp"></component>
    </keep-alive>
  </div>
</template>

<script>
import addResources from './AddResources.vue';
import StoredResourcesVue from './StoredResources.vue';

export default {
  components: {
    'add-resources': addResources,
    'stored-resources': StoredResourcesVue,
  },
  provide() {
    return {
      storedResources: this.storedResources,
      pushResources: this.pushResources,
      switchSubmit : this.switchSubmit,
      deleteItem : this.deleteItem

    };
  },
  data() {
    return {
      selectedcmp: 'stored-resources',
      storedResources: [
        {
          title: 'Official Guide',
          description: 'The official Vue.js guide',
          link: 'https://www.vuejs.org',
        },
        {
          title: 'Google',
          description: 'Learn anything you want',
          link: 'https://www.google.com',
        },
      ],
    };
  },
  methods: {
    select(cmp) {
      this.selectedcmp = cmp;
      console.log(this.selectedcmp);
    },
    pushResources(resource) {
      this.storedResources.unshift(resource);
    },
    switchSubmit(){
        this.selectedcmp = 'stored-resources'
    },
    deleteItem(deleteItem){
      const resIndex = this.storedResources.findIndex((item)=>(item.title == deleteItem))  
      this.storedResources.splice(resIndex,1)
    }
  },
};
</script>

BaseButton

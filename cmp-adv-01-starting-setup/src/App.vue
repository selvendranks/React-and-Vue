<template>
  <div>

    <button @click="setcomponent('dynamiccmp-1')">Load component 1</button>
    <button @click="setcomponent('dynamiccmp-2')">Load component 2</button>
    <component :is="activeDynamicCmp"></component>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>

    <scoped-slot>
      <template #default="slotProps">
         <h2>{{slotProps['item']}}</h2>
         <p>{{slotProps['otherItem']}}</p>
      </template>
    </scoped-slot>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import scopedSlot from "./components/scopedSlot.vue";
import DynamicCmp1 from "./components/DynamicCmp1.vue"
import DynamicCmp2 from "./components/DynamicCmp2.vue"

export default {
  components: {
    
    "the-header": TheHeader,
    "badge-list": BadgeList,
    "user-info": UserInfo,
    "scoped-slot": scopedSlot,
    "dynamiccmp-1":DynamicCmp1,
    "dynamiccmp-2":DynamicCmp2
  },
  data() {
    return {
      activeDynamicCmp : 'Default',
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods:{
    setcomponent(cmp){
        this.activeDynamicCmp = cmp
    }
  }
};
</script>

<style scoped>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>

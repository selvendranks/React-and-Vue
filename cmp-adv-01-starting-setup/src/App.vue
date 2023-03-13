<template>
  <div>
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

export default {
  components: {
    "the-header": TheHeader,
    "badge-list": BadgeList,
    "user-info": UserInfo,
    "scoped-slot": scopedSlot,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
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

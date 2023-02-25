import { createApp } from 'vue';
import App  from './App.vue';
import FriendContact from './Components/FriendContact.vue'
import addContact from './Components/addContacts.vue'

const app = createApp(App);
app.component('friend-contact',FriendContact)
app.component('add-contact',addContact)

app.mount('#app');

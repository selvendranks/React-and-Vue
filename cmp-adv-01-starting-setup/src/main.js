import { createApp } from 'vue';

import App from './App.vue';

import BaseBadge from './components/BaseBadge.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';

const app = createApp(App);


app.component('base-badge', BaseBadge);
app.component('badge-list', BadgeList);
app.component('user-info', UserInfo);

app.mount('#app');

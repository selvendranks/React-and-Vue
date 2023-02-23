const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenx",
          phone: "0907987676",
          email: "manu@gmail.com",
        },
        {
          id: "julie",
          name: "julie naki",
          phone: "12433545",
          email: "manuel@gmail.com",
        },
      ],
    };
  },
});


app.component("friend-contact", {
  template: ` <li >
    <h2>{{friend.name}}</h2>
    <button @click='toggleDetails'>Show Details</button>
    <ul v-if='detailsAreVisible'>
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong>{{friend.email}}</li>
    </ul>
  </li>`,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenx",
        phone: "0907987676",
        email: "manu@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");

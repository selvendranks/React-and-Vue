const app = Vue.createApp({
  data() {
    return {
      courseGoal: [
        { text: "Wikipedia", link: "www.wikipedia.com" },
        { text: "Google", link: "www.google.com" },
      ],
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        return "can do";
      } else return "can't do";
    },
  },
});

app.mount("#user-goal");

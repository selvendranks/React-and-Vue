const app = Vue.createApp({
  data() {
    return {
      courseGoal: [
        { text: "<h5>Wikipedia</h5>", link: "www.wikipedia.com" },
        { text: "<h5>Google</h5>", link: "www.google.com" },
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

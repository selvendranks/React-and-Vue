const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      // console.dir(this.$refs.userText);
      console.log(this.$refs.button)
    },
  },
  beforeCreate(){
    console.log('beforeCreate()') //before app create
  },
  created(){
    console.log('created()')//after the app initialize
  },
  beforeMount(){
    console.log('beforeMount()')//before dom render
  },
  mounted(){
    console.log('mounted()') //after dom render
  },
  beforeUpdate(){
    console.log('beforeUpdate()') //before dom update
  },
  updated(){
    console.log('updated()') //after dom update
  },
  beforeUnmount(){
    console.log('beforeUnmount()') //before unmount app

  },
  afterUnmount(){
    console.log('afterUnmount()') //after unmount
  }

});

app.mount('#app');

const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: 'Pizza'
    };
  }
});

app2.mount('#app2');

// ....

const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!'
};

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + ' World!';
    }
    target.message = value;
  }
};

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!!';

console.log(proxy.longMessage);
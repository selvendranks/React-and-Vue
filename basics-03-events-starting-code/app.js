const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : ''
    };
  },
  methods:{
     
      setName(event,name){
          this.name = event.target.value + name ;
      },
     addCovvunter(num){
       this.counter+=num;
     }, 
     removeCounter(num){
      this.counter-=num;
     }
  }
});

app.mount('#events');

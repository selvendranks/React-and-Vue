const app = Vue.createApp({
    data(){
      return{
        courseGoal:[
            {text: 'Wikipedia', link:'www.wikipedia.com'},
            {text:'Google', link: 'www.google.com'}
        ]
      }
    },
    methods:{
         
    }
  });

app.mount('#user-goal');
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : '',
      confirmedName:''
    };
  },
  methods:{
     submitForm(event){ 
             console.log('life is sad')
     },
      setName(event,name){
          this.name = event.target.value ;
      },
     addCounter(num){
       this.counter+=num;
     }, 
     removeCounter(num){
      this.counter-=num;
     },
     Confirm(event){
       
          this.confirmedName = this.name;
       
     },
     reset(){
       this.name = '';
       this.confirmedName = '';
     }
  }
});

app.mount('#events');

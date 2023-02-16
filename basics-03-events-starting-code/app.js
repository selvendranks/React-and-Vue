const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : '',
      confirmedName:'',
      fullname:''
    };
  },
  watch:{
    counter(latestCount,oldname){ //triggered when name changes
      
          if (latestCount>50 || latestCount<0){
              this.counter = 0;
          }
          
           
        }
       
    },
  computed:{
      fullname(){
        if (this.confirmedName === ''){
          return '';
        }
        else return this.confirmedName+ ' ' +'don';
      }
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

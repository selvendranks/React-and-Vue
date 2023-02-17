app = Vue.createApp({
    data(){
        return {
                box1Selected: false,
                box2Selected: false,
                box3Selected: false,
                
        }
    },
    computed:{
         box1select(){
            return {back:this.box1Selected , active: this.box1Selected};
         }
    },
    methods:{
        boxSelect(box){
            if(box == 'A'){
                this.box1Selected = !this.box1Selected;
            }
            else if(box == 'B'){
                this.box2Selected = !this.box2Selected;
            }
           else if(box == 'C'){
                this.box3Selected = !this.box3Selected;
            }
        }
    }
})

app.mount('#styling')
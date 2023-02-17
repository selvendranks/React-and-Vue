app = Vue.createApp({
    data(){
        return {
                box1Selected: false,
                box2Selected: false,
                box3Selected: false,
                
        }
    },
    methods:{
        boxSelect(box){
            if(box = 'A'){
                this.box1Selected = true;
            }
            if(box = 'B'){
                this.box2Selected = true;
            }
            if(box = 'C'){
                this.box3Selected = true;
            }
        }
    }
})

app.mount('#styling')
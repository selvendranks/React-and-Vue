function getRandomValue(max,min){
    return Math.floor(Math.random()*(max-min)) + min
}

const app = Vue.createApp({
    data(){
        return{
            monsterHealth: 100,
            playerHealth:100
        }
    },
    methods:{
        attackMonster(){
          this.monsterHealth-= getRandomValue(12,5);
          this.attackMonster();
        },
        attackPlayer(){
            this.playerHealth-= getRandomValue(18,8);
        }
    }
})

app.mount('#game')
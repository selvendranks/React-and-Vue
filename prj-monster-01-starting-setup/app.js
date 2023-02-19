function getRandomValue(max,min){
    return Math.floor(Math.random()*(max-min)) + min
}

const app = Vue.createApp({
    data(){
        return{
            monsterHealth: 100,
            playerHealth:100,
            specialAttackReady:0
        }
    },
    watcher:{
       specialAttackReady(){
            if(this.specialAttackReady>3){
                this.specialAtttackReady = 3;
            }
       }
    },
    computed:{
        monsterHealthBar(){
            return{
                width: this.monsterHealth + '%'
            }
        },
        playerHealthBar(){
            return {
                width: this.playerHealth + '%'
            }
        },
        mayUseSpecialAttack(){
            return this.specialAttackReady < 3 ? true : false
        }
        
    },
    methods:{
        attackMonster(){
          this.monsterHealth-= getRandomValue(12,5);
          this.specialAttackReady+=1;
          this.attackPlayer();
        },
        attackPlayer(){
            this.playerHealth-= getRandomValue(18,8);
        },
        specialAttack(){
            this.monsterHealth-= getRandomValue(25,10);
            this.specialAttackReady = 0;
        }
    }
})

app.mount('#game')
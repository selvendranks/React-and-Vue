function getRandomValue(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      specialAttackReady: 0,
      winner: null,
      gameOver: false,
      surrendered: false,
      battleLog: [],
    };
  },
  watch: {
    specialAttackReady() {
      if (this.specialAttackReady > 3) {
        this.specialAtttackReady = 3;
      }
    },
    playerHealth() {
      if (this.playerHealth > 100) {
        this.playerHealth = 100;
      } else if (this.playerHealth < 0) {
        this.gameOver = true;
        this.playerHealth = 0;
      }
    },
    monsterHealth() {
      if (this.monsterHealth < 0) {
        this.monsterHealth = 0;
        this.gameOver = true;
      }
    },
    gameOver() {
      if (this.playerHealth <= 0 && this.monsterHealth <= 0) {
        this.winner = "Draw";
      } else if (this.playerHealth <= 0 || this.surrendered) {
        this.winner = "Monster";
      } else if (this.monsterHealth <= 0) {
        this.winner = "Player";
      } else return "";
    },
  },
  computed: {
    isGameOver() {
      return this.gameOver;
    },

    monsterHealthBar() {
      return {
        width: this.monsterHealth + "%",
      };
    },
    playerHealthBar() {
      return {
        width: this.playerHealth + "%",
      };
    },
    mayUseSpecialAttack() {
      return this.specialAttackReady < 3 ? true : false;
    },
  },
  methods: {
    attackMonster() {
      let val = getRandomValue(12, 5);
      this.monsterHealth -= val;
      this.createBattleLog("player", "attack", val);
      this.specialAttackReady += 1;
      this.attackPlayer();
    },
    attackPlayer() {
      let val = getRandomValue(18, 8);
      this.playerHealth -=val;
      this.createBattleLog('monster','attack',val);
      this.playerHealth;
    },
    specialAttack() {
      let val = getRandomValue(30, 10);
      this.monsterHealth -=val;
      this.createBattleLog('player','special',val);
      this.specialAttackReady = 0;
      this.attackPlayer();
    },
    healPlayer() {
      let val = getRandomValue(8, 20);
      this.playerHealth +=val;
      this.createBattleLog('player','health',val);
      this.attackPlayer();
    },
    surrender() {
      this.gameOver = true;
      this.surrendered = true;
      this.createBattleLog('player','Surrender',val)
    },
    createBattleLog(who, what, value) {
      this.battleLog.unshift({
        who,
        what,
        value,
      });
    },
  },
});

app.mount("#game");

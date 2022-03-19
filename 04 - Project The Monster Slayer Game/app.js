function getRandomValue(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
	data(){
		return {
			playerHealth: 100,
			monsterHealth: 100,
			currentRound: 0,
			winner: null,
			logMessages: [],
		}
	},
	computed: {
		monsterBarStyles(){
			return {width:this.monsterHealth + '%'};
		},
		playerBarStyles(){
			return {width:this.playerHealth + '%'};
		},
		mayUseSpecialAttack(){
			return (this.currentRound % 3 !== 0);
		}
	},
	watch: {
		playerHealth(value){
			if(value <= 0 && this.monsterHealth <= 0){
				// a draw
				this.winner = 'draw';
				// to change the style bar width = 0
				this.playerHealth = 0;
				this.monsterHealth = 0;
			}else if(value <= 0){
				// player lost
				this.winner = 'monster';
				// to change the style bar width = 0
				this.playerHealth = 0;
			}
		}, 
		monsterHealth(value){
			if(value <= 0 && this.playerHealth <= 0){
				// a draw
				this.winner = 'draw';
				// to change the style bar width = 0
				this.playerHealth = 0;
				this.monsterHealth = 0;
			}else if(value <= 0){
				//monster lost
				this.winner = 'player';
				// to change the style bar width = 0
				this.monsterHealth = 0;
			}

		}
	},
	methods: {
		attackMonster(){
			this.currentRound++;
			const attackValue = getRandomValue(5, 12);
			this.monsterHealth -= attackValue; 
			this.addLogMessage('player', 'attack', attackValue);
			this.attackPlayer();
		},
		attackPlayer(){
			const attackValue = getRandomValue(8, 15);
			this.playerHealth -= attackValue;
			this.addLogMessage('monster', 'attack', attackValue);

		},
		specialAttackMonster(){
			this.currentRound++;
			const attackValue = getRandomValue(10, 25);
			this.monsterHealth -= attackValue;
			this.addLogMessage('player', 'attack', attackValue);
			this.attackPlayer();
		},
		healPlayer(){
			this.currentRound++;
			const healValue = getRandomValue(8, 20);
			if(this.playerHealth + healValue > 100){
				this.playerHealth = 100;
			}else{
				this.playerHealth += healValue;
			}
			this.addLogMessage('player', 'heal', healValue);
			this.attackPlayer();
		},
		surrender(){
			this.winner = 'monster';
		},
		newGame(){
			this.playerHealth  = 100;
			this.monsterHealth = 100;
			this.winner 	   = null;
			this.currentRound  = 0;
			this.logMessages   = [];
		},
		addLogMessage(who, what, value){
			this.logMessages.unshift({
				actionBy: who,
				actionType: what,
				actionValue: value
			});
		}
	}
});

app.mount('#game')
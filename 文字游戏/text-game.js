var vm = new Vue({
	el:"#frame",
	data(){
		return{
			start:true,
			one:false,
			name:"",
			sex:"",
			job:"",
			user:{},
			two:false,
			btnLeft: "往森林方向",
			btnRight: "往湖泊方向",
			statement: " ",
			textC:0,
		}
	},
	methods:{
		onStart(){
			this.start = false;
			this.one = true;
			this.statement = "欢迎来到魔法世界！请创建你的角色。"
		},
		okUser(){
			this.user = {name:this.name,sex:this.sex,job:this.job}
			this.statement="角色创建成功，点击开始游戏";
			this.one = false;
			switch(this.job){
				case "战士":{this.user.防御 = 30; this.user.敏捷 = 10; this.user.力量 = 30;HP:10;break}
				case "射手":{this.user.防御 = 10; this.user.敏捷 = 50; this.user.力量 = 10;HP:10;break}
				case "猎人":{this.user.防御 = 20; this.user.敏捷 = 20; this.user.力量 = 20;HP:10;break}
			}
			var tt = document.getElementById("text");
			tt.onclick = this.textClick;
		},
		textClick(){
			let tts = ["这是一片神奇的土地，你将作为流浪的旅人，将领略这里的神奇与秘密。-------点击继续","日升月落，掩盖好已经熄灭的篝火，选择你前进的方向。"]
			this.statement = tts[this.textC]
			if(this.textC == 1){
				this.two = true;
			}
			this.textC++
		},
		shayezhu(){
			switch(this.job){
				case "战士":{this.statement = "一番苦斗后杀死了野猪。获得野猪的皮（防御值+5）";break}
				case "射手":{this.statement = "未能一击毙命，凶猛的野猪冲了上来，拼着受伤杀死了野猪。获得野猪的皮（防御值+5）";break}
				case "猎人":{this.statement = "凭借经验轻松杀死了野猪。获得野猪的皮（防御值+5）";break}
			}
		}
	}
})
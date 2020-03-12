var vm = new Vue({
	el:"#frame",
	data(){
		return{
			start:true,
			one:false,
			center:"开始游戏",
			name:"",
			sex:"",
			job:"",
			user:{},
			two:false,
			btnLeft: "往森林方向",
			btnRight: "往湖边方向",
			statement: " ",
			textC:0,
			userAttr:false,
			userAttrList:false,
			showText:true,
		}
	},
	methods:{
		onStart(){
			this.start = false;
			this.one = true;
			this.statement = "欢迎来到魔法世界！请创建你的角色。";
			this.textC=0;
			if(this.center == "重新开始"){
				location.reload();
			}
		},
		okUser(){
			this.user = {name:this.name,sex:this.sex,job:this.job}
			this.statement="角色创建成功，点击开始游戏";
			this.one = false;
			switch(this.job){
				case "战士":{this.user.防御 = 30; this.user.敏捷 = 10; this.user.力量 = 30;this.user.HP=10;break}
				case "射手":{this.user.防御 = 10; this.user.敏捷 = 50; this.user.力量 = 10;this.user.HP=10;break}
				case "猎人":{this.user.防御 = 20; this.user.敏捷 = 20; this.user.力量 = 20;this.user.HP=10;break}
			}
			document.getElementById("text").onclick = this.textClick;
			this.userAttr = true;
		},
		textClick(){
			let tts = ["这是一片神奇的土地，你将作为流浪的旅人，将领略这里的神奇与秘密。-------点击继续","日升月落，掩盖好已经熄灭的篝火，选择你前进的方向。","略作休整后，你爬上高处寻找前进的方向，发现东西边都有炊烟，你决定往哪走？"]
			this.statement = tts[this.textC]
			let tt = document.getElementById("text");
			switch(this.textC){
				case 1:{this.two=true;tt.onclick=null;break};
				case 2:{this.two=true;tt.onclick=null;this.btnLeft="往东走";this.btnRight="往西走";break};
			}
			this.textC++
		},
		btnL(){
			switch(this.btnLeft){
				case "往森林方向":{this.btnLeft = "杀死野猪";this.btnRight = "逃跑";this.statement ="你遭遇了一头愤怒的野猪，你该如何选择？";break};
				case "杀死野猪":{this.shayezhu();break};
				case "杀死水蟒":{this.shashuimang();break};
				case "往东走":{this.statement="一番长途跋涉后，你眼前出现了一个村庄，不过你却感觉这个村子透露着一点奇怪。是否选择进入？";this.btnLeft = "进入村子";this.btnRight = "暗中观察";break};
				case "进入村子":{this.statement="刚进入村子，你就看见一个笑眯眯的老者迎面而来。他向你询问你的来历，经过一番交谈，老者热情得邀请你共享晚餐，是否同意？";this.btnLeft = "共享晚餐";this.btnRight = "婉言谢绝";break};
				case "共享晚餐":{this.statement="你同意了老者的邀请，老者将你带到他的家中，让你等待片刻";this.btnLeft = "原地等待";this.btnRight = "四处逛逛";break};
				case "原地等待":{this.statement="屋外突然传来了密集的脚步声，你察觉不对，夺门而出，但是还是晚了，你已经被一群山贼包围了，明晃晃的斧头直奔你的头颅而来...你死了，死于山贼围攻";this.start = true;this.two=false;this.center ="重新开始";break};
				case "留在此处":{this.statement="想了想还是留在这里吧。外面传来呼喊声，你被包围了。双拳难敌四手，你倒在血泊中...你死了！";this.start = true;this.two=false;this.center ="重新开始";break};
				case "参观村子":{this.statement="你犹豫了下，点了点头，不知不觉在老者的带领下进去了一片阴影处，远处传来呼啸声，你被乱箭射死了！。";this.start = true;this.two=false;this.center ="重新开始";break};
				case "进入村庄":{this.statement="这就是个正常的村庄，你在村庄里休息片刻，补给了物资，打听到山头有恐怖的老虎，继续往西走就能见到城镇。";this.btnLeft = "前往山头";this.btnRight = "继续往西";break};
			}
		},
		btnR(){
			switch(this.btnRight){
				case "往湖边方向":{this.btnLeft = "杀死水蟒";this.btnRight = "逃跑";this.statement = "你正观察着湖面，突然有条水蟒冲了出来，你要怎么办？";break}
				case "逃跑":{this.run();break}
				case "往西走":{this.statement="一番长途跋涉后，你眼前出现了一个村庄，勤劳的农民已经结束了一天的工作，村子里飘出着米饭的香甜。要进去吗？";this.btnLeft = "进入村庄";this.btnRight = "忍受饥饿";break};
				case "暗中观察":{this.statement="谨慎的你决定在观察村庄，毕竟防范之心不可无。一天过去了，一切正常。";this.btnLeft = "进入村庄";this.btnRight = "转身离开";break};
				case "四处逛逛":{this.statement="四周环境十分简洁，你走进了厨房，鼻尖传来一丝血腥的气味，一番搜索，发现了一罐装满血液的陶罐。";this.btnLeft = "留在此处";this.btnRight = "趁机离开";break};
				case "婉言谢绝":{this.statement="老者眼中闪过一丝失望，老者：那请先生你来参观一下我们的村子吧？";this.btnLeft = "参观村子";this.btnRight = "坚决离开";this.user.HP = this.user.HP-2;break};
				case "坚决离开":{this.statement="你离开了这个村子，打算自己寻找个简单的过夜之处。-----天色已晚，今天请做出你的选择";this.btnLeft = "往山顶走";this.btnRight = "往山下走";break};
				case "趁机离开":{this.statement="事出蹊跷，你翻身从后门溜走，跑路不出片刻，回头发现背后一群举着火把的山贼包围了之前那个屋子，擦了擦额头的虚汗，生死一念间。";this.btnLeft = "";this.btnRight = "忍受饥饿";break};
			}
		},
		shayezhu(){
			let tt = document.getElementById("text");
			switch(this.job){
				case "战士":{this.statement = "一番苦斗后杀死了野猪（HP-1）。获得野猪的皮（防御值+5）-----点击继续";this.two=false;this.user.防御 = this.user.防御+5;this.user.HP=this.user.HP-1;tt.onclick=this.textClick;break}
				case "射手":{this.statement = "未能一击毙命，凶猛的野猪冲了上来，拼着受伤杀死了野猪（HP-2）。获得野猪的皮（防御值+5）-----点击继续";this.two=false;this.two=false;this.user.防御 = this.user.防御+5;this.user.HP=this.user.HP-2;tt.onclick=this.textClick;break}
				case "猎人":{this.statement = "凭借经验轻松杀死了野猪。获得野猪的皮（防御值+5）-----点击继续";this.two=false;this.two=false;this.user.防御 = this.user.防御+5;tt.onclick=this.textClick;break}
			}
		},
		shashuimang(){
			let tt = document.getElementById("text");
			switch(this.job){
				case "战士":{this.statement = "强壮的身体此时成了你的累赘，被水蟒咬了一口（HP-2），杀死了水蟒。获得蛇胆（力量+5）";this.two=false;this.user.力量 = this.user.力量+5;this.user.HP = this.user.HP -2 ;tt.onclick=this.textClick;break}
				case "射手":{this.statement = "灵巧闪避，凭借着远程风筝，轻松杀死了水蟒。获得蛇胆（力量+5）";this.two=false;this.user.力量 = this.user.力量+5;tt.onclick=this.textClick;break}
				case "猎人":{this.statement = "长期的狩猎让你反应迅速。高效杀死了水蟒，获得蛇胆（力量+5）";this.two=false;this.user.力量 = this.user.力量+5;tt.onclick=this.textClick;break}
			}
		},
		run(){
			let tt = document.getElementById("text");
			switch(this.job){
				case "战士":{this.statement = "你逃跑了，但是在路上受了点伤（HP-1）";this.two=false;this.user.HP = this.user.HP -1 ;tt.onclick=this.textClick;break}
				case "射手":{this.statement = "你逃跑了";this.two=false;this.two=false;tt.onclick=this.textClick;break}
				case "猎人":{this.statement = "你逃跑了";this.two=false;this.two=false;tt.onclick=this.textClick;break}
			}
		},
		attr(){
			if(!this.userAttrList){
				this.userAttrList = true;
			}else{
				this.userAttrList = false;
			}
		}
	}
})



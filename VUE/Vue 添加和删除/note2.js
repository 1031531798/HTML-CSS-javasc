
var vm = new Vue({
	el:"#note",
	data(){
		return{
			id:0,
			date:new Date,
			noteContent:"",
			noteContentArr:[],
			okArr:[],

		}
	},
	methods: {
		save(){
			var day= this.date.toLocaleString();
			this.noteContentArr.push({id:this.id+1,time:day,content:this.noteContent});
			this.id++;
		},
		del(){
			let e = event||window.event;
			let tbody = e.target.parentNode.parentNode.parentNode;
			tbody.parentNode.removeChild(tbody);
		},
		ok(){
			let e = event||window.event;
			let state = e.target.parentNode.previousElementSibling;
			state.style.color = "green";
			state.firstChild.data = "已完成";
			this.okArr.push(e.target.parentNode.parentNode.firstChild.firstChild.data);
		}
	},
	
});

class prost {
	constructor(uname,age,sex){
		this.name = uname;
		this.age = age;
		this.sex = sex;
		console.log(this)
	}
	tong(){
		console.log(this.name + "感受到了不一样的痛苦，极端的痛苦中带着少许麻木")
	}
}
var xx = new prost("sjq","16","男");
xx.tong()

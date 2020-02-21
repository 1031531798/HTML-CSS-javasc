var postFile={
	init:function (){
		var t=this
		t.regional = document.getElementById('image');
		t.cover = document.getElementById('label');
		t.getImage = document.getElementById('get_image');
		t.editPic = document.getElementById('edit_pic');
		t.editBox = document.getElementById('cover_box');
		t.px = 0;    //background image x
		t.py = 0;    //background image y
		t.sx = 15;    //crop area x
		t.sy = 15;    //crop area y
		t.sHeight = 100;    //crop area height
		t.sWidth = 100    //crop area width
		document.getElementById('post_file').addEventListener("change", t.handleFiles, false);
		
	},
	handleFiles:function() {
			//取得file图片对象
			var fileList = this.files[0];
			//创建FileReader函数对象
			var reader = new FileReader();
			//获取图片对象的URL
			reader.readAsDataURL(fileList);
			//为函数设置加载事件
			reader.onload=function (oFREvent){
				postFile.paintImage(oFREvent.target.result);
				
			}
		},
	paintImage:function (url){
		var t = this
		var createCanvans = t.getImage.getContext("2d")
		var img =new Image();
		img.src=url;
		img.onload = function(){
			if(img.width > t.regional.offsetWidth && img.height < t.regional.offsetHeight){
				var imgWidth = img.width;
				var imgHeight = img.height;
			}else{
				var pWidth= img.width / (img.height / t.regional.offsetHeight)
				var pHeight= img.height / (img.width / t.regional.offsetWidth)
				t.imgWidth = img.width > img.height? t.regional.offsetWidth:pWidth;
				t.imgHeight = img.height>img.width ? t.regional.offsetHeight : pHeight;
				t.px = (t.regional.offsetWidth - t.imgWidth) / 2 + 'px';
				t.py = (t.regional.offsetHeight - t.imgHeight) / 2 + 'px';
				t.getImage.height = t.imgHeight;
				t.getImage.width = t.imgWidth;
				t.getImage.style.top = t.py;
				t.getImage.style.left = t.px;
			}
			createCanvans.drawImage(img,0,0,t.imgWidth,t.imgHeight);
			t.imgUrl = t.getImage.toDataURL();
			t.cutImage();
			t.drag();
		};
	},
	cutImage:function (){
		var t = this;
		var cutcavans = t.editBox.getContext("2d");
		t.editBox.width=t.imgWidth;
		t.editBox.height=t.imgHeight;
		t.editBox.style.left=t.px;
		t.editBox.style.top=t.py;
		//对图片进行遮罩层覆盖
		cutcavans.fillStyle = "rgba(0, 0, 0, 0.5)";
		cutcavans.fillRect(0,0,t.imgWidth,t.imgHeight);
		cutcavans.clearRect(t.sx, t.sy, t.sHeight, t.sWidth);
		document.getElementById('show_edit').style.background = 'url(' + t.imgUrl + ')' + -t.sx + 'px ' + -t.sy + 'px no-repeat';
		document.getElementById('show_edit').style.width = t.sWidth + "px";
		document.getElementById('show_edit').style.height = t.sHeight + "px";
		
	},
	drag:function (){
		var t =this ;
		var dargger = false;
		var startX = 0;
		var startY = 0;
		//整体到页面边距的数值
		// var bx = parseInt(document.getElementById('body').getAttribute());
		var by = document.getElementById('body').style.left;
		//header 的 高度
		var hh= document.getElementById('header').style.height;
		document.getElementById('cover_box').onmousemove=function (e){
			//获取
			// var length = by + h;
			var x = e.pageX - (t.editBox.offsetLeft + t.regional.offsetLeft);
			var y = e.pageY - (t.editBox.offsetTop + t.regional.offsetTop);
			console.log(getComputedStyle("document.getElementById('header')","top"));
			// console.log(t.regional.offsetTop)
			// var nx = x - 382;
			// var ny = y - 77;
			// t.sx = 
			// t.sy = 
			// console.log(t.sx + t.sWidth)
			// console.log(nx)
			// console.log(t.sx + t.sHeight)
			// console.log(ny)
			if ( x > t.sx && x < t.sx + t.sWidth && y > t.sy && y < t.sy + t.sHeight ) {
			    this.style.cursor = 'move';
				
			//     this.onmousedown = function(){
			//         dargger = true;
			// 
			//         t.ex = t.sx; 
			//         t.ey = t.sy;
			// 
			// 
			//         startX = e.pageX - ( t.regional.offsetLeft + this.offsetLeft );
			//         startY = e.pageY - ( t.regional.offsetTop + this.offsetTop );
			// 		
			//     }
			//     window.onmouseup = function() {
			//         dargger = false;
			//     }
			// 
			//     if (dargger) {
			// 
			// 
			//         if ( t.ex + (pageX - startX) < 0 ) {
			//             t.sx = 0;
			//         } else if ( t.ex + (pageX - startX) + t.sWidth > t.imgWidth) {
			//             t.sx = t.imgWidth - t.sWidth;
			//         } else {
			//             t.sx = t.ex + (pageX - startX);
			//         };
			// 
			//         if (t.ey + (pageY - startY) < 0) {
			//             t.sy = 0;
			//         } else if ( t.ey + (pageY - startY) + t.sHeight > t.imgHeight ) {
			//             t.sy = t.imgHeight - t.sHeight;
			//         } else {
			//             t.sy = t.ey + (pageY - startY);
			//         }
			// 
			//         t.cutImage();
			//     }
			// } else{
			//     this.style.cursor = 'auto';
			}
		}
		
	}
}
postFile.init();
  
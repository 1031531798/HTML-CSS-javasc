//JQuery 动画

// $(document).ready(function () {
// 	$('.1').on('click', function(){			
// 	$('#div').hide(1000) //隐藏动画
// });
// })
// $(document).ready(function () {
// 	$('.2').on('click', function(){			
// 	$('#div').show(1000) //显示动画
// });
// })
// $(document).ready(function () {
// 	$('.3').on('click', function(){			
// 	$('#div').toggle(1000,function(){}) //获取状态 显示就隐藏 隐藏就显示
// });
// })
// $(document).ready(function () {
// 	$('.1').on('click', function(){			
// 	$('#div').slideUp(1000) // 向上平移隐藏
// });
// })
// $(document).ready(function () {
// 	$('.2').on('click', function(){			
// 	$('#div').slideToggle(1000) //向上平移隐藏 获取状态 显示就隐藏 隐藏就显示
// });
// })
// $(document).ready(function () {
// 	$('.3').on('click', function(){			
// 	$('#div').fadeOut(1000) //淡去隐藏动画
// });
// })
// $(document).ready(function () {
// 	$('.1').on('click', function(){			
// 	$('#div').fadeTo(1000,0.3) // 淡去隐藏动画 需要设置透明度 默认为：1
// });
// })
// $(document).ready(function () {
// 	$('.1').on('click', function(){			
// 	$('#div').animate({width:"100%"},1000,'linear') //自定义动画 （CSS属性，动画时间，swing/linear，callback在动画完成后可以进行操作）
// });
// })
$(document).ready(function () {
	$('.3').on('click', function(){			
	$('#div').animate({width:"100%"},10000,'linear').hide(3000) 
	setTimeout(function(){  //停止动画，可加2个参数，为布尔值，第一个true为停止所有动画，false是可以进行后续动画
		$('#div').stop(false)  //第二个参数true为停止就跳转到最终状态，false为停止为最初状态
	},1000)
});
})

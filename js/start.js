$(function () {

	setTimeout(function () {
		$('.start2').fadeOut(0);
	}, 0); //ロゴ表示部を消去

	setTimeout(function () {
		$('.start p').fadeIn(1600);
	}, 500); //プログレスバー表示
	setTimeout(function () {
		$('#container').fadeOut(0);
	}, 2500); //プログレスバーを消去

	let obj = document.getElementsByClassName("start2")[0];
	obj.style.opacity = 100; // 透明度を100に指定


	setTimeout(function () {
		$('.start2').fadeIn(0);
	}, 2500); //2.5秒後にロゴ部を表示

	setTimeout(function () {
		$('.start').fadeOut(300);
	}, 6000); //6秒後にオープニングアニメーション領域を削除

	setTimeout(function () {
		$('.start2').fadeOut(3300);
	}, 6000); //6秒後にロゴ表示領域をけす

	setTimeout(function () {
		$('.btn').fadeOut(0);
	}, 6000); //6秒後にボタンをけす


});
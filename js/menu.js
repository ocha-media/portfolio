$(function () {
	var op = $("header");

	$(".toggle").click(function () {

		console.log("OK");
		op.toggleClass("open");
	});


	$(".nav a").click(function () {
		console.log("OK");

		op.toggleClass("open");
	});
});
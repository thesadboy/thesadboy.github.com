// JavaScript Document
$(function(){
	$("#helpList a.nomal").die().live("click",function(){
		$("#helpList dd").hide();
		$(this).next("dd").fadeIn();
		$("#helpList a.active").removeClass("active").addClass("nomal");
		$(this).removeClass("nomal").addClass("active");	
	});
	$("#helpList a.active").die().live("click",function(){
		$(this).removeClass("active").addClass("nomal");
		$(this).next("dd").hide();	
	});
})

$(function(){
	$("#header").load("./header.html");
	$("#footer").load("./footer.html");
});
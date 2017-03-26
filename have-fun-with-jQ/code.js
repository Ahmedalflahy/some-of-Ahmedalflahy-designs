$(document).ready(function(){
	$("#take").click(function(){
			
			$("#out").html($("#in").val());    

			$("#in").val('')
		})
		$("#red").click(function(){
			$("#out").css("color","red");
		})
		$("#green").click(function(){
			$("#out").css("color","green");
		})

		$("#blue").click(function(){
			$("#out").css("color","blue");
		})
		$("#12").click(function(){
			$("#out").css("font-size","12px");
		})
		$("#22").click(function(){
			$("#out").css("font-size","22px");
		})
		$("#26").click(function(){
			$("#out").css("font-size","26px");
		})
		$("#pre").click(function(){
			$("#out").prepend($("#befor").val());

		})
		$("#append").click(function(){
			$("#out").append($("#after").val());
		})
	
})
		
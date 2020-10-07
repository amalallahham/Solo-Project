function saveTheV(name , email){
	
	return{
		name:name,
		email:email
	}
}
var save1=saveTheV("Amal Allahham", "amal@yaho.com")

$(".button").click(function(){
	
	if(($('#name').val() !== save1.name) || ($('#email').val() !== save1.email)){
		alert('you entered the wrong password or email')
	}else{
	var url="file:///C:/Users/user/Desktop/Solo-Project/index2.html"
	window.open(url)
}})
$('.column').click(function(){
$('.row').hide()
$('.row2').hide()
$('body').append(
	'<h1 class="choose" style="margin-top:100px">THANK YOU FOR CHOOSING </h1>',
	'<h2 class="section">Here is the sectors <h2>')})
$('.column2').click(function(){
$('.row').hide()
$('.row2').hide()
$('body').append(
	'<h1 class="choose" style="margin-top:100px">THANK YOU FOR CHOOSING </h1>',
	'<h2 class="section">Here is the sectors <h2>')})

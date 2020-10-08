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
	var array=[]

$('#enter').click(function(){
	var input=$('#opinion').val();
array.push(input);
alert('your message is received ')
$('#opinion').val(" ")
})



$('.column').click(function(){
$('.row').hide()
$('.row2').hide()
$('h2').text("Help us to save some's life")
$('body').css({'background-image':'url(sav.jpg)',"background-repeat": "no-repeat" , "background-size":"1400px 700px"})
$('body').append(
	'<div id="all">',
	'<h1 class="choose" style="margin-top:100px; color:white">THANK YOU FOR CHOOSING </h1>',
	'<h2 class="choose">Here is the sectors </h2>',
	'<div >',
	'<ul id= "icon">',
	'<div id="tr1">',
	'<li class="health">HEALTH:<br><form>',
  '<input type="checkbox" id="H2">',
  '<label for="H2">Build a hospital</label><br>',
  '<input type="checkbox" id="H3" >',
  '<label for="H3">Equipment</label><br>',
  '<input type="checkbox" id="H4">',
  '<label for="H4">sponsor a surgery for a patient</label><br><br>',
/*  '<input type="submit" value="Submit">',
*/	'</form></li></div>',
'<br><br><br>',
	'<li class="edu">EDUCATION:<br><form>',
  '<input type="checkbox" id="E2">',
  '<label for="E2">Establish schools</label><br>',
  '<input type="checkbox" id="E3" >',
  '<label for="E3">Scholarships for students</label><br>',
  '<input type="checkbox" id="E4">',
  '<label for="E4">Providing children with school supplies</label><br><br>',
  /*'<input type="submit" value="Submit">'*/
	'</form></li>',
	'<br><br><br>',
	'<li class="community">COMMUNITY<br><form>',
  '<input type="checkbox" id="C2">',
  '<label for="C2">Feed the poor</label><br>',
  '<input type="checkbox" id="C3" >',
  '<label for="C3">Repairing streets and infrastructure</label><br>',
  '<input type="checkbox" id="C4">',
  '<label for="C4">Providing children with school supplies</label><br><br>',
/*  '<input type="submit" value="Submit">',
*/	'</form></li>',
	'</ul>',
	'</div></div></div>'
	)
	})

$('.column2').click(function(){
$('.row').hide()
$('.row2').hide()
$('h2').text("Help us to save some's life")
$('body').css({'background-image':'url(sav.jpg)',"background-repeat": "no-repeat" , "background-size":"1400px 700px"})
$('body').append(
	'<div id="all">',
	'<h1 class="choose" style="margin-top:100px; color:white">THANK YOU FOR CHOOSING </h1>',
	'<h2 class="choose">Here is the sectors </h2>',
	'<div >',
	'<ul id= "icon">',
	'<div id="tr1">',
	'<li class="health">HEALTH:<br><form>',
  '<input type="checkbox" id="H2">',
  '<label for="H2">Build a hospital</label><br>',
  '<input type="checkbox" id="H3" >',
  '<label for="H3">Equipment</label><br>',
  '<input type="checkbox" id="H4">',
  '<label for="H4">sponsor a surgery for a patient</label><br><br>',
/*  '<input type="submit" value="Submit">',
*/	'</form></li></div>',
'<br><br><br>',
	'<li class="edu">EDUCATION:<br><form>',
  '<input type="checkbox" id="E2">',
  '<label for="E2">Establish schools</label><br>',
  '<input type="checkbox" id="E3" >',
  '<label for="E3">Scholarships for students</label><br>',
  '<input type="checkbox" id="E4">',
  '<label for="E4">Providing children with school supplies</label><br><br>',
  /*'<input type="submit" value="Submit">'*/
	'</form></li>',
	'<br><br><br>',
	'<li class="community">COMMUNITY<br><form>',
  '<input type="checkbox" id="C2">',
  '<label for="C2">Feed the poor</label><br>',
  '<input type="checkbox" id="C3" >',
  '<label for="C3">Repairing streets and infrastructure</label><br>',
  '<input type="checkbox" id="C4">',
  '<label for="C4">Providing children with school supplies</label><br><br>',
/*  '<input type="submit" value="Submit">',
*/	'</form></li>',
	'</ul>',
	'</div></div></div>'
	)
	})

$('#subbb').click(function(){
	var url2="file:///C:/Users/user/Desktop/Solo-Project/index3.html"
	window.open(url2)
})
$('#done').click(function(){
	if(($('#card').val() === "") || ($('#CVC').val() === "") || ($('#A').val() === "" )|| ($('#pas').val() === "") || ($('#num').val() === "")){
		alert('You have to fill all the information')
	}else{
		$('#pay').hide()
		$('header').hide()
$('#B3').css({"background-image":"url(thank.jpg)" ,"background-repeat":"no-repeat" ,"background-size": "1000px 600px"
})
}})




/*$('#subbb').text('SUBMIT')
*/
/*
$('#subbb').click(function(){
	$('body').hide()
	$('body').append(
		'<h1 id="ca" >ADD CARD</h1>',
		'<input type="number" id="card" placeholder="Inter Card Number"><br>',
		'<input type="number" id="cardC" placeholder="CVC"><br>',
		'<input type="number" id="cardC" placeholder="Amount"><br>',
		'<input type="number" id="cardC" placeholder="Password"><br>',
		'<button id="done">SUBMIT</button>')
})

*/

/*('.health').on("click","#H",function(){
	$('#health').append('<form>',
  '<input type="checkbox" id="H2">',
  '<label for="H2">Build a hospital</label><br>',
  '<input type="checkbox" id="H3" >',
  '<label for="H3">Equipment</label><br>',
  '<input type="checkbox" id="H4">',
  '<label for="H4">sponsor a surgery for a patient</label><br><br>',
  '<input type="submit" value="Submit">',
	'</form>')

console.log('fjk')
})

*/
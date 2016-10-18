<html>
<body>


<?php

if(isset($_POST['name']))
{
	
	$db = new PDO('sqlite:request/request.db');
	$Name = $_POST["name"];
	$Email = $_POST["email"]; 	
	$Inst = $_POST["institution"];
	$Usage = $_POST["usage"]; 
	

	
	$db->exec("INSERT INTO request (Name, Email, Inst, Usage, Send) VALUES ('$Name', '$Email', '$Inst', '$Usage', 0)");




	echo 'We have received your request. The password of souce code will be sent to you in 5 working days. Thank you!';

	header('Refresh: 5; URL = code.html');

		

}

?>







</body>
</html>
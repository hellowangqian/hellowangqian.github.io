<?php session_start();?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="css/style2.css"/>
</head>

<body>






<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Institution </th>
      <th>Intended Usage</th>
      <th>Send</th>
    </tr>
  </thead>
  <tbody>


<?php

$db = new PDO('sqlite:request/request.db');
$result = $db->query("SELECT * FROM request");

while ($row = $result->fetch())
{
	

?>
    <tr>
      <td><?php echo "$row[0]" ?></td>
      <td><?php echo "$row[1]" ?></td>
      <td><?php echo "$row[2]"; ?></td>
      <td><?php echo "$row[3]" ?></td>
      <td>
<?php 

if($row[4] == 0)
{
?>	

<?php if(isset($_SESSION['username'])) { ?>

<a href="?action=send&email=<?php echo "$row[1]"?>" class="button send" onclick="return confirm('Are you sure to send the source code?')">

<?php }?>

<img src = "images/send.png" style = "width : 18px">

<?php if(isset($_SESSION['username'])) { ?>
</a>
<?php }?>

<?php
}

?>

      </td>
    </tr>

<?php
}
?>


    
  </tbody>
</table>


<?php
$url = 'http://www.cs.man.ac.uk/~wangq/view.php';
if(isset($_GET['action'])=='send' && isset($_SESSION['username']))
{
	$Email = $_GET['email'];
	$Msg = 'The password of source code is hello1234.';


	if (mail($Email, 'Password of Source Code', $Msg)) { 
            	$db = new PDO('sqlite:request/request.db');
		$db->exec("UPDATE request SET Send = 1 where Email = '$Email'");
		$db = NULL;
		echo "<meta http-equiv=\"refresh\" content=\"0; url=$url \">";
		exit();
		
        } else { 
            echo '<p>Something went wrong, go back and try again!</p>'; 
        }
	
	
}
?>


</body>
</html>


<!DOCTYPE html>
<html>
<body>

<h1>My first PHPigygjhjh page</h1>

<?php
$n=5;

 for ($i=1; $i<=5; $i++) { 
 	for ($j=1; $j<=(2*$n)-1; $j++) {

 		if($j>=$n-($i-1) && $j<=$n+($i-1)){
 		echo " * ";
 	}
 		else{ echo "&nbsp;&nbsp;&nbsp;";
 	}

 }
  echo "<br/>";

 }


?>

<?php


$n=5;
for($i=1; $i<=5;$i++)
{
	for ($j=1; $j<=$n; $j++) { 

		if($i==$j||$i+$j==$n+1) {
			
			echo "*";
}else { echo"&nbsp";
			
		}
		
	}echo"<br>";

}



?> 

<?php

$str="Umedkashyap";	
$count=strlen($str);
for($i=0;$i<=$count;$i++){
   for($j=0;$j<=$i;$j++)
   {
   	echo $str[$j];
  
   }
    	echo"<br/>";
}
?>

</body>
</html>

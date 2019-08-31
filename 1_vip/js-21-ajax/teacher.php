<?php
	header("content-type:text/html;charset='utf-8'");
	$arr = array(
		array('name'=>'Jery','age'=>18),
		array('name'=>'Arry','age'=>30),
		array('name'=>'KeKe','age'=>31),
		array('name'=>'Vicky','age'=>50),
		array('name'=>'mini','age'=>60),
		array('name'=>'Ide','age'=>27),
		array('name'=>'Jery','age'=>18),
		array('name'=>'Arry','age'=>30),
		array('name'=>'KeKe','age'=>31),
		array('name'=>'Vicky','age'=>50),
		
	);
	echo json_encode($arr);
?>
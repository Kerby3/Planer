<?php
switch ($_POST['res']) {
	case 'addTask':
		echo json_encode(['redirectURL' => 'addTask.php']);
		break;
	
	case 'addEvent':
		echo json_encode(['redirectURL' => 'addEvent.php']);
		break;

	default:
		// code...
		break;
}
?>

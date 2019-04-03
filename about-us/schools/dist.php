<?php 
switch($_GET['school']) {
    case 'uekatowice':
        include_once('uekatowice.php');
    break;
    case 'seamk': 
        include_once('seamk.php');
    break;
    default:
        echo 'nothing to display';
    break;
}
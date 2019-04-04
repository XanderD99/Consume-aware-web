<?php 
switch($_GET['school']) {
    case 'uekatowice':
        include_once('uekatowice.php');
    break;
    case 'seamk': 
        include_once('seamk.php');
    break;
    case 'bge':
        include_once('bge.php');
    break;
    case 'bucarest':
        include_once('bucarest.php');
    break;
    case 'isik':
        include_once('isik.php');
    break;
    case 'iae': 
        include_once('iae.php');
    break;
    default:
        echo 'nothing to display';
    break;
}
<?php 

isset($_GET['school']) ? $string = $_GET['school'] : header('Location: /about-us');

switch($string) {
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
        include_once('bucharest.php');
    break;
    case 'isik':
        include_once('isik.php');
    break;
    case 'iae': 
        include_once('iae.php');
    break;
    case 'howest': 
        include_once('howest.php');
    break;
    case 'trento':
        include_once('trento.php');
    break;
    default:
        header('Location: /about-us');
    break;
}
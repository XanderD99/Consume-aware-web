<?php
isset($_GET['name']) ?$string = $_GET['name'] : header('Location: /about-us');

switch ($string) {
    case 'slawomir':
        include_once('slawomir.php');
        break;
    case 'marta':
        include_once('marta.php');
        break;
    case 'justyna':
        include_once('justyna.php');
        break;
    case 'agnieszka':
        include_once('agnieszka.php');
        break;
    case 'judit': 
        include_once('judit.php');
        break;
    case 'diana': 
        include_once('diana.php');
        break;
    case 'diara': 
        include_once('diara.php');
        break;
    case 'magdalena': 
        include_once('magalena.php');
        break;
    case 'frederic': 
        include_once('frederic.php');
        break;
    case 'corneel': 
        include_once('corneel.php');
        break;
    case 'lieven': 
        include_once('lieven.php');
        break;
    default:
        header('Location: /about-us');
        break;
}

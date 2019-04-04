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
    default:
        header('Location: /about-us');
        break;
}

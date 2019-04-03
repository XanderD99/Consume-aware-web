<?php
switch($_GET['name']) {
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
}
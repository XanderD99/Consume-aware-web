<?php 

function clean($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    $data = htmlentities($data, ENT_QUOTES);
    return $data;
}




?>
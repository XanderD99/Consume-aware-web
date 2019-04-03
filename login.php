<?php
include "utils.php";

$hash = password_hash("test", PASSWORD_DEFAULT);

if(!isset($_POST['password'])){
    header("Location: index.php");
    exit;
} else {
    if(!password_verify( clean($_POST['password']) , $hash)){
        header("Location: /study-material/index.php");
        exit;
    };
}

//password ok!
header("Location: /study-material/index.php");
exit;

?>
<?php

$hash = password_hash("test", PASSWORD_DEFAULT);

if(!isset($_POST['password'])){
    header("Location: index.php");
    exit;
} else {
    if(!password_verify( $_POST['password'] , $hash)){
        header("Location: Teacher-login.php");
        exit;
    };
}

//password ok!
header("Location: Teacher.php");
exit;

?>
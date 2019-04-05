<?php
include "../utils.php";
include_once "../Encrypter.php";

if(!isset($_POST['password'])){
    // echo("got no post");
    header("Location: index.php");
    exit;
} else {
    if(!password_verify( $_POST['password'] ,  '$2y$10$Q7Uht1AMWIVPHXsVLl5zB.XlckqxisQwyagzJ.5Wq9eW/MAJhCFry')){
        // echo("password_verify fails");
        header("Location: admin.php");
        exit;
    };
}

function setUserCookie()
{
    $username="admin";
    $cookieExpiryTime = 3600;
    //concatenates username, timestamp into a cleartext string which it encrypts with AES256 and concatenates with the salt ($iv) and sends to the user as login cookie
    $iv = bin2hex(openssl_random_pseudo_bytes(8, $wasItSecure));
    if ($wasItSecure) {
        $clearString = $username . ";" . (time() + $cookieExpiryTime);
        $encryptedString = openssl_encrypt($clearString, Encrypter::getCipherMethod(), Encrypter::getAesKey(), 0, $iv) . ";" . $iv;
        setcookie("token", $encryptedString, time() + $cookieExpiryTime);
        header("Location: teacher.php");
        exit;
    } else {
        header("Location: login.php");
        exit;
    }
}

//password ok!
setUserCookie();
// echo("pw ok");
header("Location: /study-material/teacher.php");
exit;

?>
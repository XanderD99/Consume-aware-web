<?php

include_once "../Cookie.php";
include_once "../Encrypter.php";

if (isset($_COOKIE["token"])) {
    $username = Cookie::decryptCookie();
    if ($username) {
        header("Location: teacher.php");
        exit();
    }
}

include_once "../head.php";
?>
<main class="container">

<div class="row">
    <form method="post" action="login.php" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" name="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
      <div class="input-field col s12">
      <input type="submit" value="Log in" class="cyan submitButton">
      </div>
      </div>
    </form>
</div>

</main>

<?php
include_once "../tail.php";
?>
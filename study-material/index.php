<?php
include_once("../head.php");

?>
<main class="container">
  <h1>Study material</h1>
  <div class="divider"></div>
  <br />
  <div class="section row center-align">
    <a href="teacher-login.php"><button id="teacher" class="waves-effect waves-teal cyan btn-large">
      Teacher
    </button></a>
    <a href="student.php"><button id="student" class="waves-effect waves-teal cyan btn-large">
      Student
    </button></a>
  </div>


  <?php 
//   $variable = isset($_GET["type"]) ? $_GET["type"] : "";

// switch ($variable) {
//   case 'teacher':
//     include_once("teacher.php");
//     break;
//     case 'student':
//     include_once("student.php");
//     break;
//     default: 
//     break;
// }
?>
  
  <div id="modal" class="modal">
    <div class="modal-content">
      <form action="login.php" method="post">
        <div class="row">
          <div class="input-field col s11">
            <label for="password" name="password"
              ><i class="material-icons">lock</i> Password</label>
            <input id="password" type="password" name="password" class="validate" />
          </div>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat"></a>
        </div>
    </div>
</main>
<?php
include_once("../tail.php")
?> 
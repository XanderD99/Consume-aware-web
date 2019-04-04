<?php 

isset($_GET['school']) ? $string = $_GET['school'].'.php' : header('Location: /about-us');

include_once($string);
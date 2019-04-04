<?php
isset($_GET['name']) ? $string = $_GET['name'].'.php' : header('Location: /about-us');

try {
    include_once($string);
} catch(Exception $e) {
    header('Location: /about-us');
}

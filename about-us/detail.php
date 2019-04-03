<?php
include_once('../head.php');

?>

<main class="container">
    <?php
        if(isset($_GET['school'])) {
            include('./schools/dist.php');
        } else if (isset($_GET['name'])) {
            include('./people/dist.php');
        } else {
            header('Location: /about-us');
        }
    ?>
</main>

<?php
include_once('../tail.php');
<?php
include_once('../head.php');
$chapter = $_GET['chapter'];

echo $chapter;
?>
<main class="container">
<embed style="width: 100%; height: 100%;" src="/assets/pdf/chapter_<?php echo $chapter?>.pdf" 
 type="application/pdf">
</main>
<?php
include_once('../tail.php');
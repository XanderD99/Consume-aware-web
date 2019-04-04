<?php
include_once('../head.php');
?>
<main class="container">
    <h2>Transnational meetings</h2>
    <p>Communication and cooperation happen among all project partners and other relevant stakeholders periodically. Cooperation is achieved through frequent telecommunication and email contact. The partners meet regularly face to face during transnational meetings, Intensive Programmes and Multiplier Event which are organized every 4 months in order to ensure fluent flow of information.  Each time 2 representatives (2 teachers) of each partner organization take part in the meetings and discuss all organization and substantial matters. </p>
    <p>Results from transnational meetings from previous years are presented as follows:</p>

    <div class="row">
        <div class="col s6">
            <?php
            include("reports/report1.php");
            include("reports/report3.php");
            include("reports/report5.php");
            ?>
        </div>
        <div class="col s6">
            <?php
            include("reports/report2.php");
            include("reports/report4.php");
            include("reports/report6.php");
            ?>
        </div>
    </div>

</main>
<?php
include_once('../tail.php');
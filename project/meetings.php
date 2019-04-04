<?php
include_once('../head.php');
?>
<main class="container">
    <h2>Transnational meetings</h2>
    <p>Communication and cooperation happen among all project partners and other relevant stakeholders periodically. Cooperation is achieved through frequent telecommunication and email contact. The partners meet regularly face to face during transnational meetings, Intensive Programmes and Multiplier Event which are organized every 4 months in order to ensure fluent flow of information. Each time 2 representatives (2 teachers) of each partner organization take part in the meetings and discuss all organization and substantial matters. </p>
    <p>Results from transnational meetings from previous years are presented as follows:</p>


    <!--div class="carousel carousel-slider center">
        <div class="carousel-fixed-item center">
            <a class="btn waves-effect white grey-text darken-text-2">button</a>
        </div>
        <div class="carousel-item red white-text" href="#one!">
            <h2>First Panel</h2>
            <p class="white-text">This is your first panel</p>
        </div>
        <div class="carousel-item amber white-text" href="#two!">
            <h2>Second Panel</h2>
            <p class="white-text">This is your second panel</p>
        </div>
        <div class="carousel-item green white-text" href="#three!">
            <h2>Third Panel</h2>
            <p class="white-text">This is your third panel</p>
        </div>
        <div class="carousel-item blue white-text" href="#four!">
            <h2>Fourth Panel</h2>
            <p class="white-text">This is your fourth panel</p>
        </div>
    </div-->

    <div class="carousel carousel-slider center">
        <?php
        for ($i = 0; $i < 6; $i++) {
            echo '<div class="carousel-item" style="overflow-y: scroll;">';
            include('reports/report' . ($i + 1) . '.php');
            echo '</div>';
        }
        ?>
    </div>
    <div class="navigation">
        <button class="btn waves-effect waves-light" id="left">
            <i class="material-icons">arrow_back</i>
        </button>

        <button class="btn waves-effect waves-light" id="right">
            <i class="material-icons">arrow_forward</i>
        </button>
    </div>
</main>

<script src="/assets/js/carousel.js"></script>
<?php
        include_once('../tail.php');

<?php
include_once("head.php");

?>
<main class="container">
<h1 class="center-align">Study material</h1>
<div class="divider"></div>
<br>
<div class="section row center-align">
	<button id="teacher" class="waves-effect waves-teal cyan btn-large">Teacher</button>
	<button id="student" class="waves-effect waves-teal cyan btn-large">Student</button>
</div>

<div id="teacherSub" class="hide row center-align">
	<button id="instruction" class="waves-effect waves-teal btn-large">instruction</button>
	<button id="book" class="waves-effect waves-teal  btn-large">Book</button>
	<button id="app" class="waves-effect waves-teal  btn-large">App</button>
</div>

<div id="bookSub" class="hide row center-align">
		<button id="part1" class="waves-effect waves-teal  btn-large">part1</button>
		<button id="part2" class="waves-effect waves-teal  btn-large">part2</button>
		<button id="part3" class="waves-effect waves-teal  btn-large">part3</button>
</div>

<div id="part1Sub" class="hide row center-align">
	<button id="chapter1" class="waves-effect waves-teal  btn-large">chapter1</button>
	<button id="chapter2" class="waves-effect waves-teal  btn-large">chapter2</button>
	<button id="chapter3" class="waves-effect waves-teal  btn-large">chapter3</button>
</div>

<div id="part2Sub" class="hide row center-align">
<button id="chapter4" class="waves-effect waves-teal btn-large">chapter4</button>
<button id="chapter5" class="waves-effect waves-teal btn-large">chapter5</button>
<button id="chapter6" class="waves-effect waves-teal btn-large">chapter6</button>
</div>

<div id="part3Sub" class="hide row center-align">
<button id="chapter7" class="waves-effect waves-teal btn-large">chapter7</button>
<button id="chapter8" class="waves-effect waves-teal btn-large">chapter8</button>
<button id="chapter9" class="waves-effect waves-teal btn-large">chapter9</button>
<button id="chapter10" class="waves-effect waves-teal btn-large">chapter10</button>
<button id="chapter11" class="waves-effect waves-teal btn-large">chapter11</button>
</div>

		
<div id="chapter1Sub" class="hide center-align">
		<p>1</p>
		<a href="">Presentation</a>
		<a href="">E-book</a>
		<a href="">Interactive</a>
	</div>
<div id="chapter2Sub" class="hide center-align">
	<p>2</p>
	<a href="">Presentation</a>
	<a href="">E-book</a>
	<a href="">Interactive</a>
</div>
<div id="chapter3Sub" class="hide center-align">
	<p>3</p>
	<a href="">Presentation</a>
	<a href="">E-book</a>
	<a href="">Interactive</a>
</div>


<div id="chapter4Sub" class="hide center-align">
	<p>4</p>
	<a href="">Presentation</a>
	<a href="">E-book</a>
	<a href="">Interactive</a>
</div>
<div id="chapter5Sub" class="hide center-align">
	<p>5</p>
	<a href="">Presentation</a>
	<a href="">E-book</a>
	<a href="">Interactive</a>
</div>
<div id="chapter6Sub" class="hide center-align">
	<p>6</p>
	<a href="">Presentation</a>
	<a href="">E-book</a>
	<a href="">Interactive</a>
</div>

<div id="chapter7Sub" class="hide center-align">
	<p>7</p>
	<a href="">Presentation</a>
	<a href="">E-book</a>
	<a href="">Interactive</a>
</div>
<div id="chapter8Sub" class="hide center-align">
	<p>8</p>
	<a href="">Presentation</a>
	<a href="">E-book</a>
	<a href="">Interactive</a>
</div>
<div id="chapter9Sub" class="hide center-align">
	<p>9</p>
	<a href="">Presentation</a>
	<a href="">E-book</a>
	<a href="">Interactive</a>
</div>
<div id="chapter10Sub" class="hide center-align">
	<p>10</p>
	<a href="">Presentation</a>
	<a href="">E-book</a>
	<a href="">Interactive</a>
</div>
<div id="chapter11Sub" class="hide center-align">
	<p>11</p>
	<a href="">Presentation</a>
	<a href="">E-book</a>
	<a href="">Interactive</a>
</div>


<div id="modal" class="modal">
	<div class="modal-content">
		<form action="" method="post">
			<div class="row">
				<div class="input-field col s11">
					<label for="login"><i class="material-icons">person</i> Username</label>
					<input id="login" type="text" class="validate">
				</div>
			</div>
			<div class="row">
				<div class="input-field col s11">
					<label for="password"><i class="material-icons">lock</i> Password</label>
					<input id="password" type="password" class="validate">
				</div>
			</div>
			<div class="row">
				<div class="input-field col offset-l2">
					<button class="cyan btn-flat"> <i class="material-icons right">send</i> Login</button>

				</div>
			</div>

		</form>
	</div>
	<div class="modal-footer">
		<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat"></a>
	</div>
</div>

</main>

<?php
include_once("tail.php")
?>
    
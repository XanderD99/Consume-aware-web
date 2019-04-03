<?php
include_once("head.php");

?>
		<main class="container">
			<form action="" method="post">
				<div class="row">
					<h5>
						If you have any question do not hesitate to contact us.
					</h5>
				</div>
				<div class="row">
					<div class="input-field col s12">
						<label for="name">Name and surname</label>
						<input type="text" id="name" class="validate" />
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12">
						<label for="email">Your email</label>
						<input
							type="text"
							id="email"
							class="validate"
							placeholder="example@domainname.com"
						/>
						<span
							class="helper-text"
							data-error="example@domainname.com"
							data-success="good email"
						></span>
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12">
						<label for="subject">Subject</label>
						<input type="text" id="subject" class="validate" />
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12">
						<label for="message">Write your message here</label>
						<input type="text" id="message" class="validate" />
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12">
						<button class="btn waves-effect waves-light cyan" type="submit" name="action" onclick="alerFunction()">
							Send <i class="material-icons right">send</i>
  						</button>
					</div>
				</div>


				
        

			</form>
		</main>
<?php
include_once("tail.php")
?>

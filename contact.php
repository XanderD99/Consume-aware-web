<?php
include_once("head.php");

?>
		<main class="container">
			<form action="" method="post" id="contactForm">
				<div class="row">
					<h5>
						If you have any question do not hesitate to contact us.
					</h5>
					<p>Use this page to set up an e-mail (only works if you have an e-mail client installed, eg. Outlook) or mail us on: example@mail.com</p>
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
							type="email"
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
						<a class="btn waves-effect waves-light cyan" id="submitButton">
							Send <i class="material-icons right">send</i>
  						</a>
					</div>
				</div>
			</form>
		</main>

		<div class="row">
		<div class="col s12" id="contactStatus"></div>
		</div>

		<script src="/assets/js/contact.js"></script>
<?php
include_once("tail.php")
?>

<?php
include_once("head.php");

if (isset($_POST["name"])) {
	$name = $_POST["name"];
	$email = $_POST["email"];
	$subject = $_POST["subject"];
	$message = $_POST["message"];
	$mailContent = "sender message: " . $message . " -  sender name:" . $name . " - sender email: " . $email;

	mail("consume-aware@uekat.pl", $subject, $mailContent);
}
?>
		<main class="container">
			<form action="/contact.php" method="post" id="contactForm">
				<div class="row">
					<h5>
						If you have any questions do not hesitate to contact us.
					</h5>
				</div>
				<div class="row">
					<div class="input-field col s12">
						<label for="name">Name and surname</label>
						<input type="text" id="name" class="validate" name="name" required/>
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
							name="email"
							required
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
						<input type="text" id="subject" class="validate" name="subject" required/>
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12">
						<label for="message">Write your message here</label>
						<input type="text" id="message" class="validate" name="message" required/>
					</div>
				</div>
				<div class="row">
						<input type="submit" class="cyan submitButton" value="Send">
				</div>
			</form>
		</main>

<?php
include_once("tail.php");
?>
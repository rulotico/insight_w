
	<?php




	$name = $_POST["name"];
	$mail = $_POST["mail"];
	$msj = $_POST["msj"];



					$to  = 'contacto@insightads.mx';

					// subject
					$subject = 'InsightAds Web tiene un mensaje para ti. :D';

					// message
					$message = '
					<html>
					<head>
					  <title>InsightAds Web :</title>
					  <style>
						
						h1{
							font-size:30px;
						}
					  </style>
					</head>
					<body>
					  <div style="padding:40px;background-color:#E6E6EB;color:#2A2A2B;">
					  <h1>Hola Insight*</h1>
					  <p style="text-align:justify;">'.$msj.'</p>
					  <p>'.$name.'</p>
					  <div>
					</body>
					</html>
					';


					// To send HTML mail, the Content-type header must be set
					$headers = "MIME-Version: 1.0" . "\r\n";
					$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

					// More headers
					$headers .= 'From: <webmaster@example.com>' . "\r\n";
					$headers .= 'Cc: myboss@example.com' . "\r\n";

					mail($to,$subject,$message,$headers);
					
					



	?>
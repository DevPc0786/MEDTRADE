<?php
$servername = "localhost"; // or your GoDaddy MySQL host
$username = "your_db_username";
$password = "your_db_password";
$database = "your_db_name";

$API_KEY = "your_god";
$API_SECRET = "your_godaddy_secret";

$url = "https://api.godaddy.com/v1/domains/medtrade/records/A/@";

$header = array(
    'Authorization: sso-key'. $API_KEY.':'.$API_SECRET. '',
);


$ch = curl_init();
$timeout = 60;

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, $header);

$response = curl_exec($ch);
curl_close($ch);
$dn = json_decode($response, true);
        print_r($dn);
        
        
    ?>
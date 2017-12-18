<?php 
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
// header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
// header("Content-Type: application/json");

// API QUE GENERA EL TOKEN NECESARIO DE RENOVAR CADA HORA PARA SPOTIFY

require 'vendor/autoload.php';

$client = new GuzzleHttp\Client();

$grant_type = "client_credentials";

$client_id = "856a9d10687b40909ae061f0f06ff2b0";
$client_secret = "97b966aa11a34ed8897e1aa81a419ea6";


$request_url = "https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=$client_id&client_secret=$client_secret";


try {
  $response = $client->request(
    'POST', $request_url,[
        'headers' => [
            'Content-Type' => 'application/x-www-form-urlencoded'
        ]
     ] );

  $contents = $response->getBody()->getContents();
 
  echo($contents);

  
} catch(Exception $e) {
  echo "something went wrong: <br>";
  echo $e->getMessage();
}

?>
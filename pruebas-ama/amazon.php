<?php 
// A VECES DA FALLO SI SE SOLICITAN DEMASIADAS RESPUESTAS MUY RAPIDAMENTE
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
header("Content-Type: application/json");

$nombre_objeto=$_REQUEST["msg"];


require 'vendor/autoload.php';

$client = new GuzzleHttp\Client();

// Your Access Key ID, as taken from the Your Account page
$access_key_id = "AKIAIUMW6FAS3CUT3PKQ";

// Your Secret Key corresponding to the above ID, as taken from the Your Account page
$secret_key = "BViMZKsdVdLqC/O0D7S9KaTNkJTUJMmeXLTG831M";

// The region you are interested in
$endpoint = "webservices.amazon.es";

$uri = "/onca/xml";

$params = array(
    "Service" => "AWSECommerceService",
    "Operation" => "ItemSearch",
    "AWSAccessKeyId" => $access_key_id,
    "AssociateTag" => "pep2132-21",
    "SearchIndex" => "All",
    "Keywords" => $nombre_objeto,
    "ResponseGroup" => "Images,ItemAttributes,Offers"
);

// Set current timestamp if not set
if (!isset($params["Timestamp"])) {
    $params["Timestamp"] = gmdate('Y-m-d\TH:i:s\Z');
}

// Sort the parameters by key
ksort($params);

$pairs = array();

foreach ($params as $key => $value) {
    array_push($pairs, rawurlencode($key)."=".rawurlencode($value));
}

// Generate the canonical query
$canonical_query_string = join("&", $pairs);

// Generate the string to be signed
$string_to_sign = "GET\n".$endpoint."\n".$uri."\n".$canonical_query_string;

// Generate the signature required by the Product Advertising API
$signature = base64_encode(hash_hmac("sha256", $string_to_sign, $secret_key, true));

// Generate the signed URL
$request_url = 'http://'.$endpoint.$uri.'?'.$canonical_query_string.'&Signature='.rawurlencode($signature);




try {
  $response = $client->request(
    'GET', $request_url
  );

  $contents = new SimpleXMLElement($response->getBody()->getContents());
 
  print_r(json_encode($contents));
} catch(Exception $e) {
  echo "something went wrong: <br>";
  echo $e->getMessage();
}

?>
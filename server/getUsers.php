<?php
include_once("config.php");

$table = "persona";

$query = $connection->prepare("SELECT * FROM " . $table);
$query->execute();

$result = $query->fetchAll(PDO::FETCH_CLASS);

if(count($result) == 0){
    $result["msg"] = "No se ha registrado ningún usuario";
}
else{
    $result["msg"] = "OK";
}
$result["users"] = json_encode($result);
echo json_encode($result);
?>

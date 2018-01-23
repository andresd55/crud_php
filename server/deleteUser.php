<?php
include_once("config.php");

$table = "persona";

$sql = $connection->prepare("DELETE FROM persona WHERE cedula = :id");

$id = $_POST['id'] . "";

$sql->bindParam(':id', $id);

$query = $sql->execute();

if($query){
    $result["msg"] = $query;
}else{
    $result["msg"] = $sql->errorInfo();
}


$result["users"] = json_encode($result);
echo json_encode($result);
?>

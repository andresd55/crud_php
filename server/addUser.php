<?php
include_once("config.php");

$table = "persona";

$sql = $connection->prepare("insert into persona (cedula, nombre, apellido, email, fecha_nacimiento) 
        values (:id, :firstName, :lastName, :email, :birthday)");

$id = $_POST['id'] . "";
$firstName = $_POST['firstName'] . "";
$lastName = $_POST['lastName'] . "";
$email = $_POST['email'] . "";
$birthday = $_POST['birthday'] . "";

$sql->bindParam(':id', $id);
$sql->bindParam(':firstName', $firstName);
$sql->bindParam(':lastName', $lastName);
$sql->bindParam(':email', $email);
$sql->bindParam(':birthday', $birthday);

$query = $sql->execute();

if($query){
    $result["msg"] = $query;
}else{
    $result["msg"] = $sql->errorInfo();
}

$result["users"] = json_encode($result);
echo json_encode($result);

?>

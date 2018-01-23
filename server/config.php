<?php

    $host = 'localhost';
    $db = 'usuarios';
    $username = 'root';
    $password = '';
    $connection = new PDO("mysql:dbname=$db;host=$host", $username, $password);
?>
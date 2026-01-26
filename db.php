<?php
$host = "localhost";
$user = "root";
$pass = ""; 
$db   = "botanik-data";
$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Verbindung zur Datenbank fehlgeschlagen: " . $conn->connect_error);
}
?>
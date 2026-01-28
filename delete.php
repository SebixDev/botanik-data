<?php
include 'db.php';

$sql = "DELETE FROM pflanzen ORDER BY id DESC LIMIT 1";

if ($conn->query($sql) === TRUE) {
    if ($conn->affected_rows > 0) {
        echo "Erfolg";
    } else {
        echo "Datenbank leer";
    }
} else {
    echo "Fehler: " . $conn->error;
}
?>
<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $sql = "DELETE FROM pflanzen ORDER BY id DESC LIMIT 1";
    
    if ($conn->query($sql) === TRUE) {
        echo "Erfolg";
    } else {
        echo "Fehler: " . $conn->error;
    }
} else {
    echo "Kein POST-Request empfangen";
}
?>
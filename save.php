<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['text'])) {
    $text = $conn->real_escape_string($_POST['text']);
    $zeit = $conn->real_escape_string($_POST['zeit']);

    $sql = "INSERT INTO pflanzen (name, zeitstempel) VALUES ('$text', '$zeit')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Erfolg";
    } else {
        echo "Fehler: " . $conn->error;
    }
}
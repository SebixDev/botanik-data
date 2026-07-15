<?php
declare(strict_types=1);
require 'db.php';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['fehler' => 'Methode nicht erlaubt']);
    exit;
}

try {
    $conn->query("DELETE FROM pflanzen ORDER BY id DESC LIMIT 1");

    if ($conn->affected_rows === 0) {
        echo json_encode(['geloescht' => false, 'meldung' => 'Keine Eintraege vorhanden']);
        exit;
    }

    echo json_encode(['geloescht' => true]);
} catch (mysqli_sql_exception $e) {
    http_response_code(500);
    echo json_encode(['fehler' => 'Loeschen fehlgeschlagen']);
}
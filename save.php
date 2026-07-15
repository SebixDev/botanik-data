<?php
declare(strict_types=1);
require 'db.php';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['fehler' => 'Methode nicht erlaubt']);
    exit;
}

$name = trim($_POST['name'] ?? '');

if ($name === '') {
    http_response_code(400);
    echo json_encode(['fehler' => 'Name darf nicht leer sein']);
    exit;
}

if (mb_strlen($name) > 255) {
    http_response_code(400);
    echo json_encode(['fehler' => 'Name ist zu lang']);
    exit;
}

try {
    $stmt = $conn->prepare("INSERT INTO pflanzen (name) VALUES (?)");
    $stmt->bind_param("s", $name);
    $stmt->execute();
    $id = $conn->insert_id;

    $stmt = $conn->prepare("SELECT erstellt_am FROM pflanzen WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $erstelltAm = $stmt->get_result()->fetch_assoc()['erstellt_am'];

    echo json_encode([
        'id'   => $id,
        'name' => $name,
        'zeit' => date('d.m.Y H:i', strtotime($erstelltAm)),
    ]);
} catch (mysqli_sql_exception $e) {
    http_response_code(500);
    echo json_encode(['fehler' => 'Speichern fehlgeschlagen']);
}
<?php
declare(strict_types=1);
require 'db.php';

$pflanzen = $conn->query("SELECT id, name, erstellt_am FROM pflanzen ORDER BY id ASC");
?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BotanikData</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>

    <div class="container">
        <button id="theme-toggle">Design umschalten</button>

        <h1>Pflanzenliste</h1>

        <div class="input-group">
            <label for="pflanzen-input" class="visually-hidden">Neue Pflanze</label>
            <input type="text" id="pflanzen-input" placeholder="Neue Pflanze..." maxlength="255" autocomplete="off">
            <button id="add-btn">Hinzufügen</button>
        </div>

        <p id="meldung" class="meldung" role="status"></p>

        <ul id="pflanzen-liste">
            <?php while ($row = $pflanzen->fetch_assoc()): ?>
                <li>
                    <span><?= htmlspecialchars($row['name']) ?></span>
                    <small><?= date('d.m.Y H:i', strtotime($row['erstellt_am'])) ?></small>
                </li>
            <?php endwhile; ?>
        </ul>

        <button id="clear-btn">Letzte Pflanze entfernen</button>
    </div>

</body>
</html>

<?php include 'db.php'; ?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BotanikData</title>
    <link rel="stylesheet" href="style.css?v=999">
</head>
<body>

    <div class="container">
        <button id="dark-mode-toggle">Design umschalten</button>
        
        <h2>Pflanzenliste</h2>
        
        <div class="input-group">
            <input type="text" id="todo-input" placeholder="Neue Pflanze...">
            <button id="add-btn">Hinzufügen</button>
        </div>

        <ul id="pflanzen-liste">
            <?php
            $result = $conn->query("SELECT * FROM pflanzen ORDER BY id ASC");
            if ($result && $result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo "<li><span>" . htmlspecialchars($row['name']) . "</span><small>" . htmlspecialchars($row['zeitstempel']) . "</small></li>";
                }
            }
            ?>
        </ul>
        
        <button id="clear-btn">Letzte Pflanze entfernen</button>
    </div>

    <script src="script.js"></script>

</body>
</html>

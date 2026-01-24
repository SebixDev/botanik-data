<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BotanikData</title>
    <link rel="stylesheet" href="style.css?v=1.1">
</head>
<body>

    <div class="container">
        <h2>Pflanzenliste</h2>
        <div class="input-group">
            <input type="text" id="todo-input" placeholder="Neue Pflanze...">
            <button id="add-btn">Hinzufügen</button>
        </div>

        <ul id="pflanzen-liste"></ul>
        
        <button id="clear-btn">Letzte Pflanze entfernen</button>
    </div>

    <script src="script.js"></script>
   
    <script>
    window.onload = function() {
        const meinInput = document.getElementById('todo-input');
        const meinButton = document.getElementById('add-btn');
        const meineListe = document.getElementById('pflanzen-liste');

        if (meinInput && meinButton && meineListe) {
            const pflanzeHinzufuegen = function() {
                const text = meinInput.value.trim();
                if (text !== "") {
                    const li = document.createElement('li');
                    li.textContent = text;
                    meineListe.appendChild(li);
                    meinInput.value = "";
                    meinInput.focus();
                }
            };

            meinInput.onkeydown = function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    pflanzeHinzufuegen();
                }
            };

            meinButton.onclick = function() {
                pflanzeHinzufuegen();
            };
        }
    };
</script>

</body>
</html>

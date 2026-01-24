    const meinInput = document.getElementById('todo-input');
    const meinButton = document.getElementById('add-btn');
    const meineListe = document.getElementById('pflanzen-liste');

    if (meinInput && meinButton && meineListe) {
        meinButton.onclick = function() {
            const text = meinInput.value.trim();
            if (text !== "") {
                const li = document.createElement('li');
                li.textContent = text;
                li.style.cursor = "pointer";
                
                li.onclick = function() {
                    wechselBild(this.textContent.toLowerCase());
                };
                
                meineListe.appendChild(li);
                meinInput.value = "";
                meinInput.focus();
            }
        };

        meinInput.onkeydown = function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                meinButton.click();
            }
        };
    }


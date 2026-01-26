document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.getElementById('add-btn');
    const clearBtn = document.getElementById('clear-btn');
    const input = document.getElementById('todo-input');
    const liste = document.getElementById('pflanzen-liste');

    function pflanzeHinzufuegen() {
        const text = input.value.trim();
        if (text !== "") {
            const jetzt = new Date();
            const zeit = jetzt.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

            const formData = new FormData();
            formData.append('text', text);
            formData.append('zeit', zeit);

            fetch('save.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                if (data.trim() === "Erfolg") {
                    const neuesLi = document.createElement('li');
                    neuesLi.innerHTML = `<span>${text}</span><small>${zeit}</small>`;
                    neuesLi.addEventListener('click', function() {
                        this.classList.toggle('done');
                    });
                    liste.appendChild(neuesLi);
                    input.value = ""; 
                    input.focus();
                }
            })
            .catch(error => console.error("Fehler:", error));
        }
    }

    if (addBtn) {
        addBtn.addEventListener('click', pflanzeHinzufuegen);
    }

    if (input) {
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                pflanzeHinzufuegen();
            }
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            if (liste && liste.lastElementChild) {
                liste.removeChild(liste.lastElementChild);
            }
        });
    }
});
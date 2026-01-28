document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.getElementById('add-btn');
    const clearBtn = document.getElementById('clear-btn');
    const input = document.getElementById('todo-input');
    const liste = document.getElementById('pflanzen-liste');
    const darkModeBtn = document.getElementById('dark-mode-toggle');

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }

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
                const dummyData = new FormData();
                dummyData.append('action', 'delete');

                fetch('delete.php', {
                    method: 'POST',
                    body: dummyData
                })
                .then(response => response.text())
                .then(data => {
                    if (data.trim() === "Erfolg") {
                        liste.removeChild(liste.lastElementChild);
                    }
                })
                .catch(error => console.error("Fehler beim Löschen:", error));
            }
        });
    }

    const bestehendeEintraege = document.querySelectorAll('#pflanzen-liste li');
    bestehendeEintraege.forEach(li => {
        li.addEventListener('click', function() {
            this.classList.toggle('done');
        });
    });
});
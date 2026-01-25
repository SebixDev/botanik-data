document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.getElementById('add-btn');
    const clearBtn = document.getElementById('clear-btn');
    const input = document.getElementById('todo-input');
    const liste = document.getElementById('pflanzen-liste');

    function pflanzeHinzufuegen() {
        const text = input.value.trim();
        if (text !== "") {
            const neuesLi = document.createElement('li');
            neuesLi.textContent = text;
            liste.appendChild(neuesLi);
            input.value = ""; 
            input.focus();    
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
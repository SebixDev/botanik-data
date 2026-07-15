const input      = document.getElementById('pflanzen-input');
const addBtn     = document.getElementById('add-btn');
const clearBtn   = document.getElementById('clear-btn');
const liste      = document.getElementById('pflanzen-liste');
const themeBtn   = document.getElementById('theme-toggle');
const meldungEl  = document.getElementById('meldung');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

themeBtn.addEventListener('click', () => {
    const istDunkel = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', istDunkel ? 'dark' : 'light');
});

function zeigeMeldung(text) {
    meldungEl.textContent = text;
    setTimeout(() => { meldungEl.textContent = ''; }, 3000);
}

function erstelleEintrag(name, zeit) {
    const li = document.createElement('li');

    const nameEl = document.createElement('span');
    nameEl.textContent = name;

    const zeitEl = document.createElement('small');
    zeitEl.textContent = zeit;

    li.append(nameEl, zeitEl);
    return li;
}

async function pflanzeHinzufuegen() {
    const name = input.value.trim();
    if (name === '') return;

    const formData = new FormData();
    formData.append('name', name);

    try {
        const response = await fetch('save.php', { method: 'POST', body: formData });
        const data = await response.json();

        if (!response.ok) {
            zeigeMeldung(data.fehler ?? 'Speichern fehlgeschlagen');
            return;
        }

        liste.appendChild(erstelleEintrag(data.name, data.zeit));
        input.value = '';
        input.focus();
    } catch (error) {
        console.error(error);
        zeigeMeldung('Server nicht erreichbar');
    }
}

async function letzteEntfernen() {
    if (!liste.lastElementChild) return;

    try {
        const response = await fetch('delete.php', { method: 'POST' });
        const data = await response.json();

        if (!response.ok) {
            zeigeMeldung(data.fehler ?? 'Löschen fehlgeschlagen');
            return;
        }

        if (data.geloescht) {
            liste.lastElementChild.remove();
        } else {
            zeigeMeldung(data.meldung);
        }
    } catch (error) {
        console.error(error);
        zeigeMeldung('Server nicht erreichbar');
    }
}

addBtn.addEventListener('click', pflanzeHinzufuegen);
clearBtn.addEventListener('click', letzteEntfernen);

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        pflanzeHinzufuegen();
    }
});
# BotanikData 🌱
 
Ein kleines Pflanzen-Verwaltungssystem mit PHP und MySQL. Einträge werden über ein Formular angelegt, dauerhaft in einer Datenbank gespeichert und ohne Neuladen der Seite in die Liste eingefügt.
 
> **Lernprojekt.** Ziel war es, den Weg der Daten vom Browser über PHP in die Datenbank und zurück einmal vollständig selbst zu bauen – mein erstes Projekt mit eigenem Backend.
 
**Status: Abgeschlossen am 16. Juli 2026**
 
## ✨ Features
 
- **Dauerhafte Speicherung:** Alle Einträge landen über PHP in einer MySQL-Datenbank und sind nach dem Neuladen weiterhin da.
- **Hinzufügen ohne Neuladen:** Das Formular schickt die Daten per `fetch` an das Backend, der neue Eintrag erscheint sofort in der Liste.
- **Automatischer Zeitstempel:** Datum und Uhrzeit setzt die Datenbank selbst (`DEFAULT CURRENT_TIMESTAMP`).
- **Löschfunktion:** Der letzte Eintrag lässt sich per Klick aus Liste und Datenbank entfernen.
- **Glassmorphism UI:** Transparenter Container mit Unschärfe-Effekt (`backdrop-filter`).
- **Animierter Sternenhintergrund:** Fallende Sterne, rein mit CSS-Gradienten und Keyframes.
- **Dark Mode:** Umschaltbar per Button, die Auswahl bleibt über `localStorage` erhalten.
## 🛠️ Technologie-Stack
 
- **Backend:** PHP 8 mit MySQLi und Prepared Statements
- **Datenbank:** MySQL / MariaDB
- **Frontend:** HTML5, CSS3 (Flexbox, Custom Properties, Keyframes), Vanilla JavaScript (ES6)
## 🗄️ Datenbank
 
```sql
CREATE TABLE IF NOT EXISTS pflanzen (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    erstellt_am DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```
 
## 🚀 Starten
 
1. Projekt in das `htdocs`-Verzeichnis von XAMPP legen, Apache und MySQL starten.
2. In phpMyAdmin die Datenbank `botanik-data` anlegen und `struktur.sql` importieren.
3. `db.example.php` zu `db.php` kopieren und die Zugangsdaten eintragen.
4. `http://localhost/botanik-data/` im Browser öffnen.
## 📚 Was ich dabei gelernt habe
 
- **Zeitstempel gehören in die Datenbank.** Anfangs hat das JavaScript die Uhrzeit mitgeschickt – abhängig von der Systemuhr des Nutzers, ohne Datum und als `VARCHAR` gespeichert, also nicht sortierbar. Mit `DATETIME DEFAULT CURRENT_TIMESTAMP` erledigt das die Datenbank, und im Frontend fällt Code weg.
- **Prepared Statements statt String-Verkettung.** Der Wert wird getrennt von der Abfrage übertragen und kann so gar nicht erst als SQL interpretiert werden.
- **Ausgaben immer maskieren.** Neue Einträge wurden per `innerHTML` in die Liste geschrieben – damit lässt sich HTML aus dem Eingabefeld einschleusen. `createElement` und `textContent` verhindern das.
- **Schreibende Aktionen brauchen POST.** `delete.php` hat auf jeden Aufruf hin gelöscht, auch beim reinen Öffnen der URL. Jetzt prüft das Skript die Request-Methode.
- **Zugangsdaten gehören nicht ins Repository.** Die echte `db.php` steht in der `.gitignore`, eingecheckt ist nur `db.example.php`.
---
 
Privates Lernprojekt, entwickelt für die lokale Ausführung mit XAMPP.
# BotanikData 🌱
 
Ein kleines Pflanzen-Verwaltungssystem mit PHP und MySQL. Einträge werden über ein Formular angelegt, dauerhaft in einer Datenbank gespeichert und ohne Neuladen der Seite in die Liste eingefügt.
 
> **Lernprojekt.** Ziel war es, den Weg der Daten vom Browser über PHP in die Datenbank und zurück einmal vollständig selbst zu bauen – mein erstes Projekt mit eigenem Backend.
 
**Status: Abgeschlossen am 29. Januar 2026**
 
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

 ---

Privates Lernprojekt, entwickelt für die lokale Ausführung mit XAMPP.
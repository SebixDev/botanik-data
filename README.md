BotanikData

BotanikData ist eine interaktive Web-Anwendung zur systematischen Verwaltung und Analyse von Pflanzenpflege-Daten. Das Tool hilft dabei, botanische Bestände digital zu erfassen und Pflegebedürfnisse (wie Gießen, Düngen oder Standortansprüche) übersichtlich darzustellen.

Kernfunktionen
Strukturierte Datenerfassung: Speicherung von Pflanzeninformationen (Name, Gattung, Pflege-Intervalle).

Dynamische Benutzeroberfläche: Automatische Aktualisierung der Listenansicht durch effiziente DOM-Manipulation.

Backend-Integration: Vorbereitung für eine persistente Speicherung der Daten mittels PHP und MySQL statt rein temporärer Client-Daten.

Filterung & Organisation: Übersichtliche Darstellung der Bestände für eine effiziente Alltagsplanung in der Pflanzenpflege.

Technische Umsetzung
Das Projekt nutzt ein modulares Grundgerüst, das auf moderne Web-Technologien und eine lokale Server-Umgebung setzt:

Server-Umgebung: Lokal gehostet via XAMPP (Apache Server).

Backend: PHP 8.x zur dynamischen Seitenausgabe und Vorbereitung der Datenbank-Kommunikation. (Migration von HTML auf PHP am 17.01.2026 erfolgt).

Datenbank: MySQL-Integration vorbereitet (SQL-Struktur für Pflanzen-Tabellen in Planung).

Frontend: HTML5 & CSS3 für ein responsives Design und klare Struktur.

Logik: JavaScript (ES6) zur Verarbeitung von Datenmodellen (Arrays/Objekte) und zur Steuerung der Benutzeroberfläche.

Installation & Entwicklung
Um das Projekt lokal zu bearbeiten:

Verschiebe den Projektordner in das Verzeichnis C:\xampp\htdocs\.

Starte das XAMPP Control Panel und aktiviere Apache sowie MySQL.

Rufe die Anwendung im Browser über http://localhost/botanik-data/ auf.

Roadmap
Zukünftige Erweiterungen und nächste Schritte:

Persistente Speicherung: Anbindung der MySQL-Datenbank zur dauerhaften Sicherung der Pflanzendaten.

CRUD-Funktionalität: Erstellen, Lesen, Aktualisieren und Löschen von Einträgen direkt über das Web-Interface.

Suchfunktion: Effiziente Volltextsuche innerhalb großer botanischer Bestände.

Erinnerungs-System: Logik zur Berechnung und Anzeige anstehender Pflegeaufgaben
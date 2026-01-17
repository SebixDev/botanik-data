-- Bauplan für die Botanik-Datenbank
CREATE TABLE pflanzen (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    art VARCHAR(100),
    beschreibung TEXT,
    eingetragen_am TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
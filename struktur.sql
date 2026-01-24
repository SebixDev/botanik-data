CREATE TABLE pflanzen (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    art VARCHAR(100),
    standort VARCHAR(100),
    lichtbedarf ENUM('Sonne', 'Halbschatten', 'Schatten'),
    giessintervall_tage INT,
    letztes_giessen DATE,
    naechstes_umtopfen DATE,
    ist_giftig BOOLEAN DEFAULT FALSE,
    beschreibung TEXT,
    eingetragen_am TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
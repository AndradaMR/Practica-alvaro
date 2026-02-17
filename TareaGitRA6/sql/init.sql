-- TICKET A: Error de sintaxis en la definición de la tabla
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL, -- Añadida coma faltante
    email VARCHAR(100) UNIQUE NOT NULL,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mensaje TEXT
);

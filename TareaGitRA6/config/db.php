<?php
// ERROR DE SEGURIDAD: Credenciales expuestas
// El equipo debe eliminar este archivo del historial de Git
define('DB_HOST', '192.168.1.100');
define('DB_NAME', 'prod_intermodular');
define('DB_USER', 'admin_root');
define('DB_PASS', 'P@ssw0rd_Secret_2026!'); 

$conexion = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
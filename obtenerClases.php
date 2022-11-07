<?php 
require 'config/database.php';

function obtenerClases() {
    // Traer información de las clases en la DB.
$db = conectarDB();

$query = "SELECT * FROM usuario";
$resultado = mysqli_query($db, $query);
$rows = array();
while($r = mysqli_fetch_assoc($resultado)) {
    $rows[] = $r;
}
print $json = json_encode($rows); // Convert php date to json data 

return $json;
}


<?php

function conectarDB() {
    $db = mysqli_connect('localhost', 'root', 'root', 'cnotes');
    
    if($db) {
        echo "<pre>";
        echo "Se conectó";
        echo "</pre>";
    } else {
        echo "No se conectó";
    }
    return $db;
}
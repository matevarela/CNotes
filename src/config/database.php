<?php

function conectarDB() {
    $db = mysqli_connect('localhost', 'root', 'root', 'cnotes');
    if($db) {
        echo "Se conectó";
    } else {
        echo "No se conectó";
    }

}
class Robot {
    // row columnas
    constructor(pos_row = 0, pos_col = 0, direc = 180) {
        this.pos_row = 0;
        this.pos_col = 0;
        this.direc = 180;
    }

    getPosition() {
        return this.pos_row + " " + this.pos_col;
    }

    getCol() {
        return this.pos_col;
    }

    getRow() {
        return this.pos_row;
    }

    getDirec() {
        return this.direc;
    }

    girar(entrada) {
        switch (entrada) {
            case "I":
                this.direc -= 90
                break;

            case "R":
                this.direc = this.direc;
                break;

            case "D":
                this.direc += 90
                break;

            case "X":
                this.direc = "Trampa";
        }
    }

    avanzar(direc) {
        switch (direc) {
            case 0 || 360:
                this.pos_row = this.pos_row - 1;
                break;

            case 90:
                this.pos_col = this.pos_col + 1;
                break;

            case 180:
                this.pos_row = this.pos_row + 1;
                break;

            case 270:
                this.pos_col = this.pos_col - 1;

        }
    }

}

var robot1 = new Robot();



var cubes = [
    ["R", "D", "R", "D", "D", "R"],
    ["R", "D", "I", "D", "D", "R"],
    ["R", "D", "D", "D", "D", "R"],
    ["R", "D", "D", "D", "D", "R"],
    ["R", "D", "D", "D", "R", "R"],
    ["R", "D", "D", "D", "R", "R"],
    ["R", "D", "D", "D", "R", "R"],
    ["R", "D", "D", "D", "R", "R"],


];

function jugar(robot, tablero) {

    var res = "El robot ha salido del tablero";

    var avances = 0;

    do {
        robot.girar(tablero[robot.getRow()][robot.getCol()]);

        robot.avanzar(robot.getDirec());

        avances++;

    }
    // Hago así la condicion del while porque si pongo directamente el typeof tablero[robot.getRow()][robot.getCol()] !== 'undefined')
    // cuando el row no existe como lo comprueba primero antes que el column, da un exceptión de que ese row no existe y no puede hacer la comprobacion del column
    // con algo que no existe
    while (typeof tablero[robot.getRow()] !== 'undefined' &&
        typeof tablero[robot.getRow()][robot.getCol()] !== 'undefined' &&
        tablero[robot.getRow()][robot.getCol()] !== 'X' &&
        avances < 50);

    // Para que no de error al comprobar si tablero[robot.getRow()][robot.getCol()] === 'X' 
    // primero hago un if para comprobar si la fila no existe y si es asi hago que no llegue a hacer 
    // la comprobación de la trampa
    if (typeof tablero[robot.getRow()] === 'undefined') {

    } else if (tablero[robot.getRow()][robot.getCol()] === 'X') {
        res = "El robot ha caido en una trampa ";
    }

    if (avances == 50) {
        res = "El ha entrado en bucle y nunca saldrá ";

    }
    console.log(robot1.getPosition());
    return res;
    // return robot.getPosition();
}


console.log(jugar(robot1, cubes));
// imprimirArray();





function imprimirArray() {
    for (var i = 0; i < cubes.length; i++) {

        for (var j = 0; j < cubes[i].length; j++) {
            console.log("cube[" + i + "][" + j + "] = " + cubes[i][j]);
        }
    }
}


// const lib = require('readline');

// const interface1 = lib.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });




// interface1.question('Como te llamas?', (res) => {

//     // console.log(iniciar(16, 9));

//     imprimirArray();


//     interface1.close();
// })





function iniciar(columnas, filas) {

    var posicion_inicial = Math.floor((Math.random() * (columnas * filas)) + 1);

    var i = 0,
        _size = columnas * filas,
        output = '';
    for (; i < _size; i++) {
        // add a new line if we need two
        if (i % columnas === 0) {
            output = output + '\n';
        } else if (i === posicion_inicial) {
            output = output + '*'

        } else {
            output = output + 'R';

        }

    }
    // append a new line at the end for proper formatting.
    return output + '\n'

}
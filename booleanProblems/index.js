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





const lib = require('readline');

var input_rows;
var input_cols;
var input_rowStart;
var input_colStart;
var input_direc;

const interface1 = lib.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface1.question('Introduce rows', (res) => {

    input_rows = res;


    interface1.close();
})



var robot1 = new Robot();

var cubes = [
    ["I", "D", "R", "D", "D", "R", "R", "D", "R", "D", "D", "R"],
    ["I", "D", "I", "D", "I", "R", "R", "D", "R", "D", "D", "R"],
    ["R", "I", "D", "R", "X", "R", "R", "D", "R", "D", "D", "R"],
    ["R", "I", "I", "R", "D", "R", "R", "D", "R", "D", "D", "R"],
    ["I", "R", "R", "D", "R", "X", "R", "D", "R", "D", "D", "R"],
    ["R", "X", "D", "R", "D", "X", "R", "D", "R", "D", "D", "R"],
    ["R", "D", "X", "I", "R", "X", "R", "D", "R", "D", "D", "R"],
    ["R", "D", "D", "D", "D", "R", "R", "D", "R", "D", "D", "R"],
    ["R", "I", "I", "R", "D", "R", "R", "D", "R", "D", "D", "R"],
    ["I", "R", "R", "D", "R", "X", "R", "D", "R", "D", "D", "R"],
    ["R", "X", "D", "R", "D", "X", "R", "D", "R", "D", "D", "R"],
    ["R", "D", "X", "I", "R", "X", "R", "D", "R", "D", "D", "R"],
    ["R", "D", "D", "D", "D", "R", "R", "D", "R", "D", "D", "R"],
    ["R", "I", "I", "R", "D", "R", "R", "D", "R", "D", "D", "R"],
    ["I", "R", "R", "D", "R", "X", "R", "D", "R", "D", "D", "R"],
    ["R", "X", "D", "R", "D", "X", "R", "D", "R", "D", "D", "R"],
    ["R", "D", "X", "I", "R", "X", "R", "D", "R", "D", "D", "R"],
    ["R", "D", "D", "D", "D", "R", "R", "D", "R", "D", "D", "R"],
    ["R", "I", "I", "R", "D", "R", "R", "D", "R", "D", "D", "R"],
    ["I", "R", "R", "D", "R", "X", "R", "D", "R", "D", "D", "R"],
    ["R", "X", "D", "R", "D", "X", "R", "D", "R", "D", "D", "R"],
    ["R", "D", "X", "I", "R", "X", "R", "D", "R", "D", "D", "R"],
    ["R", "D", "D", "D", "D", "R", "R", "D", "R", "D", "D", "R"]
];

function jugar(robot, tablero) {

    var res = "Sale";

    var movimientos = 0;

    do {
        robot.girar(tablero[robot.getRow()][robot.getCol()]);

        robot.avanzar(robot.getDirec());

        movimientos++;

    }
    // Hago así la condicion del while porque si pongo directamente el typeof tablero[robot.getRow()][robot.getCol()] !== 'undefined')
    // cuando el row no existe como lo comprueba primero antes que el column, da un exceptión de que ese row no existe y no puede hacer la comprobacion del column
    // con algo que no existe
    while (typeof tablero[robot.getRow()] !== 'undefined' &&
        typeof tablero[robot.getRow()][robot.getCol()] !== 'undefined' &&
        tablero[robot.getRow()][robot.getCol()] !== 'X' &&
        movimientos < 100);

    // Para que no de error al comprobar si tablero[robot.getRow()][robot.getCol()] === 'X' 
    // primero hago un if para comprobar si la fila no existe y si es asi hago que no llegue a hacer 
    // la comprobación de la trampa
    if (typeof tablero[robot.getRow()] === 'undefined') {

    } else if (tablero[robot.getRow()][robot.getCol()] === 'X') {
        res = "Explota";
    }

    if (movimientos == 100) {
        res = "No sale";

    }
    console.log(movimientos);
    console.log(robot1.getPosition());
    return res;
    // return robot.getPosition();
}


console.log(jugar(robot1, cubes));

function imprimirArray() {
    for (var i = 0; i < cubes.length; i++) {

        for (var j = 0; j < cubes[i].length; j++) {
            console.log("cube[" + i + "][" + j + "] = " + cubes[i][j]);
        }
    }
}
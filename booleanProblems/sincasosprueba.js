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

    setPosition(row, col) {
        this.pos_row = row;
        this.pos_col = col;
    }

    setDirec(dir) {
        this.direc = dir;
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
            case 0:
            case 360:
                this.pos_row = this.pos_row - 1;
                break;

            case 90:
            case -270:
                this.pos_col = this.pos_col + 1;
                break;

            case 180:
            case -180:
                this.pos_row = this.pos_row + 1;
                break;

            case 270:
            case -90:
                this.pos_col = this.pos_col - 1;

        }
    }

}

var robot1 = new Robot();

function jugar(robot, tablero) {

    var res = "Sale";

    var movimientos = 0;

    do {
        robot.girar(tablero[robot.getRow()][robot.getCol()]);

        // controlo que si la dirección llega a 360 o -360
        if (robot.getDirec == 360 || robot.getDirec == -360) {
            robot.setDirec(0);
        }


        robot.avanzar(robot.getDirec());

        movimientos++;

    }
    // Hago así la condicion del while porque si pongo directamente el typeof tablero[robot.getRow()][robot.getCol()] !== 'undefined')
    // cuando el row no existe como lo comprueba primero antes que el column, da un exceptión de que ese row no existe y no puede hacer la comprobacion del column
    // con algo que no existe
    while (typeof tablero[robot.getRow()] !== 'undefined' &&
        typeof tablero[robot.getRow()][robot.getCol()] !== 'undefined' &&
        tablero[robot.getRow()][robot.getCol()] !== 'X' &&
        movimientos < 1000000);

    // Para que no de error al comprobar si tablero[robot.getRow()][robot.getCol()] === 'X' 
    // primero hago un if para comprobar si la fila no existe y si es asi hago que no llegue a hacer 
    // la comprobación de la trampa
    if (typeof tablero[robot.getRow()] === 'undefined') {

    } else if (tablero[robot.getRow()][robot.getCol()] === 'X') {
        res = "Explota";
    }

    if (movimientos == 1000000) {
        res = "No sale";

    }
    console.log("MOVIMIENTOS:  " + movimientos);
    console.log("Posicion FINAL:  " + robot1.getPosition());
    return res;
    // return robot.getPosition();
}


var input_rows = 0;
var input_cols = 0;
var linea_actual = 0;
// las lineas_maximas luego seran iguales al primer numero que se introduce por el input que serán el numero de rows 
var lineas_maximas = 0;
var tablero_input = [];
// la siguiente variable la usare solo cuando esté en las lineas donde se "dibuja el tablero por teclado"
var rowActual_dibujarTablero = 0;

var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);



rl.on('line', function(res) {

    // si es la primera linea que me entre aquí
    if (linea_actual == 0) {

        //cojo la primera linea de  datos que recibo por teclado y lo paso de string a array 
        var size = res.split(" ");

        if (size.length !== 2) {
            console.log("En esta linea tienes que añadir la fila la columna  cada cosa separada por un espacio ")
            process.exit(0);

        }
        // la primera posicion del array sera la fila y la segunda la col
        input_rows = size[0];
        input_cols = size[1];
        if (input_rows > 60) {
            console.log("La cantidad de filas no puede ser >60 ")
            process.exit(0);
        }
        if (input_cols > 60) {
            console.log("La cantidad de columnas no puede ser >60 ")
            process.exit(0);
        }
        // las lineas maximas seran igual a las filas + 1 ya que necesitare que sea dinamica
        // para poder dibujar el tablero segun las filas que vaya a tener y el +1 es para la linea final
        // donde se introducirá la posicion y la direccion del robot 
        lineas_maximas = parseInt(input_rows) + 1;

    }

    // si no es ni la primera ni la última linea que me entre aquí
    if (linea_actual != 0 && linea_actual != lineas_maximas) {

        // cojo lo que se introduce por teclado que en estas lineas será el "dibujo del tablero"
        // ej: RRXIR
        // esta cadena de string cojo cada caracter introducido y lo meto en el array tableroInput_filaActual
        var tableroInput_filaActual = res.split("");

        // controlo que el array que se crea a partir de los caracteres que tiene la linea no sea superior
        // a la cantidad de columnas que se ha indicado en la primera linea que tendrá
        if (tableroInput_filaActual.length != input_cols) {
            console.log("Error: Estas introduciendo un numero diferente columnas de las que has indicado que tendrá el tablero");
            process.exit(0);

        }

        // cojo la fila de la matriz tablero definido arriba que coindice con la posicion del row que se introudce por teclado
        // ej: si la linea de dibujo el tablero es la primera , cogere la posicion tablero[0] de la matriz
        // con esta posición de la matriz que he cogido crearé un array dentro , con la cantidad de posiciones
        // igual a la cantidad de columnas que tiene la fila actual del tablero que he introducido por teclado
        // ej: si introduzco XRRXI crearé un array, dentro de la posicion que cojo de la matriz, de 5 posiciones
        tablero_input[rowActual_dibujarTablero] = new Array(tableroInput_filaActual.length);

        // recorro el array una cantidad de veces igual a la cantidad de columnas introducidas en la linea actual que introduzco por teclado
        // ej: si introduzco XRR el for se hará 3 veces
        for (var j = 0; j < tableroInput_filaActual.length; j++) {
            //voy rellenando la matriz tablero en la posicion actual con los datos de cada carácter introducido
            tablero_input[rowActual_dibujarTablero][j] = tableroInput_filaActual[j].toUpperCase();
        }

        rowActual_dibujarTablero++;
    }


    // Si es la ultima linea que me entre aqui
    if (linea_actual == lineas_maximas) {

        // en la ultima linea introduciré la posición inicial del robot y su dirección inicial
        var datos_ultimaLinea = res.split(" ");
        if (datos_ultimaLinea.length != 3) {
            console.log("En esta linea tienes que añadir la fila la columna y la direccion como punto cardinal, cada cosa separada por un espacio ")
            process.exit(0);

        }
        // el -1 lo hago porque como los arrays empiezan por 0 , para al introducir 1 por teclado en la pos ini
        // que el programa lo coja como 0
        var pos_inicialR = parseInt(datos_ultimaLinea[0]) - 1;
        var pos_inicialC = parseInt(datos_ultimaLinea[1]) - 1;

        //controlo que exista en el tablero la posicion inicial que se le da al robot
        if (typeof tablero_input[pos_inicialR] == 'undefined') {
            console.log("Esa fila que le das a la pos inicial del robot no existe. ")
            process.exit(0);
        }
        if (typeof tablero_input[pos_inicialR][pos_inicialC] == 'undefined') {
            console.log("Esa columna que le das a la pos inicial del robot no existe. ")
            process.exit(0);
        }

        // le doy posicion y direccion al robot 
        robot1.setPosition(pos_inicialR, pos_inicialC);

        // transformo la pos de la ultima linea en mayuscula
        var puntoCardinal_inicial = datos_ultimaLinea[2].toUpperCase();
        // tranformo N , E , O , S en los grados correspondientes antes de hacerle el set al robot
        switch (puntoCardinal_inicial) {
            case 'N':
                robot1.setDirec(0);
                break;
            case 'E':
                robot1.setDirec(90);
                break;
            case 'S':
                robot1.setDirec(180);
                break;
            case 'O':
                robot1.setDirec(270);
                break;
        }
        console.log("POSICION INICIAL :  " + robot1.getPosition());

        console.log(jugar(robot1, tablero_input));
        process.exit(0);

    }
    linea_actual++;

}).on('close', function() {
    console.log('¡Que tengas un gran día!');
    process.exit(0);
});
var input_rows = 0;
var input_cols = 0;
var posicionRobot_row = 0;
var posicionRobot_col = 0;
var direccion_robot = "S";
var linea_actual = 0;
// las lineas_maximas luego seran iguales al primer numero que se introduce por el input que serán el numero de rows 
var lineas_maximas = 0;
var tablero = [];
// la siguiente variable la usare solo cuando esté en las lineas donde se "dibuja el tablero por teclado"
var rowActual_dibujarTablero = 0;


var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);



rl.on('line', function(res) {

    // si es la primera linea que me entre aquí
    if (linea_actual == 0) {

        //cojo la primera linea de  datos que recibo por teclado y lo paso de string a array 
        var size = res.split(" ");
        // la primera posicion del array sera la fila y la segunda la col
        input_rows = size[0];
        input_cols = size[1];
        // las lineas maximas seran igual a las filas + 1 ya que necesitare que sea dinamica
        // para poder dibujar el tablero segun las filas que vaya a tener y el +1 es para la linea final
        // donde se introducirá la posicion y la direccion del robot 
        lineas_maximas = parseInt(input_rows) + 1;

    }

    // si no es ni la primera ni la última linea que me entre aquí
    if (linea_actual != 0 && linea_actual != lineas_maximas) {

        // cojo lo que se introduce por teclado que en estas lineas será el "dibujo del tablero"
        // ej: RRXIR
        // esta cadena de string cojo cada caracter introducido y lo meto en el array tablero_filaActual
        var tablero_filaActual = res.split("");

        // cojo la fila de la matriz tablero definido arriba que coindice con la posicion del row que se introudce por teclado
        // ej: si la linea de dibujo el tablero es la primera , cogere la posicion tablero[0] de la matriz
        // con esta posición de la matriz que he cogido crearé un array dentro , con la cantidad de posiciones
        // igual a la cantidad de columnas que tiene la fila actual del tablero que he introducido por teclado
        // ej: si introduzco XRRXI crearé un array, dentro de la posicion que cojo de la matriz, de 5 posiciones
        tablero[rowActual_dibujarTablero] = new Array(tablero_filaActual.length);

        // recorro el array una cantidad de veces igual a la cantidad de columnas introducidas en la linea actual que introduzco por teclado
        // ej: si introduzco XRR el for se hará 3 veces
        for (var j = 0; j < tablero_filaActual.length; j++) {
            //voy rellenando la matriz tablero en la posicion actual con los datos de cada carácter introducido
            tablero[rowActual_dibujarTablero][j] = tablero_filaActual[j];
        }

        rowActual_dibujarTablero++;
    }


    // Si es la ultima linea que me entre aqui
    if (linea_actual == lineas_maximas) {

        var datos_ultimaLinea = res.split(" ");

        posicionRobot_row = datos_ultimaLinea[0];
        posicionRobot_col = datos_ultimaLinea[1];
        direccion_robot = datos_ultimaLinea[2];
        console.log("RobotRow: " + posicionRobot_row + " RobotCol: " + posicionRobot_col + " Dir: " + direccion_robot);

        function imprimirArray() {
            for (var i in tablero) {
                console.log("row " + i);
                for (var j in tablero[i]) {
                    console.log(" " + tablero[i][j]);
                }
            }
        }
        imprimirArray();
        process.exit(0);
    }
    linea_actual++;

    // rl.prompt();
}).on('close', function() {
    console.log('¡Que tengas un gran día!');
    process.exit(0);
});
class Robot {
    // row columnas
    constructor() {
        this.pos_row = 0;
        this.pos_col = 0;
        this.direc = 180;
        this.posGuardadas = [];
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

    guardarPos(row, col, direc) {
        this.posGuardadas.push(row);
    }

}

var robot1 = new Robot();

var row = robot1.getRow();
var col = robot1.getCol();
var direc = robot1.getDirec();

console.log(row.toString() + col.toString() + direc.toString());
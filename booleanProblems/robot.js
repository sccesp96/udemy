 class Robot {
     // row columnas
     constructor() {
         this.pos_row = 0;
         this.pos_col = 0;
         this.direc = 180;
         this.posGuardadas = [];
         this.posDir = "";
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
         // hago que si es 360 o -360 pase a 0 así nunca se saldra de los grados de una circunferencia
         if (this.direc == 360 || this.direc == -360) {
             this.direc = 0;
         }
         return this.direc;
     }

     setPosition(row, col) {
         this.pos_row = row;
         this.pos_col = col;
     }

     setDirec(entrada) {
         this.direc = entrada;
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

     guardarPos(pos) {
         for (var i = 0; i < this.posGuardadas.length; i++) {
             // si el parametro coincide con algun valor que hay en el array posguardadas
             // pongo la variable bucle en true
             if (this.posGuardadas[i] === pos) {
                 robot_bucle = true;
             }
         }
         this.posGuardadas.push(pos);

     }


 }
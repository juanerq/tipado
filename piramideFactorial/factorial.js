/*
Cree un programa que imprima una piramide de los numeros factoriales terminando en el que diga el usuario
Ejemplo: entrada 6
0! = 1
1! = 1 = 1
2! = 1 x 2 = 2
3! = 1 x 2 x 3 = 6
4! = 1 x 2 x 3 x 4 = 24
5! = 1 x 2 x 3 x 4 x 5 = 120
6! = 1 x 2 x 3 x 4 x 5 x 6 = 720
*/

let repetidor = parseInt(prompt("Cuantas veces quiere que se repita la secuencia"));
let contenedor = 1;
let multiplicacion = 1;


for(let i = 0; i <= repetidor; i++){
    document.write(`${i}! = `)

    for(let j = 1; j <= i; j++){
        multiplicacion = contenedor * j;
        contenedor = multiplicacion;
    
        if(j == i){
            document.write(` ${j} = `);
        }else{
            document.write(` ${j} x`);
        }
    }
    contenedor = 1;
    document.write(`${multiplicacion}<br />`)
}



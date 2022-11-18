/* Prompts para comprobación manual de los años bisisestos
let n1=prompt("Introduce el año 1:");
let n2=prompt("Introduce el año 2:");
*/
function isLeapYear(num1,num2){
    //Inicializamos array vacio para almacenar años bisiestos
    //Almacenamos year1 el valor del parametro 1 y en year 2 el valor del parametro 2
    let savedYears=[];
    let year1=num1;
    let year2=num2;
    //Si se cumple que el valor de los paramatros num1 y num 2 esta en los valores 2001 y 2050 (ambos incluidos)
    if (num1>=2001 && num1<=2500 && num2>=2001 && num2<=2500){
        //Con Math.round lo redondeamos en el caso de que se un float
        year1=Math.round(year1);
        year2=Math.round(year2);
        console.log(typeof year1);
        console.log(typeof year2);
    }
    else{
        return alert("Solo número entre 2001 y 2500");
    }
    /*Recorremos desde el valor del parametro 1 hasta el valor del parametro 2,
    si es el resto de la divison del numero x entre 4 es 0 lo añadimos al array
    lo mismo si el resto es 0 entre 100 y a la vez entre 4
    */

    for (let x=parseInt(year1);x<=parseInt(year2);x++){
        if (x%4==0){
            savedYears.push(x);
        }
        if (x%100==0 && x%4==0){
            savedYears.push(x);
        }
    }
    //Convertimos el array en string con .join e indicamos que los separe con comas en el parametro del metodo
    savedYears=savedYears.join(",");
    document.write(savedYears);
    return savedYears;
}
isLeapYear(2001.1,2045.2)
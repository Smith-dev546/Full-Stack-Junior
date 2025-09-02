//Peticiones Asincronas

/* 
    LAS PROMESAS TIENEN 3 ESTADOS


    PENDING --> TODAVIA NO HAY UNA RESPUESTA

    RESPONSE (resolve) --> SI LA PROMESA SE CUMPLIO

    REJECTER--> RECHAZA LA PROMESA, NO SE CUMPLIO
*/

console.log("Holiwis");

//SImular una peticion a una API

function getCoach(id){ 
    return new Promise( (resolve, reject) => { 
    setTimeout(() => { 
        if ( id === 1){
            resolve({id: 1, name: "Jairo"});
        } else {
            reject("No se encontro ese coach");
        }
    },2000  )


    })
}

//console.log(getCoach(1));

//Manejo de Asincronismo o promesas

// Then (Da las buenas nocticias) y catch (Da las malas noticias)
function traerDatos(){

    getCoach(1)
    .then( (data) =>{
        console.log(data);
    })

    .catch( (error) =>{
        console.error(error);
        
    });
}
//traerDatos();



//Async y await
async function obtenerDatos(){
    try{
    const coach = await getCoach(2);
    console.log(coach);

    }catch(error) {
        console.log(error);
    }
}

//obtenerDatos();

//FETCH --> Va a ser nuestro metodo(interfaz) para hacer peticiones HTTP

async function getDittoAwait(){
    try{    // MANEJO DE ERRORES
         let respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')     //ESPERA A TRAER LA RESPUESTA
    console.log(respuesta);                     //Ver que respuesta nos da la API
        let cuerpo = await respuesta.json();    //Obtenemos el CUERPO de esa respuesta anterior
    console.log(cuerpo);                        //Mostrar el cuerpo, ahi estan los datos
        
    } catch(error){     // MANEJO DE ERRORES
        console.error(error);
    }
}
//getDittoAwait();

function getDittoThen(){
    fetch('https://pokeapi.co/api/v2/pokemon/ditto') //Buscar los datos en la API
    .then((data) =>{                // Decimos a JS que espere a que vuelva a la respuesta
        console.log(data);          //Nos va a dar meta datos
        return data.json();         // Retornar la data para usarla despues, SOLO EL BODY EN TIPO JSON
    })
    .then( (data) => {              //Voy a utilizar el body que retorne antes
        console.log(data);          //MUESTRO EL CUERPO, AHI ESTAN LOS DATOS
    })
    .catch( (error) => {
        console.log(error);
    })
    
}
//getDittoThen();

function saludar(){
    console.log("Holiwis")
}
/*function getCoach(){
    new Promise( (resolve, rejecter) => {
        resolve({id: 1, name: "Smith"})
    })
}
    */
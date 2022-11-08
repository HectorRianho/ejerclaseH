var array;

function arraymulti(){
    array = [{username: "hector", cod:"192112", doc:"12345", tipouser:"estudiante"},
    {username: "riaño", cod:"192112", doc:"12345", tipouser:"estudiante"},
    {username: "lopez", cod:"192112", doc:"12345", tipouser:"estudiante"}
]
    let fecha= new Date()
    var minutos = fecha.getMinutes();
    console.log(minutos);
}

function compara(){
    var nombre = $("#nombre").val()
    for(let i=0;i<array.length;i++){
        if(nombre==array[i].username){
            console.log("el nombre si existe");
        }else{
            console.log("no existe");
        }
    }
}


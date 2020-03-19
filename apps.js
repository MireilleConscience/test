const Usuario = require('./Usuario');

const fs = require('fs');

let usuario = new Usuario('Maria', 'maria.calman@orange.fr', '1235678');

const contenido = fs.readFileSync('datos.json','utf8');

let listaUsuarios = [];
let encontrado = null;

if(contenido.length != 0){
   
    listaUsuarios = JSON.parse(contenido);

    /*for (let i=0; i< listaUsuarios.length && !encontrado; i++){
        
        if (listaUsuarios[i].email == usuario.email){
            console.log('Un usuario ya existe con este mail: ' + listaUsuarios[i].email  );
            encontrado = true;
        }
    }*/
    encontrado = listaUsuarios.find(function(usuarioEnArray){
        return usuarioEnArray.email == usuario.email;
    });
    
}

if(!encontrado){
    listaUsuarios.push(usuario);
    let usuarioConvertidoJSON= JSON.stringify(listaUsuarios,null,' ');
    fs.writeFileSync('datos.json',usuarioConvertidoJSON);
} else{
    console.log('Un usuario ya existe con este mail' );
}



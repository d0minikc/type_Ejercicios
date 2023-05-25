
// OBJETOS COMO PARTE DE UNA FUNCION

function imprimirDatos(
    data: {
        userName: string,
        email: string,
    }): void
    {
        console.log(`Tu nombre de usuario es: ${data.userName}, y el Email registrado es: ${data.email}`);
    }
    imprimirDatos({userName:"JuanitoProGamer", email:"JuanitoProGamer"})

// OBJETOS COMO TIPOS

type userData = {
    nombre: string,
    edad: number,
    email: string,
    telefono: string
};

let userList : userData[] = [];

userList.push({
    nombre: "Fernando",
    edad: 19,
    email: "nando@yavirac.edu.ec",
    telefono: "0979257143"
});

userList.push({
    nombre: "Montoya",
    edad: 12,
    email: "montoya@yavirac.edu.ec",
    telefono: "0983379613"
});

console.log(userList[0]);

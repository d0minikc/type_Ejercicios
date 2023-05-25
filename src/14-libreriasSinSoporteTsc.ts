//librerias sin soportadas por TSC

import _ from 'lodash'

const data =[
  {
    user: "Dominic",
    role : "Estudiante"
  },
  {
user : "Jose",
role : "Estudiante"
  },
  {
user : "Diego",
role : "Docente"
  },
  {
user : "Hernan",
role : "Docente"
  },
  {
user : "Naim",
role : "Estudiante"
  },
  {
user : "Esteban",
role : "Estudiante"
  },
  {
user : "Andres",
role : "Estudiante"
  },
  {
 user : "Pablo",
 role : "Estudiante"
  },
  {
 user : "Jose",
 role : "Estudiante"
  },

]
console.log(data);
console.log(_.chunk(data, 2)[2]);

const rta = _.groupBy(data, (item) => (item.role))
console.log(rta)


const ejemplo = _.join(data, '/');
console.log(ejemplo)


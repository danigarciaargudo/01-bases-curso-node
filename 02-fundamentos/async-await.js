// let getNombre = () =>{
//     return new Promise((resolve, reject)=> {
//         resolve('Fernando')
//     })
// }

let getNombre = async() => {
    return 'Fernando';
}

getNombre().then(nombre => {
    console.log(nombre);
}).catch(error => {
    console.log('ERROR ASYNC: ' + error);
})

console.log(getNombre());
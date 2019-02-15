console.log('Inicio...');

setTimeout(function() {
    console.log('Primera timeOut');
}, 3000);

setTimeout(function() {
    console.log('Segundo timeOut');
}, 0);
setTimeout(function() {
    console.log('Tercer timeOut');
}, 0);

console.log('Fin del programa.');
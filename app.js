
const argv = require('yargs')
            .command('listar','Imprime en consola la tabla de multiplicar',{
                base:{
                    demand: true,
                    alias: 'b'
                },
                limite:{
                    alias: 'l',
                    default: 10
                }
            })
            .help()
            .argv;

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);//.then(imprimir => console.log(`Listado de la tabla: ${ imprimir}`));
        console.log('Listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${ archivo }`))
        .catch(err => console.log(err));
        console.log('Crear');
        break;
    default:
        console.log('Comando no definido');
}


//let argv2 = process.argv;

//console.log(argv.base);
//console.log( 'límiTE:  ',argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];



//console.log(multiplicar);



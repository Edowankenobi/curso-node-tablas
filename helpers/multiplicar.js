const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listarConsola = false, hasta = 10) => {
    
    try {
        let salida = "";
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}`;
            if (i < hasta) {
                salida += `\n`; //Inserta salto de linea a la fila escrita
            }
        }
        if (listarConsola === true) {
            
            console.log("==============================".red.bgMagenta);
            console.log(`     Tabla del ${base}`.bgBlack);
            console.log("==============================".red.bgMagenta);    
            console.log(salida.yellow.bgBlack);
        }
        
      // fs.writeFile(`tabla-${base}.txt`, salida, (err) =>{
      //     if (err) throw err;
    
      //     console.log(`Archivo con la tabla del ${base} creado`);
    
      // })
        
        const nombreArchivo = `./salida/tabla-${base}.txt`

        fs.writeFileSync( nombreArchivo, salida);
        //console.log(`Archivo con la tabla del ${base} creado`);
        
        return nombreArchivo;

    } catch (error) {
        throw error;
    }
};

module.exports = {
    crearArchivo
}
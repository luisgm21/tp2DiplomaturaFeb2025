import path from 'path'

// Definir ruta de archivo de ejemplo
const filePath = './data/example.txt';

// Obtener el directorio base 
const dirname = path.dirname(filePath);
console.log('Directorio base:', dirname);

// Obtener nombre del archivo sin extension
const baseName = path.basename(filePath,'.txt');
console.log('Nombre del archivo:', baseName);

// Obtener la extension del archivo
const extName = path.extname(filePath);
console.log('Extension del archivo:', extName);

// Crear una ruta unida 
const newPath = path.join('/user','docs','newfile.txt');
console.log('Nueva ruta:', newPath);



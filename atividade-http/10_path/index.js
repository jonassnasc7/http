const path = require('path')

// const diretorio = '/relatorios/semanal/arquivo.pdf'

// console.log(path.dirname(diretorio))
// console.log(path.basename(diretorio))
// console.log(path.extname(diretorio))

console.log(path.resolve('teste.txt'))

// Formatar path
const pasta ='relatorios'
const arquivo = 'jonas.txt'

const diretorioFinal = path.join('/', 'arquivos', pasta, arquivo) 
console.log(diretorioFinal)
const fs = require('fs')

const filePath = '/relatorios/arquivos/jonas.txt'

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.log('Erro ao ler o arquivo:', err)
        return
    }
    console.log('Conteúdo do arquivo:')
    console.log(data)
})
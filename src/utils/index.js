const http = require('http');
const fs = require('fs/promises');

const path = require('path')
const pathFile = path.resolve(__dirname, "..", "assets", "scss", "tokens", "variables.scss")

http.get("http://localhost:8080/design-token/scss", async (response) => {
    let rawData = '';

    response.on('data', (chunk) => {
        rawData += chunk;
    });

    response.on('end', async () => {
        try {
            await fs.writeFile(pathFile, rawData);
        } catch (e) {
          console.error(e.message);
        }
    });
});

// mix.before(() => {
//     return new Promise(resolve => {
//         const path = require('path');
//         const path_token = path.resolve(__dirname, 'resources', 'scss', 'bootstrap.min.css');

//         https.get(`https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css`, async (response) => {
//             let buffer = '';

//             response.on('data', (chunk) => {
//                 buffer += chunk;
//             });

//             response.on('end', async () => {
//                 try {
//                     await fs.writeFile(path_token, buffer);
//                     console.log('Arquivo de tokens atualizado com sucesso!');
//                     resolve();
//                 } catch (e) {
//                 console.error(e.message);
//                 }
//             });
//         });
//     });
// });
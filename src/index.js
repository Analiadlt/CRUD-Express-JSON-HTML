// const app = require('./app');
import { listen, get } from './app';

async function main() {
    // await app.listen(app.get('port'));
    // console.log("Server on port: ", app.get('port'));
    await listen(get('port'));
    console.log("Server on port: ", get('port'));
}

main();
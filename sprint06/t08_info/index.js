const express = require('express'),
    os = require('os');

let name = os.hostname(); //Returns the host name of the operating system as a string

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    console.log("Filename of executing script:", __filename); // name of file

    process.argv.forEach(function (val, index) {
        console.log(`${index}: ${val}`); //args passed to the script
    });

    console.log(req.ip);
    res.send("IP address of the client: " + req.ip);

    console.log("Name of host: " + name);

    console.log(req.protocol);

    console.log(req.get("user-agent"));

    let ipClient = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(ipClient)

    const url = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    console.log(url)
})

app.listen(port, "127.0.0.1", () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
})

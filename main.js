//Revolt

const revolt = require("revolt.js");

const client = new revolt.Client();

//Handlers

const revoltHandler = require("revolthandler.js");

const handler = new revoltHandler.Handler({
    client: client, //Cliente
    prefix: "@ton ", //Prefijo del bot
    folder: "./commands", //Carpeta de comandos
    owners: ["01FQHE8CQDYEXY0XD6SMDZ9AQ6"], //Las identificaciónes de los owners
});

//Inicio

handler.start();
client.loginBot("SSAhOmiVST9SbQCLIh8X1IhNBOI7lBZuMsLV5BZfbP9jV1vVErINif3PmiZhoaFJ")
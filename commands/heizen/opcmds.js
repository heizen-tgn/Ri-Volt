module.exports = {
    name: "opcmds",
    ownerOnly: {
        status: true,
        errorMsg: "¡No puedes usar este comando!",
    },
    code(message, args, client) {
        message.reply("Esto aún está en desarrollo")
    }
}
module.exports = {
    name: "say",
    aliases: ["di"],
    code(message, args, client) {
        message.channel.sendMessage(`${args}`)
    }
}
exports.commands = [
	"talk"
]

var cleverbot = require("cleverbot-node");
talkbot = new cleverbot;
cleverbot.prepare(function(){});

exports.talk = {
	usage : "<message>",
	description : "Talk directly to the bot",
	process : function(bot,msg, suffix) {
			var conv = suffix.split(" ");
			talkbot.write(conv, function (response) {
				// Handle unicode
				if(response.message.startsWith("|")) {
					response.message = response.message.split("|").map(function(x) {return String.fromCharCode(parseInt(x, 16)); }).join("");
				}
				
				bot.sendMessage(msg.channel, response.message)
			})
	}
}
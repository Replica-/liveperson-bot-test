const agentBot = require('./lib/agentBot');

// https://livepersoninc.github.io/visitor-page/?siteid=26291589
const agent = new agentBot(26291589, "bot", "Bot1234567!");
agent.start();
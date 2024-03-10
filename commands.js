const { REST, Routes } = require('discord.js');
const { bot_token, guild_id, client_id } = require('./config.json');
var colors = require('colors');


const commands = [
  {
    name: 'server',
    description: 'Send servers status',
  },
];

const rest = new REST({ version: '10' }).setToken(bot_token);

(async () => {
  try {
    console.log('[COMMANDS]'.bgYellow, 'Registering command(s)...'.yellow);

    await rest.put(
      Routes.applicationGuildCommands(
        client_id,
        guild_id
      ),
      { body: commands }
    );

    console.log('[COMMANDS]'.bgGreen, 'Slash Command(s) registered successfully!'.green);
  } catch (error) {
    console.log(`There was an error: ${error}`.red);
  }
})();

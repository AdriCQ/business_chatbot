import { createBot } from "@builderbot/bot";
import { WhatsappDatabase } from "@/database";
import { MainFlow } from "@/flows";
import { Chatbot } from "@/models";
import { HttpBotService, WhatsappProvider } from "@/services";

/**
 * registerBot
 * @param name
 * @param port
 */
export async function registerBot(chatbot: Chatbot) {
  const name = `${chatbot.name}_${chatbot.id}`;
  const port = Number(chatbot.port);

  const provider = new WhatsappProvider({ name });
  const database = new WhatsappDatabase(name);

  const adapterProvider = provider.getProvider();

  const bot = createBot({
    flow: MainFlow,
    provider: adapterProvider,
    database: database.getDatabase(),
  });

  const botServer = new HttpBotService(bot, port);

  await botServer.register();
}

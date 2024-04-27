import { setupApiGateway } from "./api";
import { AppDatabase } from "./database";
import { registerBot } from "./registerBot";
import { ChatbotService } from "./services";
import dotenv from "dotenv";

dotenv.config();

/**
 * main
 */
async function main(db: AppDatabase) {
  const botSvc = new ChatbotService(db.getDataSource());
  const bots = await botSvc.findAvailable();

  bots.forEach((bot) => {
    registerBot(bot);
  });
}

const db = new AppDatabase({
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

await db.init();

main(db);
setupApiGateway(db);

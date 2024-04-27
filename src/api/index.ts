import { AppDatabase } from "@/database";
import { ChatbotController } from "./chatbot.controller";
import { HttpServer } from "./http.sever";

export async function setupApiGateway(db: AppDatabase) {
  const api = new HttpServer();
  const PORT = process.env.API_PORT;

  api.setupRoutes((http) => {
    const Controller = new ChatbotController(db);

    http.post("/v1/messages", Controller.sendMessage);

    return http;
  });

  api.start(Number(PORT ?? 3000), (port) => {
    console.log(`API Lista en puerto ${port}`);
  });
}

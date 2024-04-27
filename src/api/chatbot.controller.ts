import { Response } from 'express';
import axios from 'axios';
import { AppDatabase } from '@/database';
import { ChatbotService } from '@/services';
import { SendMessageRequest } from '@/types';

/**
 * ChatbotController
 */
export class ChatbotController {
  private chatbotSvc: ChatbotService;

  constructor(db: AppDatabase) {
    this.chatbotSvc = new ChatbotService(db.getDataSource());
  }

  /**
   * sendMessage
   * @param req
   * @param resp
   * @returns
   */
  async sendMessage(req: SendMessageRequest, resp: Response) {
    const { botToken, ...messageRequest } = req.body;
    const bot = await this.chatbotSvc.findOne(botToken);
    if (!bot) return resp.json(null).status(400);

    const endpoint = `http://localhost:${bot.port}/v1/messages`;

    const { data } = await axios.post(endpoint, messageRequest);

    return resp.json(data).status(200);
  }
}

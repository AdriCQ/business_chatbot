import { Bot } from '@/types';

/**
 * HttpService
 */
export class HttpService {
  constructor(
    private bot: Bot,
    private port: number,
  ) {}

  /**
   * register
   */
  async register() {
    const adapterProvider = await this.provider();
    const handleCtx = await this.contextHandler();
    const httpServer = await this.httpServer();

    adapterProvider.server.post(
      '/v1/messages',
      handleCtx(async (bot, req, res) => {
        const { number, message, urlMedia } = req.body;
        await bot.sendMessage(number, message, { media: urlMedia ?? null });
        return res.end('sended');
      }),
    );

    // Listen
    httpServer(this.port);
  }

  private async contextHandler() {
    return (await this.bot).handleCtx;
  }

  private async httpServer() {
    return (await this.bot).httpServer;
  }

  private async provider() {
    return (await this.bot).provider;
  }
}

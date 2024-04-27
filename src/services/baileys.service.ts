import { createProvider } from '@builderbot/bot';
import { BaileysProvider } from '@builderbot/provider-baileys';

export class WhatsappProvider {
  private provider: BaileysProvider;

  constructor(options?: ProviderOptions) {
    this.provider = createProvider(BaileysProvider, { name: options.name });
  }

  /**
   * getProvider
   * @returns
   */
  getProvider(): BaileysProvider {
    return this.provider;
  }
}

interface ProviderOptions {
  name: string;
  phoneNumber?: boolean;
  usePairingCode?: boolean;
}

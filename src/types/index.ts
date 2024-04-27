import { createBot } from '@builderbot/bot';
import { PostgreSQLAdapter } from '@builderbot/database-postgres';
import { BaileysProvider } from '@builderbot/provider-baileys';

export type AdapterDb = PostgreSQLAdapter;
export type AdapterProvider = BaileysProvider;
export type Bot = ReturnType<typeof createBot>;

import { createBot } from "@builderbot/bot";
import { JsonFileDB } from "@builderbot/database-json";
import { BaileysProvider } from "@builderbot/provider-baileys";

export type AdapterDb = JsonFileDB;
export type AdapterProvider = BaileysProvider;
export type Bot = ReturnType<typeof createBot>;

export * from "./http";

import { addKeyword } from "@builderbot/bot";
import { AdapterProvider, AdapterDb } from "@/types";
import { DiscordFlow } from "./discord.flow";

export const WelcomeFlow = addKeyword<AdapterProvider, AdapterDb>([
  "hi",
  "hello",
  "hola",
])
  .addAnswer(`🙌 Hello welcome to this *Chatbot*`)
  .addAnswer(
    [
      "I share with you the following links of interest about the project",
      "👉 *doc* to view the documentation",
    ].join("\n"),
    { delay: 800, capture: true },
    async (ctx, { fallBack }) => {
      if (!ctx.body.toLocaleLowerCase().includes("doc")) {
        return fallBack("You should type *doc*");
      }
      return;
    },
    [DiscordFlow],
  );

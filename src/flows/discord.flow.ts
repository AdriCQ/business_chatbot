import { AdapterDb, AdapterProvider } from '@/types';
import { addKeyword } from '@builderbot/bot';
import { RegisterFlow } from './register.flow';

export const DiscordFlow = addKeyword<AdapterProvider, AdapterDb>(
  'doc',
).addAnswer(
  [
    'You can see the documentation here',
    '📄 https://builderbot.app/docs \n',
    'Do you want to continue? *yes*',
  ].join('\n'),
  { capture: true },
  async (ctx, { gotoFlow, flowDynamic }) => {
    if (ctx.body.toLocaleLowerCase().includes('yes')) {
      return gotoFlow(RegisterFlow);
    }
    await flowDynamic('Thanks!');
    return;
  },
);

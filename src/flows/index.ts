import { createFlow } from "@builderbot/bot";
import { FullSamplesFlow } from "./full-samples.flow";
import { RegisterFlow } from "./register.flow";
import { WelcomeFlow } from "./welcome.flow";

export const MainFlow = createFlow([
  WelcomeFlow,
  RegisterFlow,
  FullSamplesFlow,
]);

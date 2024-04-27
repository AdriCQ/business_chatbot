import { Request } from 'express';

export interface SendMessageParams {
  phone: string;
  botToken: string;
  message?: string;
  urlMedia?: string;
}

export interface SendMessageRequest extends Request {
  body: SendMessageParams;
}

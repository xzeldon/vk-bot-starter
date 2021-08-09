import dotenv from 'dotenv-safe';

import { VK } from 'vk-io';
import { HearManager } from '@vk-io/hear';

dotenv.config();

export const bot = new VK({
    token: process.env.TOKEN
});

export const hearManager = new HearManager();

export function start()
{
    bot.updates.start().catch(err => console.error('Bot launch error:', err));
    console.log('Bot is up and running');
}
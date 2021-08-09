import { hearManager } from "../bot.js";

export function ping_command()
{
    hearManager.hear(/^(?:ping|test)$/i, (context) =>
    {
        context.send('🦄🌈✨👋🌎🌍🌏✨🌈🦄');
    });
}
import { hearManager } from "../bot.js";

export function help_command()
{
    hearManager.hear(/^(?:help|start)$/i, (context) =>
    {
        return context.send('Hello, world! - 👋🌎🌍🌏');
    });
}
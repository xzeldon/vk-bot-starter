export function setup_message_logger(bot)
{
    bot.updates.on('message_new', (context, next) =>
    {
        // ignore messages from groups
        if (context.senderId < 0) return;

        if (context.text)
        {
            console.log(`[${new Date().toLocaleString('ru')}, @id${context.senderId}] ${context.text}`);
        }

        return next();
    });
}
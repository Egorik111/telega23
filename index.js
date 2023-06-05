const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('6188306424:AAFSo4wiEGnAohaBEpxCYhHKMeIaVx_elMk');

const keyboard = Markup.keyboard([
    ['BMW'],
    ['HONDA'],
    ['AUDI'],
    ['CHIGA']
]).resize().oneTime();

bot.start((ctx) => ctx.reply('Привет! Я бот, который прошивает определенную марку машину.' , keyboard));

bot.hears('BMW' , (ctx) => {
    ctx.reply('прошивка Е36: 15000', keyboard);
    ctx.reply('прошивка Е32: 12000' , keyboard);
    ctx.reply('прошивка Е39: 18000' , keyboard);
});

bot.hears('HONDA' , (ctx) => {
    ctx.reply('прошивка ODYSSEY: 12000' , keyboard);
    ctx.reply('прошивка CIVIC: 11000' , keyboard);
    ctx.reply('прошивка ACCORD: 10000' , keyboard);
});

bot.hears('AUDI' , (ctx) => {
    ctx.reply('прошивка AUDI 80: 15000' , keyboard);
    ctx.reply('прошивка AUDI 100: 18000' , keyboard);
    ctx.reply('прошивка AUDI A6: 20000' , keyboard);
});

bot.hears('CHIGA' , (ctx) => {
    ctx.reply('прошивка CHIGA 07: 5000' , keyboard);
    ctx.reply('прошивка CHIGA 05: 4000' , keyboard);
    ctx.reply('прошивка CHIGA 09: 6000' , keyboard);

});



bot.launch();

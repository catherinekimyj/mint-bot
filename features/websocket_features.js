/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {

    if (controller.adapter.name === 'Web Adapter') {

        console.log('Loading sample web features...');

        controller.hears(new RegExp('quick'), 'message', async (bot, message) => {

            await bot.reply(message,{
                text: 'Here are some quick replies',
                quick_replies: [
                    {
                        title: 'Foo',
                        payload: 'foo',
                    },
                    {
                        title: 'Bar',
                        payload: 'bar',
                    }
                ]
            });
        });

        controller.hears(
          new RegExp("love"),
          "message",
          async (bot, message) => {
            await bot.reply(message, {
              text: "Here are some quick replies",
              quick_replies: [
                {
                  title: "love1",
                  payload: "foo",
                },
                {
                  title: "love2",
                  payload: "bar",
                },
              ],
            });
          }
        );


    }

}
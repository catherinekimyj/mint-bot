/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {

    controller.hears(
      async (message) =>
        (message.text && message.text.toLowerCase() === "hello") ||
        (message.text && message.text.toLowerCase() === "good morning") ||
        (message.text && message.text.toLowerCase() === "hi") ||
        (message.text && message.text.toLowerCase() === "good day"),
      "message",
      async (bot, message) => {
        await bot.reply(message, {
          text:
            "Hello there. I am happy you are here!",
          quick_replies: [
            {
              title: "Basic",
              payload: "basic",
            },
            {
              title: "Work",
              payload: "work",
            },
            {
              title: "Education",
              payload: "education",
            },
            {
              title: "Skills",
              payload: "skills",
            },
            {
              title: "Languages",
              payload: "languages",
            },
            {
              title: "Projects",
              payload: "projects",
            },
          ],
        });
      }
    );


    controller.on('message,direct_message', async(bot, message) => {
        await bot.reply(message, {text: "I am afraid I can't answer that for now. Would you like to ask me a different question?", 
        quick_replies: [
            {
              title: "Basic",
              payload: "basic",
            },
            {
              title: "Volunteer",
              payload: "volunteer",
            },
            {
              title: "Education",
              payload: "education",
            },
            {
              title: "Skills",
              payload: "skills",
            },
            {
              title: "Languages",
              payload: "languages",
            },
            {
              title: "Projects",
              payload: "projects",
            },
          ],
        });
    });
}

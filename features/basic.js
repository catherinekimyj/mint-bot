/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {

    if (controller.adapter.name === 'Web Adapter') {

        controller.hears(
          async (message) =>
            (message.text && message.text.toLowerCase() === "basic") ||
            (message.text && message.text.toLowerCase() === "about") ||
              (message.text && message.text.toLowerCase() === "Tell me more about yourself"
            ),
          "message",
          async (bot, message) => {
            await bot.reply(message, {
              text: "What would you like to know?",
              quick_replies: [
                {
                  title: "Name",
                  payload: "name",
                },
                {
                  title: "Description",
                  payload: "description",
                },
                {
                  title: "Email",
                  payload: "email",
                },
                {
                  title: "Summary",
                  payload: "summary",
                },
                {
                  title: "Location",
                  payload: "location",
                },
                {
                  title: "Profiles",
                  payload: "profiles",
                },
                {
                  title: "Back",
                  payload: "basic",
                },
                {
                  title: "Work",
                  payload: "work",
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
          }
        );

        controller.hears(
          new RegExp("name"),
          "message",
          async (bot, message) => {
            await bot.reply(message, {
              text: "Catherine",
              quick_replies: [
                {
                  title: "Description",
                  payload: "description",
                },
                {
                  title: "Email",
                  payload: "email",
                },
                {
                  title: "Summary",
                  payload: "summary",
                },
                {
                  title: "Location",
                  payload: "location",
                },
                {
                  title: "Profiles",
                  payload: "profiles",
                },
                {
                  title: "Back",
                  payload: "basic",
                },
                {
                  title: "Work",
                  payload: "work",
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
          }
        );

        controller.hears(
          new RegExp("description"),
          "message",
          async (bot, message) => {
            await bot.reply(message, {
              text:
                "Software Engineer | Web Development Javascript Ruby Rails React Redux Git Express.js Node.js PostgreSQL MongoDB AWS CSS/SCSS HTML",
              quick_replies: [
                {
                  title: "Name",
                  payload: "name",
                },
                {
                  title: "Email",
                  payload: "email",
                },
                {
                  title: "Summary",
                  payload: "summary",
                },
                {
                  title: "Location",
                  payload: "location",
                },
                {
                  title: "Profiles",
                  payload: "profiles",
                },
                {
                  title: "Back",
                  payload: "basic",
                },
                {
                  title: "Work",
                  payload: "work",
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
          }
        );

        controller.hears(
          new RegExp("email"),
          "message",
          async (bot, message) => {
            await bot.reply(message, {
              text: "catkimyj@gmail.com",
              quick_replies: [
                {
                  title: "Name",
                  payload: "name",
                },
                {
                  title: "Description",
                  payload: "description",
                },
                {
                  title: "Summary",
                  payload: "summary",
                },
                {
                  title: "Location",
                  payload: "location",
                },
                {
                  title: "Profiles",
                  payload: "profiles",
                },
                {
                  title: "Back",
                  payload: "basic",
                },
                {
                  title: "Work",
                  payload: "work",
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
          }
        );

        controller.hears(
          new RegExp("summary"),
          "message",
          async (bot, message) => {
            await bot.reply(message, {
              text:
                "I am a designer turned software engineer who believes that exquisite code not only outputs a product that is user-friendly, comprehensive, and functional, such values are held within the visual aspects of the lines of code, as well. I am adaptable, open-minded, and value all learning experiences. With prior managerial skills with past employers, I am always a team player and believe in rising up together rather than holding a win-lose mindset. ",
              quick_replies: [
                {
                  title: "Name",
                  payload: "name",
                },
                {
                  title: "Email",
                  payload: "email",
                },
                {
                  title: "Description",
                  payload: "description",
                },
                {
                  title: "Location",
                  payload: "location",
                },
                {
                  title: "Profiles",
                  payload: "profiles",
                },
                {
                  title: "Back",
                  payload: "basic",
                },
                {
                  title: "Work",
                  payload: "work",
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
          }
        );

        controller.hears(
          new RegExp("email"),
          "message",
          async (bot, message) => {
            await bot.reply(message, {
              text: "catkimyj@gmail.com",
              quick_replies: [
                {
                  title: "Name",
                  payload: "name",
                },
                {
                  title: "Description",
                  payload: "description",
                },
                {
                  title: "Summary",
                  payload: "summary",
                },
                {
                  title: "Location",
                  payload: "location",
                },
                {
                  title: "Profiles",
                  payload: "profiles",
                },
                {
                  title: "Back",
                  payload: "basic",
                },
                {
                  title: "Work",
                  payload: "work",
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
          }
        );

        controller.hears(
          new RegExp("location"),
          "message",
          async (bot, message) => {
            await bot.reply(message, {
              text: "New York, NY",
              quick_replies: [
                {
                  title: "Name",
                  payload: "name",
                },
                {
                  title: "Email",
                  payload: "email",
                },
                {
                  title: "Description",
                  payload: "description",
                },
                {
                  title: "Summary",
                  payload: "summary",
                },
                {
                  title: "Profiles",
                  payload: "profiles",
                },
                {
                  title: "Back",
                  payload: "basic",
                },
                {
                  title: "Work",
                  payload: "work",
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
          }
        );


        controller.hears(
          new RegExp("email"),
          "message",
          async (bot, message) => {
            await bot.reply(message, {
              text: "catkimyj@gmail.com",
              quick_replies: [
                {
                  title: "Name",
                  payload: "name",
                },
                {
                  title: "Description",
                  payload: "description",
                },
                {
                  title: "Summary",
                  payload: "summary",
                },
                {
                  title: "Location",
                  payload: "location",
                },
                {
                  title: "Profiles",
                  payload: "profiles",
                },
                {
                  title: "Back",
                  payload: "basic",
                },
                {
                  title: "Work",
                  payload: "work",
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
          }
        );

        controller.hears(
          new RegExp("profiles"),
          "message",
          async (bot, message) => {
            await bot.reply(message, {
              text:
                "LinkedIn: catherinekimyj, https://www.linkedin.com/in/catherinekimyj/ ",
              quick_replies: [
                {
                  title: "Name",
                  payload: "name",
                },
                {
                  title: "Email",
                  payload: "email",
                },
                {
                  title: "Description",
                  payload: "description",
                },
                {
                  title: "Location",
                  payload: "location",
                },
                {
                  title: "Summary",
                  payload: "summary",
                },
                {
                  title: "Back",
                  payload: "basic",
                },
                {
                  title: "Work",
                  payload: "work",
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
          }
        );

        

        


    }

}
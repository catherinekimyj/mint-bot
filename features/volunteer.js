module.exports = function (controller) {
  var json = require("./resume.json");
  if (controller.adapter.name === "Web Adapter") {
    controller.hears(
      async (message) => message.text.toLowerCase().includes("volunteer"),
      "message",
      async (bot, message) => {
        await bot.reply(message, {
          text: `${json.volunteer[0].position}, ${json.volunteer[0].organization}. ${json.volunteer[0].summary} `,
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
  }
};

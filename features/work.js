module.exports = function (controller) {
  var json = require("./resume.json");
  if (controller.adapter.name === "Web Adapter") {
    controller.hears(
      async (message) =>
        (message.text.toLowerCase().includes("work")) || 
        (message.text.toLowerCase().includes("experience")) ||
        (message.text.toLowerCase().includes("past employment")),
      "message",
      async (bot, message) => {
        await bot.reply(
          message,
          `${json.work[0].position} at ${json.work[0].name}. ${json.work[0].summary}. ${json.work[0].startDate} - ${json.work[0].endDate} `
        );

        await bot.reply(
          message,
          `${json.work[1].position} at ${json.work[1].name}. ${json.work[1].summary}. ${json.work[1].startDate} - ${json.work[1].endDate} `
        );

        await bot.reply(
          message,
          `${json.work[2].position} at ${json.work[2].name}. ${json.work[2].summary}. ${json.work[2].startDate} - ${json.work[2].endDate} `
        );

        await bot.reply(message, {
          text:
            `${json.work[3].position} at ${json.work[3].name}. ${json.work[3].summary}. ${json.work[3].startDate} - ${json.work[3].endDate} `,
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
      }
    );
  }
};

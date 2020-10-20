module.exports = function (controller) {
  if (controller.adapter.name === "Web Adapter") {
    controller.hears(
      async (message) =>
        (message.text && message.text.toLowerCase() === "education") ||
        (message.text && message.text.toLowerCase() === "school"),
      "message",
      async (bot, message) => {
        await bot.reply(
          message,
          "App Academy, Software Engineering. 03/16/2020 - 07/03/2020 "
        );

        await bot.reply(
          message,
          "Fashion Institute of Technology, Fashion/Apparel Design. 12/31/2009 - 12/31/2013"
        );
        await bot.reply(message, {
          text:
            "James Madison University, Dietetics and Clinical Nutrition Services. 12/31/2007 - 12/31/2009",
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
              title: "Work",
              payload: "work",
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

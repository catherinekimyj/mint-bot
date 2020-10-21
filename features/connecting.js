var json = require("./resume.json");

module.exports = function (controller) {
    controller.on("hello", Greeting);
    controller.on("welcome_back", Greeting);
    function Greeting(bot, message) {
        bot.reply(message, {
          text:
            "Hello and welcome! My name is " + json.basics.name + ". I am currently " + json.basics.jobStatus + ". Please feel free to ask me anything.",
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
  }

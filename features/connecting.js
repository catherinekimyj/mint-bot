var json = require("./resume.json");

module.exports = function (controller) {
    controller.on("hello", Greeting);
    controller.on("welcome_back", Greeting);
    function Greeting(bot, message) {
        bot.reply(message, {
          isFirst: true,
          text:
            "Hello and welcome! My name is " +
            json.basics.name +
            ". I am currently " +
            json.basics.jobStatus +
            ". Please feel free to ask me anything.",
          quick_replies: [
            {
              title: "Email",
              payload: "email",
            },
            {
              title: "Phone number",
              payload: "phone",
            },
            {
              title: "Portfolio site",
              payload: "portfolio",
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
            {
              title: "References",
              payload: "references",
            },
            {
              title: "Ideal company",
              payload: "ideal",
            },
          ],
        });
      }
  }

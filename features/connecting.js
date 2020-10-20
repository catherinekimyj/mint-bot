module.exports = function (controller) {
  controller.on("hello", Greeting);
  controller.on("welcome_back", Greeting);

  function Greeting(bot, message) {
      bot.reply(message, {
        text:
          "Hello and welcome! I am currently open to work!:) You can ask me anything!",
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

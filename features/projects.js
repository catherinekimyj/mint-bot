module.exports = function (controller) {
  var json = require("./resume.json");
  if (controller.adapter.name === "Web Adapter") {
    controller.hears(
      async (message) => message.text.toLowerCase().includes("project"),
      "message",
      async (bot, message) => {
        await bot.reply(message, {
          text: "My projects:",
          quick_replies: [
            {
              title: "Full-stack(SQL, Ruby on Rails, Redux, React)",
              payload: "full",
            },
            {
              title: "MERN Stack",
              payload: "mern",
            },
            {
              title: "JavaScript",
              payload: "js",
            },
          ],
        });
      }
    );

    controller.hears(
      async (message) => message.text.toLowerCase().includes("mern"),
      "message",
      async (bot, message) => {
        await bot.reply(message, {
            link: "https://profferly.herokuapp.com/#/",
            username: "Profferly",
          quick_replies: [
            {
              title: "",
              payload: "",
            },
          ],
        });

        setTimeout(async () => {
          await bot.changeContext(message.reference);
          await bot.reply(message, {
            text:
              "Profferly is a volunteer app born during the COVID-19 pandemic. As a platform for the community formed around lending a hand, it provides volunteers with opportunities to connect with one another.",
            image: "profferly.png",
            quick_replies: [
              {
                title: "Full-stack(SQL, Ruby on Rails, Redux, React)",
                payload: "full",
              },
              {
                title: "JavaScript",
                payload: "js",
              },
            ],
          });
        }, 1250); 
      }
    );

    controller.hears(
      async (message) => message.text.toLowerCase().includes("js"),
      "message",
      async (bot, message) => {
        await bot.reply(message, {
            link: "http://catherinekim.me/depth-perception/",
            username: "JavaScript",
          quick_replies: [
            {
              title: "",
              payload: "",
            },
          ],
        });

        setTimeout(async () => {
          await bot.changeContext(message.reference);
          await bot.reply(message, {
            text:
              "Depth Perception is a meditation visualization app where the user input dissipates to a timed animation. The duration of the animation will depend on the length of the chosen meditation sound. It is the idea of letting go of your thoughts to reach deeper meditation.",
            image: "javas.png",
            quick_replies: [
              {
                title: "Full-stack(SQL, Ruby on Rails, Redux, React)",
                payload: "full",
              },
              {
                title: "MERN Stack",
                payload: "mern",
              },
            ],
          });
        }, 1250);
      }
    );

    controller.hears(
      async (message) => message.text.toLowerCase().includes("full"),
      "message",
      async (bot, message) => {
          await bot.reply(message, {
            link: "https://aa-wordplay.herokuapp.com/#/",
            username: "Full-Stack",
            quick_replies: [
              {
                title: "",
                payload: "",
              },
            ],
          });

        setTimeout(async () => {
          await bot.changeContext(message.reference);
          await bot.reply(message, {
          text:
            "Wordplay is a single-page web application, built on React-Redux and RESTful JSON Rails API. It features an ability for users to highlight lines of spoken word and poetry, and save annotations to the selection. It is a clone of the Genius app.",
          image: "full.png",
            quick_replies: [
              {
                title: "JavaScript",
                payload: "js",
              },
              {
                title: "MERN Stack",
                payload: "mern",
              },
            ],
          });
        }, 1250);
      }
    );

  }
};

module.exports = function (controller) {
  if (controller.adapter.name === "Web Adapter") {
    controller.hears(
      async (message) => message.text && message.text.toLowerCase() === "volunteer",
      "message",
      async (bot, message) => {
        await bot.reply(message, {
          text:
            "Fundraising Volunteer for A Milion Masks on March 31st 2020. A Million Masks is a nonprofit organization whose mission is to secure emergency Personal Protective Equipment (PPE) for frontline hospital workers in New York City. My role as a volunteer was to reach out to high-profile individuals to explain the mission and goal of A Million Masks and to invite them to share our GoFundMe link on social media platforms and help spread the word. The highest number of exposure per individual was brought in by clothing designer Phillip Lim, who shared AMM's story on both his brand and personal social media platforms. ",
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

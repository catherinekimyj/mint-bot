module.exports = function (controller) {
  if (controller.adapter.name === "Web Adapter") {
    controller.hears(
      async (message) =>
        (message.text && message.text.toLowerCase() === "work") ||
        (message.text && message.text.toLowerCase() === "experience") ||
        (message.text && message.text.toLowerCase() === "past employment"),
      "message",
      async (bot, message) => {
        await bot.reply(
          message,
          "- First Creative Patternmaker at Marchesa from 11/30/2018 till 11/30/2019. I drafted patterns for 10+ garments per season for six collections per year, and supervised the process and execution. Technical fit and errors were analyzed and discussed each season. I shared the task in managing a team of 6+ sewers and interns, and mentored the junior pattern maker in coaching technical and non-technical skills in the atelier."
        );

        await bot.reply(
          message,
          "- Assistant Designer for Christian Siriano from 12/31/2014 till 03/31/2017. I was working closely with founder Christian Siriano, I assisted in design execution and patterned garments for five collections per year, each collection consisting of an average of 50 looks. I drafted patterns of custom garments for private clients and celebrities, managed sewers and interns, and communicated with the production team for efficient garment production."
        );

        await bot.reply(
          message,
          "- Design Inter for Badgley Mischka from 09/30/2012 till 02/28/2013 and Design Inter for Anna Sui from 09/30/2010 till 12/31/2010 "
        );

        await bot.reply(message, {
          text:
            "- A founder of Forsythia Studio from 08/31/2017 till 12/31/2019. My responsibilities were shifting the way we consume and contribute to fashion, Forsythia was built on the foundation of producing clothing through environmentally and socially conscious processes. As the founder and designer of the sustainable luxury brand, I worked closely with showrooms and PR agencies, and managed contractors and freelancers. I also managed and modified the code for the company website. Forsythia has been featured in: Vogue China, Latest magazine, Revs magazine, Shuba magazine, Schon magazine, ONE magazine, and numerous others. ",
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

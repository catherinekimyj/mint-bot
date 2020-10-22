var json = require("./resume.json");

// helper functions for detecting spelling errors

// const tech_stack_keywords = ["language", "languages"];

const detectTypo = function (string, tech_stack_keywords) {
  let words = string.split(" ");
  let suggestedWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    for (let j = 0; j < tech_stack_keywords.length; j++) {
      let tech_word = tech_stack_keywords[j];
      let compared = compareWords(word, tech_word, word.length);

      if (compared !== undefined) {
        suggestedWords.push(compared);
      }
    }
  }

  return suggestedWords;
};
// [word1 = lenguage, word2 = language, length = 7]
// [word1 = sell, word2 = skill, length = 4]

const compareWords = function (word1, word2, length) {
  let charsCount = 0;
  let charsMatchCount = length - 2; // 5
  let word2Split = word2.split("").sort(); // [ a,a,e,g,g,l,n,u ]
  let word1Split = word1.split("").sort(); // [ a,e,e,g,g,l,n,u ]

  if (charsMatchCount < 3) {
    return undefined;
  }

  for (let k = 0; k < word1Split.length; k++) {
    let letter1 = word1Split[k];
    let letter2 = word2Split[k]
    // if (word2Split.includes(letter1)) {
    //   charsCount += 1;
    // }
    if (letter2 === letter1) {
      charsCount++;
    }
  }

  if (charsCount >= word2.length - 1) {
    return word2; 
  } else {
    return undefined;
  }

  // if (charsCount >= charsMatchCount) {
  //   return word2;
  // } else {
  //   return undefined;
  // }
};

// stringify list helper function 

const stringList = function (array) {
  if (array.length === 2) {
    return array[0] + " and " + array[1];
  } else {
    let Str = "";

    for (let i = 0; i < array.length; i++) {
      let element = array[i];

      if (i < array.length - 1) {
        Str += element + ", ";
      } else {
        Str += "and " + element;
      }
    }

    return Str;
  }
};

// module begins //

module.exports = function (controller) {
  controller.hears(
    async (message) =>
      (message.text.toLowerCase().includes("language") && message.text.toLowerCase().includes("speak")) ||
      (message.text.toLowerCase().includes("language") && message.text.toLowerCase().includes("spoken")) ||
      (message.text &&
        detectTypo(message.text.toLowerCase(), ["spoken", "language"]).includes(
          "language"
        ) &&
        detectTypo(message.text.toLowerCase(), ["spoken", "language"]).includes(
          "spoken"
        )) ||
      (message.text &&
        detectTypo(message.text.toLowerCase(), ["speak", "language"]).includes(
          "language"
        ) &&
        detectTypo(message.text.toLowerCase(), ["speak", "language"]).includes(
          "speak"
        )),
    "message",
    async (bot, message) => {
      await bot.reply(
        message,
        "I can speak the following list of languages(" +
          json.languages.length +
          "):"
      );

      for (let i = 0; i < json.languages.length; i++) {
        languageObj = json.languages[i];

        await bot.reply(
          message,
          languageObj.language +
            " with the level of fluency: " +
            languageObj.fluency.toLowerCase()
        );
      }
    }
  );

  controller.hears(
    async (message) =>
      (message.text &&
        message.text.toLowerCase().includes("language") &&
        message.text.toLowerCase().includes("tech")) ||
      (message.text &&
        message.text.toLowerCase().includes("language") &&
        message.text.toLowerCase().includes("programming")) ||
      (message.text &&
        message.text.toLowerCase().includes("language") &&
        message.text.toLowerCase().includes("cod")) ||
      (message.text &&
        detectTypo(message.text.toLowerCase(), [
          "programming",
          "language",
        ]).includes("language") &&
        detectTypo(message.text.toLowerCase(), [
          "programming",
          "language",
        ]).includes("programming")) ||
      (message.text &&
        detectTypo(message.text.toLowerCase(), ["tech", "language"]).includes(
          "language"
        ) &&
        detectTypo(message.text.toLowerCase(), ["tech", "language"]).includes(
          "tech"
        )) ||
      (message.text &&
        detectTypo(message.text.toLowerCase(), ["cod", "language"]).includes(
          "language"
        ) &&
        detectTypo(message.text.toLowerCase(), ["cod", "language"]).includes(
          "tech"
        )),
    "message",
    async (bot, message) => {
      await bot.reply(message, "I am proficient in the following languages:");
      const progLangArr = json.skills;
      let languages = progLangArr.find((obj) => obj["languages"]).languages;

      await bot.reply(message, stringList(languages));
      await bot.reply(
        message,
        "I am always learning more languages and will be adding to this list."
      )

      await bot.reply(
        message, {
        text: "Here are other sets of skills I could tell you about:",
        quick_replies: [
            {
              title: "Stack",
              payload: "stack"
            },
            {
              title: "All technical skills",
              payload: "all tech skills"
            },
            {
              title: "Misc skills",
              payload: "misc skills"
            },
            {
              title: "All skills",
              payload: "all skill"
            },
        ]
        }
      )
    }
  );

  controller.hears(
    async (message) =>
      (message.text.toLowerCase().includes("language")) ||
      (message.text &&
      detectTypo(message.text.toLowerCase(), ["language"]).includes("language")),
    "message",

    async (bot, message) => {
      await bot.reply(message, {
        text:
          "I have skills in technical languages and spoken languages. Which would you like to know about?",
        quick_replies: [
          {
            title: "Technical languages",
            payload: "technical languages",
          },
          {
            title: "Spoken languages",
            payload: "spoken languages",
          },
        ],
      });
    }
  );

  controller.hears(
    async (message) =>
      message.text &&
      message.text.toLowerCase().includes("stack"),
      "message",

      async (bot, message) => {
        const progSkill = json.skills;
        let stack = progSkill.find((obj) => obj["stack"]);
        let stackList = stack.stack;

        await bot.reply(
          message, 
          "This is my stack:"
        )

        await bot.reply(
          message, 
          stringList(stackList)
        )

        await bot.reply(
          message, {
          text: "Here are other sets of skills I could tell you about:",
          quick_replies: [
            {
              title: "Programming languages",
              payload: "programming languages"
              },
              {
                title: "All technical skills",
                payload: "all tech skills"
              },
              {
                title: "Misc skills",
                payload: "misc skills"
              },
              {
                title: "All skills",
                payload: "all skill"
              },
          ]
          }
        )
      }
  )

  controller.hears(
    async (message) =>
      (message.text &&
      message.text.toLowerCase().includes("all") &&
      !message.text.toLowerCase().includes("tech") &&
      detectTypo(message.text.toLowerCase(), ["skill"]).includes("skill")),
      "message",

      async (bot, message) => {
        const progSkill = json.skills;
        let stack = progSkill.find((obj) => obj["allSkills"]);
        let skillsList = stack.allSkills;

        await bot.reply(
          message, 
          "This is the list of all of my skills:"
        )

        await bot.reply(
          message, 
          stringList(skillsList)
        )

        await bot.reply(
          message, {
          text: "Here are more specific sets of skills I could tell you about:",
          quick_replies: [
            {
              title: "Programming languages",
              payload: "programming languages"
              },
              {
                title: "Stack",
                payload: "stack"
              },
              {
                title: "Tech skills",
                payload: "all skills"
              },
              {
                title: "Misc skills",
                payload: "misc skills"
              },
          ]
          }
        )
      }
  )

  controller.hears(
    async (message) =>
      message.text &&
      message.text.toLowerCase().includes("all") &&
      message.text.toLowerCase().includes("tech") &&
      detectTypo(message.text.toLowerCase(), ["skill"]).includes("skill") ||
      message.text &&
      message.text.toLowerCase().includes("tech") &&
      detectTypo(message.text.toLowerCase(), ["skill"]).includes("skill")
      ,
      "message",

      async (bot, message) => {
        const progSkill = json.skills;
        let stack = progSkill.find((obj) => obj["techSkills"]);
        let techSkillsList = stack.techSkills;

        await bot.reply(
          message, 
          "This is the list of my technical skills:"
        )

        await bot.reply(
          message, 
          stringList(techSkillsList)
        )

        await bot.reply(
          message, {
          text: "Here are other sets of skills I could tell you about:",
          quick_replies: [
            {
              title: "Programming languages",
              payload: "programming languages"
              },
              {
                title: "Stack",
                payload: "stack"
              },
              {
                title: "Misc skills",
                payload: "misc skills"
              },
              {
                title: "All skills",
                payload: "all skills"
              },
          ]
          }
        )
    },
  )

  controller.hears(
    async (message) =>
      (message.text &&
      message.text.toLowerCase().includes("misc") &&
      detectTypo(message.text.toLowerCase(), ["skill"]).includes("skill"))
      ,
      "message",

      async (bot, message) => {
        const progSkill = json.skills;
        let stack = progSkill.find((obj) => obj["miscSkills"]);
        let miscSkillsList = stack.miscSkills;

        await bot.reply(
          message, 
          stringList(miscSkillsList)
        );

        await bot.reply(
          message, {
          text: "Here are other sets of skills I could tell you about:",
          quick_replies: [
            {
              title: "Programming languages",
              payload: "programming languages"
              },
              {
                title: "Stack",
                payload: "stack"
              },
              {
                title: "All technical skills",
                payload: "all tech skills"
              },
              {
                title: "All skills",
                payload: "all skills"
              },
            ]
          }
        )
    },
  )

  controller.hears(
    async (message) =>
      message.text &&
      !message.text.toLowerCase().includes("tech") &&
      !message.text.toLowerCase().includes("all") &&
      !message.text.toLowerCase().includes("misc") &&
      detectTypo(message.text.toLowerCase(), ["skill"]).includes("skill"),
      "message",

      async (bot, message) => {
        await bot.reply(
          message, {
           text: "Which specific type of skill set would you like to know about?",
           quick_replies: [
             {
               title: "Programming languages",
               payload: "programming languages"
              },
              {
                title: "Stack",
                payload: "stack"
              },
              {
                title: "All technical skills",
                payload: "all tech skills"
              },
              {
                title: "Misc skills",
                payload: "misc skills"
              },
              {
                title: "All skills",
                payload: "all skills"
              },
           ]
          }
        )
      }
  )
};

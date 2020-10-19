import resume from 'resume.jsx';

module.exports = function (controller) {
  controller.on("hello", Greeting);
  controller.on("welcome_back", Greeting);

  function Greeting(bot, message) {
      bot.reply(message, {
        // text: "Hi, this is" + name + ". Welcome!",
        text: "Hello and welcome! I am currently open to work!:) You can ask me anything!",
        quick_replies: [
          {
            title: "Foo",
            payload: "foo",
          },
          {
            title: "Bar",
            payload: "bar",
          },
        ],
      });

    }  
}

/*  ---- Fun Profile Generator ----
To help out our fellow users, let's create a quick survey app which asks the user a bunch of questions 
like their favourite music, activity, food, sport, etc. It will then generate a profile description 
for them to use online, like the example demonstrated above.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Placeholder for survey answers
const survey = {
  nickname: "",
  activity: "",
  music: "",
  mealTime: "",
  favFood: "",
  sport: "",
  superpower: ""
};


rl.question('What\'s your name? Nicknames are also acceptable 😀: ', (answer) => {
  survey.nickname = answer;

  rl.question('What\'s an activity you like doing?: ', (answer) => {
    survey.activity = answer;

    rl.question('What do you listen to while doing that?: ', (answer) => {
      survey.music = answer;

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.): ', (answer) => {
        survey.mealTime = answer;

        rl.question('What\'s your favourite thing to eat for that meal?: ', (answer) => {
          survey.favFood = answer;
            
          rl.question('Which sport is your absolute favourite?: ', (answer) => {
            survey.sport = answer;
              
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!: ', (answer) => {
              survey.superpower = answer;
              rl.close();

              console.log(`${survey.nickname} loves listening to ${survey.music} while ${survey.activity}, ` +
                ` they like devouring ${survey.favFood} for ${survey.mealTime}, prefers ${survey.sport} over any other sport,` +
                ` and if they had a superpower it would be: ${survey.superpower}`); //Survey Output

            });
          });
        });
      });
    });
  });
});

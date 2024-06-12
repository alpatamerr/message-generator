 function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const humanReaction = {
    reactionInfo: ['Happiness', 'Sadness', 'Fear', 'Anger' , 'Disgust', 'Surprise'],
    reactionOutput: ['smile', 'drooping the eyelids', 'open eyes', 'tight lips', 'wrinkled nose', 'open mouth'],
    reactionAdvice: ['Lets put a smile on that face', 'Fear is the mind killer', 'Run run Runaway Runaway baby!', 'Hulk smash!', 'Eww Whats That Brother?', 'Surprise Motherfucker!']
  }
  
  // Store the 'reaction' in an array
  let personalReaction = []
  
  // use the object's properties to customize the message being added to humanReaction  
    for (let prop in humanReaction) {
      let optionIdx = generateRandomNumber(humanReaction[prop].length);
    
      // use the object's properties to customize the message being added to personalReaction  
      if (prop === 'reactionInfo') {
        personalReaction.push(`Your reaction right now is "${humanReaction[prop][optionIdx]}".`);
      } else if (prop === 'reactionOutput') {
        personalReaction.push(`You are showing: "${humanReaction[prop][optionIdx]}".`);
      } else if (prop === 'reactionAdvice') {
        personalReaction.push(`You should: "${humanReaction[prop][optionIdx]}".`);
      } else {
        personalReaction.push('There is not enough info.');
      }
    }
  
  function formatReaction(reaction) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = personalReaction.join('\n')
    console.log(formatted)
  }
  
  formatReaction(personalReaction);
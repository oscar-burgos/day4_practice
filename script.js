var firstOption = prompt('You are out for a walk in the woods and you come accross a troll. Do you: RUN, HIDE, or FIGHT?')

// If They Choose to RUN
if (firstOption == 'run') {
  var runOption = prompt('You chose to RUN and come accross a fork in the road. One road leads to the River of Peace and the other to the Forest of Doom. Do you take the RIVER road or the FOREST road?')

  if (runOption == 'river') {
    alert('As you are running you accidentally fall into the river which leads to a giant waterfall. Unfortunately YOU ARE DEAD.')
  }
  else if (runOption == 'forest'){
    alert('You made it to the Forest of Doom, named so because the trees grow very close together. So close in fact that a troll cannot fit between them. Congratulations YOU ESCAPED THE TROLL!')
  }
  else {
    alert('You entered and ivalid response, or you just do not want to play')
  }
}

// If They Choose to HIDE
else if (firstOption == 'hide') {
  var hideOption = prompt('You chose to HIDE, and spot a rock and a tree as possible hiding spots. Do you hide behind the ROCK or the TREE?')

  if (hideOption == 'rock' || hideOption == 'tree') {
    alert('Trolls have a very good sense of smell. It does not take the troll long to get your scent. Unfortunately YOU ARE DEAD.')
  }
  else {
    alert('You entered and ivalid response, or you just do not want to play')
  }
}

// If They Choose to FIGHT
else if (firstOption == 'fight') {
  var fightOption = prompt('You chose to fight the troll. You look around for weapons and spot a stick and a stone. Do you pick up the STICK or the STONE as a weapon?')

  if (fightOption == 'stick') {
    alert('The troll sees you pick up the stick and charges. The charging troll scares you and you stumble, however the troll is impaled by the stick. Congratulations YOU ACCIDENTALLY KILLED THE TROLL')
  }
  else if (fightOption == 'stone') {
    alert('You pick up the stone and throw it at the troll. Unfortunately you are not an major league pitcher and your throw only makes the troll angrier. Without anymore weapons Unfortunately YOU ARE DEAD')
  }
  else {
    alert('You entered and ivalid response, or you just do not want to play')
  }
}

// Default alert message for RUN, HIDE, Fight
else {
  alert('You entered and ivalid response, or you just do not want to play')
}

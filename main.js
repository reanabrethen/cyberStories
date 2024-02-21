
const body = document.querySelector('body');
 
const card = document.createElement('div')
card.className = 'card'

const cardBody = document.createElement('div')
cardBody.className = 'cardBody'

card.appendChild(cardBody)
body.appendChild(card)


// function createCard(element){
//    return  card.appendChild(element) 
// }

// function createStory(element){
//     return cardBody.appendChild(element)
// }
// ;

// function addNewStory(text){
//     cardBody.innerText = `${text}`
//     return cardBody
// }

// const newStory = addNewStory('How to learn coding - 200 points , 50 comments, submitted by user101')

// addNewStory(newStory)

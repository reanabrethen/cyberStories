const storyIdURL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'


const body = document.querySelector('body');
 
const card = document.createElement('div')
card.className = 'card'

const cardBody = document.createElement('div')
cardBody.className = 'cardBody'

card.appendChild(cardBody)
body.appendChild(card)

let titleOfStory
let userName
let numOfComments
let scorePoints


// cardBody.innerHTML = '230 points- "Story of Coding" , user101, 20 comments'

// function createCard(element){
//    return  card.appendChild(element) 
// }

// function createStory(element){
//     return cardBody.appendChild(element)
// }
// ;



const newStory = addNewStory('"Learn Coding" - 200 points \n 50 comments - submitted by user101')

// createCard(newStory)
console.log(newStory)


fetch(storyIdURL)
    .then((rawResponse)=>{
        return rawResponse.json()
    })
    .then((arrayOfStoryIds) => {
        console.log(arrayOfStoryIds)
        arrayOfStoryIds.length = 100
        
        let arrayOfPromises = []
        //loop through arr 
        for(let id of arrayOfStoryIds){
             //make new fetches for each one of them
             arrayOfPromises.push(fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`))
        }
       console.log(arrayOfPromises)
        //Promise.all --> arr would push fetches
        return Promise.all(arrayOfPromises) //returns arr of responses
        
        //for loop to loop through arr and attach invidual ID 
    })
     //building website
        //creating elements
        //loop through
        //template literals
    
    .then((results) => Promise.all(results.map(res => res.json())))
    .then((arrayOfStoryObjs) => {
         console.log(arrayOfStoryObjs)
            for(let story of arrayOfStoryObjs){
                addNewStory(story)
            }
        //  let storyDetailURL = []
         
            //  storyDetailURL.push(fetch(`https://hacker-news.firebaseio.com/v0/item/${arrayOfStoryObjs[url]}.json?print=pretty`))
         
        //  console.log(storyDetailURL)
        //  return Promise.all(storyDetailURL)
        // })
        // .then((results) => Promise.all(results.map(res => res.json())))
        })

    
        function addNewStory(storyObj){
        const cardBody = document.createElement('div')
        cardBody.className = 'cardBody'
        //cardBody is called globally that creates new div/element
    //setting text of card
    cardBody.innerHTML = `<a href="${storyObj.url}">${storyObj.title}</a>`
    //return element
    body.appendChild(cardBody)
}


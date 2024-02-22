const storyIdURL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'

const body = document.querySelector('body');
 
const card = document.createElement('div')
card.className = 'card'

const cardBody = document.createElement('div')
cardBody.className = 'cardBody'

const storyButton = document.querySelector('#stories')
const askButton = document.querySelector('#ask')

const askAPI = 'https://hacker-news.firebaseio.com/v0/item/121003.json?print=pretty'

// fetch(askAPI)
//     .then((results)=>{
//         return results.json()
//     })
//     .then((askObj)=> {
//         console.log(askObj)
//       askButton.addEventListener('click', ()=>{
// body.innerHTML = fetch(`https://hacker-news.firebaseio.com/v0/item/${askObj.text}.json?print=pretty`)
//       })  
//     })





// askButton.addEventListener('click' , ()=>{
//     for(let ask )
   
              



// card.appendChild(cardBody)
// body.appendChild(card)
//test to see if it functions (line 16)
// cardBody.innerHTML = '230 points- "Story of Coding" , user101, 20 comments'
// const newStory = addNewStory('"Learn Coding" - 200 points \n 50 comments - submitted by user101')
// createCard(newStory)
// console.log(newStory)


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

     // next is building website
        //creating elements
        //loop through
        //template literals
    
    .then((results) => Promise.all(results.map(res => res.json())))
    .then((arrayOfStoryObjs) => {
         console.log(arrayOfStoryObjs)
            for(let story of arrayOfStoryObjs){
                addNewStory(story)
            }

       
        })
    
    
    
    
    
    
    
    
        //  .then((descendants) => {  
    //     let arrayOfDescendants = []
    //     for(let kid of descendants){
    //         arrayOfDescendants.push(fetch(`https://hacker-news.firebaseio.com/v0/item/${kid}.json?print=pretty`))
    //     }
    // }) 
    
    // fetch(storyIdURL)
    //         .then((rawResults) => {
    //             return rawResults.json()
    //         })        
    //         .then((arrayOfIds) => {
    //             console.log(arrayOfIds)
    //             arrayOfIds.length = 100
            //     function addCommentButton(commentObj){
            //         viewComments.addEventListener('click', ()=>{
            //             cardBody.innerHTML = `https://hacker-news.firebaseio.com/v0/item/${commentObj.text}.json?print=pretty`
            //         })
            //         addCommentButton(`${commentObj.text}`
            // )}
            //     })
            // })
                    
         



    

        function addNewStory(storyObj){
        const card = document.createElement('div')
        card.className = 'card'
        //cardBody is called globally that creates new div/element
        //setting text of card
        card.innerHTML = `<a href="${storyObj.url}">${storyObj.title}</a> ${storyObj.score} points - Written by ${storyObj.by} \n ${storyObj.descendants} comments`
        body.appendChild(card)
        }

        
       //build a function that you call w/the kids array
        // function addComments(storyObj){
        //     let kidArr = []
        //     if(kidArr.length < 10){
        //             kidArr[i]++
        //     }

        //     console.log(kidArr)
        // }
        
       
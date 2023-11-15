// javascript imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://wearethechampions-e70b6-default-rtdb.firebaseio.com/"
}

// Variables
const app = initializeApp(appSettings)
const database = getDatabase(app)
let endorsementsInDB = ref(database, "endorsements")

let inputMessage = document.getElementById("input")
const publishEl = document.getElementById("inputBtn")
const endorsementEl = document.getElementById("endorsementsArea")
const clearEl = document.getElementById("clearBtn")

let message = ""
let endorsementsArray = []

// Event Listener

publishEl.addEventListener("click", function() {
    let inputValue = inputMessage.value
    push(endorsementsInDB, inputValue)
    inputMessage.value = ""
})

// listener to clear on-screen endorsements from document
clearEl.addEventListener("click", function() {
     endorsementEl.innerHTML = ` `
})

// function to display (render?) endorsementsInDB
onValue(endorsementsInDB, function(snapshot) {
    let endorsementsArray = Object.values(snapshot.val())
        endorsementsArray.forEach((endorsement) => {
        endorsementEl.innerHTML += `<p>${endorsement}</p>` 
         }
        )
})


    
// endorsementsArray.forEach((endorsement) => {
        // endorsementEl.innerHTML += `<li>${endorsementsArray}</li>` 
//   for (let i = 0; i < endorsementsArray.length; i++) {  endorsementArray.map
// endorsementEl.innerHTML += `<li>${endorsementsArray}</li>`
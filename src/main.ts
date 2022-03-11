import './style.css'

// let teamOneScore = 0

const teamOnePlus = document.querySelector('.team1 i.add')
const teamOneMinus = document.querySelector('.team1 i.subtract')
const teamOneScore = document.querySelector('.team1 h3')
const teamOneNameDisplay = document.querySelector('.team1 h2')
const teamOneNameInput = document.querySelector('team1 input')

console.log(teamOnePlus)
console.log(teamOneMinus)
console.log(teamOneScore)
console.log(teamOneNameDisplay)
console.log(teamOneNameInput)

function handleClickTeamOnePlusButton() {
  console.log('clicked team one plus button')
}
teamOnePlus?.addEventListener('click', handleClickTeamOnePlusButton)

function handleClickTeamOneMinusButton() {
  console.log('clicked team one minus button')
}
teamOneMinus?.addEventListener('click', handleClickTeamOneMinusButton)

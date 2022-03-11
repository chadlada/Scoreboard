import './style.css'

// let teamOneScore = 0

const teamOnePlus = document.querySelector('.team1 i.add')
const teamOneMinus = document.querySelector('.team1 i.subtract')
const teamOneScoreText = document.querySelector('.team1 h3')
const teamOneNameDisplay = document.querySelector('.team1 h2')
const teamOneNameInput = document.querySelector('team1 input')
let teamOneScore = 0

console.log(teamOnePlus)
console.log(teamOneMinus)
console.log(teamOneScoreText)
console.log(teamOneNameDisplay)
console.log(teamOneNameInput)

function handleClickTeamOnePlusButton() {
  teamOneScore++

  console.log(teamOneScore)
}
teamOnePlus?.addEventListener('click', handleClickTeamOnePlusButton)

function handleClickTeamOneMinusButton() {
  teamOneScore--
  console.log(teamOneScore)
}
teamOneMinus?.addEventListener('click', handleClickTeamOneMinusButton)

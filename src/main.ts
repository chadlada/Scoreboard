import './style.css'

console.clear()

const teamOnePlusButton = document.querySelector('.team1 i.add')
const teamOneMinusButton = document.querySelector('.team1 i.subtract')
const teamOneScoreText = document.querySelector('.team1 h3')
// const teamOneNameDisplay = document.querySelector('.team1 h2')
// const teamOneNameInput = document.querySelector('team1 input')
let teamOneScore = 0

const teamTwoPlusButton = document.querySelector('.team2 i.add')
const teamTwoMinusButton = document.querySelector('.team2 i.subtract')
const teamTwoScoreText = document.querySelector('.team2 h3')
// const teamTwoNameDisplay = document.querySelector('.team2 h2')
// const teamTwoNameInput = document.querySelector('team2 input')
let teamTwoScore = 0

// ------------------------------------------TEAM 1------------------------------------------

function handleClickTeamOnePlusButton() {
  teamOneScore++

  if (teamOneScoreText) {
    teamOneScoreText.textContent = `${teamOneScore}`
  }
}

teamOnePlusButton?.addEventListener('click', handleClickTeamOnePlusButton)

function handleClickTeamOneMinusButton() {
  // Guard Clause to protect code below
  if (teamOneScore === 0) {
    return
  }

  teamOneScore--

  if (teamOneScoreText) {
    teamOneScoreText.textContent = `${teamOneScore}`
  }
}

teamOneMinusButton?.addEventListener('click', handleClickTeamOneMinusButton)

// ------------------------------------------TEAM 2------------------------------------------

function handleClickTeamTwoPlusButton() {
  teamTwoScore++

  if (teamTwoScoreText) {
    teamTwoScoreText.textContent = `${teamTwoScore}`
  }
}
teamTwoPlusButton?.addEventListener('click', handleClickTeamTwoPlusButton)

function handleClickTeamTwoMinusButton() {
  // Guard Clause to protect code below
  if (teamTwoScore === 0) {
    return
  }

  teamTwoScore--

  if (teamTwoScoreText) {
    teamTwoScoreText.textContent = `${teamTwoScore}`
  }
  console.log(teamTwoScore)
}
teamTwoMinusButton?.addEventListener('click', handleClickTeamTwoMinusButton)

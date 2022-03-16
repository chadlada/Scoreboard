import './style.css'

console.clear()

const teamOnePlusButton = document.querySelector('.team1 i.add')
const teamOneMinusButton = document.querySelector('.team1 i.subtract')
const teamOneScoreText = document.querySelector('.team1 h3')
const teamOneNameInput = document.querySelector('.team1 input')
const teamOneNameText = document.querySelector('.team1 h2')

let teamOneScore = 0

const teamTwoPlusButton = document.querySelector('.team2 i.add')
const teamTwoMinusButton = document.querySelector('.team2 i.subtract')
const teamTwoScoreText = document.querySelector('.team2 h3')
const teamTwoNameInput = document.querySelector('.team2 input')
const teamTwoNameText = document.querySelector('.team2 h2')

let teamTwoScore = 0
const freshInputs = document.querySelectorAll('input')!

const resetButton = document.querySelector('.reset')
freshInputs.forEach((input) => (input.value = ''))

// ------------------------------------------TEAM 1 BUTTON FUNCTION------------------------------------------

function handleClickTeamOnePlusButton() {
  teamOneScore++

  if (teamOneScore > 21) {
    return
  }

  if (teamOneScore === 21) {
    window.alert('Winner winner chicken dinner!')
  }

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

// ------------------------------------------TEAM 1 NAME INPUT FUNCTION------------------------------------------

function teamOneInputChanged(event: Event) {
  const inputThatChanged = event.target

  if (inputThatChanged instanceof HTMLInputElement) {
    const textThatWasInput = inputThatChanged.value

    if (teamOneNameText) {
      teamOneNameText.textContent = textThatWasInput
    }
  }
}

teamOneNameInput?.addEventListener('input', teamOneInputChanged)

// ------------------------------------------TEAM 2 BUTTON FUNCTION------------------------------------------

function handleClickTeamTwoPlusButton() {
  teamTwoScore++
  if (teamTwoScore > 21) {
    return
  }

  if (teamTwoScore === 21) {
    window.alert('Winner winner chicken dinner!')
  }

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

// ------------------------------------------TEAM 2 NAME INPUT FUNCTION------------------------------------------

function teamTwoInputChanged(event: Event) {
  const inputThatChanged = event.target

  if (inputThatChanged instanceof HTMLInputElement) {
    const textThatWasInput = inputThatChanged.value

    if (teamTwoNameText) {
      teamTwoNameText.textContent = textThatWasInput
    }
  }
}

teamTwoNameInput?.addEventListener('input', teamTwoInputChanged)

// ------------------------------------------RESET BUTTON------------------------------------------

function handleClickResetButton() {
  freshInputs.forEach((input) => (input.value = ''))
  teamOneScore = 0
  teamTwoScore = 0

  if (teamOneScoreText) {
    teamOneScoreText.textContent = `${teamOneScore}`
  }

  if (teamTwoScoreText) {
    teamTwoScoreText.textContent = `${teamTwoScore}`
  }

  if (teamOneNameText) {
    teamOneNameText.textContent = 'Team 1'
  }
  if (teamTwoNameText) {
    teamTwoNameText.textContent = 'Team 2'
  }
}

resetButton?.addEventListener('click', handleClickResetButton)

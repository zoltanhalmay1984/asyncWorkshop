function showMessage(message) {
  document
    .getElementById('message')
    .innerText = message
}

function showMessage2(message) {
  document
    .getElementById('message2')
    .innerText = message
}

function hideMessages() {
  document
    .getElementById('message')
    .innerText = ''
  document
    .getElementById('message2')
    .innerText = ''

}

function showError(message) {
  document
    .getElementById('error')
    .innerText = message
}

function hideError() {
  document
    .getElementById('error')
    .innerText = ''
}

function getCharacterId() {
  return document
    .querySelector('[name=characterId]')
    .value
}

document
  .getElementById('button1')
  .addEventListener('click', async () => {
  })

document
  .getElementById('button2')
  .addEventListener('click', async () => {

  })

document
  .getElementById('button3')
  .addEventListener('click', async () => {

  })

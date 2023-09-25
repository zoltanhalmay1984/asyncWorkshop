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

function waitForSuccess() {
  return new Promise(function (onSuccess, onFailure) {
    setTimeout(function () {
      onSuccess('it is always successful!')
    }, 2000)
  })
}

function waitForUncertainty() {
  return new Promise(function (onSuccess, onFailure) {
    setTimeout(function () {
      if (Math.random() > 0.5) {
        onSuccess('it is a success!')
      } else {
        onFailure('Ooops, something went wrong!')
      }
    }, 2000)
  })
}

document
  .getElementById('waitButton')
  .addEventListener('click', () => {

  })

document
  .getElementById('waitButton2')
  .addEventListener('click', () => {

  })

document
  .getElementById('waitButton3')
  .addEventListener('click', () => {

  })

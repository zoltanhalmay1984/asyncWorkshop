function showMessage(message) {
  document
    .getElementById('message')
    .innerText = message
}

function hideMessage(message) {
  document
    .getElementById('message')
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

document
  .getElementById('waitButton')
  .addEventListener('click', () => {

    showMessage('🕐 waiting...')

    function task() {
      showMessage('⏰ awaited')
    }

    setTimeout(task, 2000)
  })

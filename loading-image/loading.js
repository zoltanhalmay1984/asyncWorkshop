function showMessage(message) {
  document
    .getElementById('message')
    .innerText = message
}

function hideMessage() {
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

const imageUrl = 'https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg'

document
  .getElementById('loadButton')
  .addEventListener('click', () => {
    const messageElement = document.getElementById('message')
    messageElement.innerText = 'loading...'

    const image = document.createElement('img')
    image.src = imageUrl
    image.height = 250
    image.addEventListener('load', () => {

      console.log('loaded')
      messageElement.innerText = 'loaded.'
      document
        .getElementById('image')
        .appendChild(image)
    })
    image.addEventListener('error', () => {
      messageElement.innerText = 'error'
    })

  })

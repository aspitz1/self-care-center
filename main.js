const affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I have the freedom & power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.'
]
const mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don\'t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.'
]

const form = document.querySelector('#form')
const affirmationRadio = document.querySelector('#affirmation-radio')
const mantraRadio = document.querySelector('#mantra-radio')
const submitBtn = document.querySelector('#submit-btn')
const buttonWrapper = document.querySelector('#button-wrapper')
const meditateImg = document.querySelector('#meditate-img')
const displayMsg = document.querySelector('#affirmation-mantra-txt')

form.addEventListener('submit', generateMantra)
document.addEventListener('click', makeEventListenerReset)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateMantra(e) {
  e.preventDefault()
  buttonWrapper.innerHTML = '<button id="reset-btn" class="reset" type="reset">Need Another?</button>'
  displayMsg.innerHTML = ''
  affirmationRadio.disabled = true
  mantraRadio.disabled = true
  if (affirmationRadio.checked) {
    const num = getRandomIndex(affirmations)
    displayMsg.innerText = affirmations[num]
  }
  if (mantraRadio.checked) {
    const num = getRandomIndex(mantras)
    displayMsg.innerText = mantras[num]
  }
}

function makeEventListenerReset(e) {
  const element = e.target
  if(element.classList.contains('reset')) {
    reset()
  }
}

function reset(){
  buttonWrapper.innerHTML = '<button id="submit-btn" class="submit" type="submit">Receive Message</button>'
  affirmationRadio.disabled = false
  mantraRadio.disabled = false
  displayMsg.innerHTML = '<img id="meditate-img" class="meditate-image" src="assets/meditate.svg" width="100px">'
}

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

let customAffirmation = []
let customMantra = []

const form = document.querySelector('#form')
const affirmationRadio = document.querySelector('#affirmation-radio')
const mantraRadio = document.querySelector('#mantra-radio')
const submitBtn = document.querySelector('#submit-btn')
const resetBtn = document.querySelector('#reset-btn')
const customFormBtn = document.querySelector('#custom-form-btn')
const customFormSubmit = document.querySelector('#custom-btn')
const customRadioAffirmation = document.querySelector('#affirmation-radio-custom')
const customRadioMantra = document.querySelector('#mantra-radio-custom')
const meditateImg = document.querySelector('#meditate-img')
const displayMsg = document.querySelector('#affirmation-mantra-txt')
const formCustom = document.querySelector('#custom-input')
const inputTxt = document.querySelector('#custom-input-txt-box')

form.addEventListener('submit', generateMantra)
resetBtn.addEventListener('click', reset)
customFormBtn.addEventListener('click', showFormHideImgText)
formCustom.addEventListener('submit', submitCustom)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateMantra(e) {
  e.preventDefault()
  if (!formCustom.classList.contains('hidden') && resetBtn.classList.contains('hidden')) {
    hideFormShowText()
    reset()
    enableRadio(affirmationRadio, mantraRadio)
    return
  }
  showTextHideImg()
  showResetBtnHideSubmitOwn()
  displayMsg.classList.add('fade-in')
  if (affirmationRadio.checked) {
    const num = getRandomIndex(affirmations)
    displayMsg.innerText = affirmations[num]
  }
  if (mantraRadio.checked) {
    const num = getRandomIndex(mantras)
    displayMsg.innerText = mantras[num]
  }
}

function submitCustom(e) {
  e.preventDefault()
  hideFormShowText()
  showResetBtnHideSubmitOwn()
  displayMsg.classList.add('fade-in')
  if (customRadioAffirmation.checked) {
    customAffirmation.push(inputTxt.value)
    affirmations.push(inputTxt.value)
    displayMsg.innerText = inputTxt.value
  }
  if (customRadioMantra.checked) {
    customMantra.push(inputTxt.value)
    mantras.push(inputTxt.value)
    displayMsg.innerText = inputTxt.value
  }
}

function reset(){
  hideTextShowImg()
  enableRadio(affirmationRadio, mantraRadio)
  showSubmitOwnHideReset()
  displayMsg.classList.remove('fade-in')
}

function enableRadio(radio1, radio2) {
  radio1.disabled = false
  radio2.disabled = false
}

function disableRadio(radio1, radio2) {
  radio1.disabled = true
  radio2.disabled = true
}

function showTextHideImg() {
  meditateImg.classList.add('hidden')
  displayMsg.classList.remove('hidden')
}

function hideTextShowImg() {
  meditateImg.classList.remove('hidden')
  displayMsg.classList.add('hidden')
}

function hideTxtHideImg() {
  meditateImg.classList.add('hidden')
  displayMsg.classList.add('hidden')
}

function showTxtShowImg() {
  meditateImg.classList.remove('hidden')
  displayMsg.classList.remove('hidden')
}

function showResetBtnHideSubmitOwn() {
  submitBtn.classList.add('hidden')
  customFormBtn.classList.add('hidden')
  resetBtn.classList.remove('hidden')
}

function showSubmitOwnHideReset() {
  submitBtn.classList.remove('hidden')
  customFormBtn.classList.remove('hidden')
  resetBtn.classList.add('hidden')
}
function showFormHideImgText() {
  disableRadio(affirmationRadio, mantraRadio)
  formCustom.classList.remove('hidden')
  hideTxtHideImg()
}

function hideFormShowText() {
  formCustom.classList.add('hidden')
  showTextHideImg()
}

// Initialize new SpeechSynthesisUtterance object
let speech = new SpeechSynthesisUtterance()

// Set speech language
speech.lang = 'en'

let voices = [] // Global array of available voices

window.speechSynthesis.onvoiceschanged = () => {
	// Get list of voices
	voices = window.speechSynthesis.getVoices()

	// Initially set the first voice in the array
	speech.voice = voices[0]

	// Set the voice select list. (Set the Index as the value, which we'll use later when the user updates the Voice using the Select Menu.)
	let voiceSelect = document.querySelector('#voices')
	voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)))
}

document.querySelector('#voices').addEventListener('change', () => {
	// On Voice change, use the value of the select menu (which is the index of the voice in the global voice array)
	speech.voice = voices[document.querySelector('#voices').value]
})

document.querySelector('#start').addEventListener('click', () => {
	speech.text = document.querySelector('#fileContent').innerText
	window.speechSynthesis.speak(speech)
})

document.querySelector('#pause').addEventListener('click', () => {
	window.speechSynthesis.pause()
})

document.querySelector('#resume').addEventListener('click', () => {
	window.speechSynthesis.resume()
})

document.querySelector('#cancel').addEventListener('click', () => {
	window.speechSynthesis.cancel()
})

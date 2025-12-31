document.addEventListener('DOMContentLoaded', () => {
	const formBtn = document.querySelector('.form__section__btn')
	const form = document.querySelector('.form')
	const sound = document.getElementById('alertSound')
	const modal = document.getElementById('phishingModal')

	// Tugma bosilganda
	formBtn.addEventListener('click', () => {
		form.reset()

		sound.currentTime = 0
		sound.volume = 1
		sound.play().catch(() => {})
	})
})

let modalOverlay = document.querySelector('.modal-overlay');

let modalMessage = document.querySelector('.modal-message');
let messageBtn = document.querySelector('.btn-contacts');
let closeMessage = document.querySelector('.close-message');
let name = modalMessage.querySelector('[id=name-field]');

let modalMap = document.querySelector('.modal-map');
let mapBtn = document.querySelector('.js-map');
let closeMap = document.querySelector('.close-map');

// Modal-Message ===================================================

messageBtn.onclick = function () {
	modalMessage.classList.toggle('modal-message-visible');
	modalOverlay.classList.add('modal-overlay-visible');
	name.focus();
};

closeMessage.onclick = function () {
	modalMessage.classList.remove('modal-message-visible');
	modalOverlay.classList.remove('modal-overlay-visible');
};

// Modal-Map ===================================================

mapBtn.onclick = function () {
	modalMap.classList.toggle('modal-map-visible');
	modalOverlay.classList.add('modal-overlay-visible');
	closeMap.focus();
};

closeMap.onclick = function () {
	modalMap.classList.remove('modal-map-visible');
	modalOverlay.classList.remove('modal-overlay-visible');
};
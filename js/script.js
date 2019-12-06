let modalOverlay = document.querySelector('.modal-overlay');

// Modal-Map ===================================================

let modalMap = document.querySelector('.modal-map');
let mapBtn = document.querySelector('.js-map');
let modalCloseMap = modalMap.querySelector('.modal-close');

mapBtn.addEventListener('click', function (evt) {
	evt.preventDefault();
	modalMap.classList.add('modal-map-visible');
	modalOverlay.classList.add('modal-overlay-visible');
	modalCloseMap.focus();
});

modalCloseMap.addEventListener('click', function () {
	modalMap.classList.remove('modal-map-visible');
	modalOverlay.classList.remove('modal-overlay-visible');
});

modalOverlay.addEventListener('click', function () {
	modalMap.classList.remove('modal-map-visible');
	modalOverlay.classList.remove('modal-overlay-visible');
});

window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		if (modalMap.classList.contains('modal-map-visible')) {
			evt.preventDefault();
			modalMap.classList.remove('modal-map-visible');
			modalOverlay.classList.remove('modal-overlay-visible');
		}
	}
});

// Modal-Message ===================================================

let modalMessage = document.querySelector('.modal-message');
let messageBtn = document.querySelector('.btn-contacts');
let modalCloseMessage = modalMessage.querySelector('.modal-close');
let name = modalMessage.querySelector('[name=name]');

messageBtn.addEventListener('click', function (evt) {
	evt.preventDefault();
	modalMessage.classList.add('modal-message-visible');
	modalOverlay.classList.add('modal-overlay-visible');
	name.focus();
});

modalCloseMessage.addEventListener('click', function () {
	modalMessage.classList.remove('modal-message-visible');
	modalOverlay.classList.remove('modal-overlay-visible');
});

modalOverlay.addEventListener('click', function () {
	modalMessage.classList.remove('modal-message-visible');
	modalOverlay.classList.remove('modal-overlay-visible');
});

window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		if (modalMessage.classList.contains('modal-message-visible')) {
			evt.preventDefault();
			modalMessage.classList.remove('modal-message-visible');
			modalOverlay.classList.remove('modal-overlay-visible');
		}
	}
});

// Big-Menu ===================================================

var menuCaption = document.querySelector('.menu-caption');
var bigMenu = document.querySelector('.big-menu');

menuCaption.addEventListener('mouseover', function () {
	bigMenu.classList.add('big-menu-visible'); 
});

menuCaption.addEventListener('mouseout', function () {
	bigMenu.classList.remove('big-menu-visible'); 
});

bigMenu.addEventListener('mouseover', function () {
	bigMenu.classList.add('big-menu-visible'); 
});

bigMenu.addEventListener('mouseout', function () {
	bigMenu.classList.remove('big-menu-visible'); 
});

menuCaption.addEventListener('focus', function () {
	bigMenu.classList.add('big-menu-visible'); 
});


// Amenities ===================================================

// var amenitiesTab = document.querySelectorAll('.amenities-tab');
// var amenitiesBtn = document.querySelectorAll('.btn-amenities');

// var clickFuncrion = function (amenitieBtn, amenitieTab) {
// 	amenitieBtn.addEventListener('click', function () {
// 		amenitieTab.classList.add('current');
// 	});
// }

// for (var i = 0; i < amenitiesTab.length; i++) {
// 	clickFuncrion(amenitiesTab[i], amenitiesBtn[i]);
// }
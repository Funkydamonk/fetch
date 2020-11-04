$(document).ready(function() {
	$('.main__slider').slick({
		dots: false,
		infinite: true,
	})
});

// Shoes
// const title = document.getElementByTagName('title');
// const header = document.querySelector('.header');
// if (title.textContent === 'Shoes') {
// 	header.classList.add('header--black');
// }


// pages 

const pages = document.querySelectorAll('.pages__item');

for (const page of pages) {
	page.onclick = () => {
		for (const page of pages) {
			if (page.classList.contains('pages__item--bold')) {
				page.classList.remove('pages__item--bold')
			}
		}	
		page.classList.add('pages__item--bold');	
	}
}
	// $(document).ready(function() {
	// 	$('.navbar__list').slick({
	// 		arrows: false,
	// 		dots: false,
	// 		// slidesToShow: 2,
	// 		infinite: false,
	// 		focusOnSelect: true,
	// 		variableWidth: true,
	// 		draggable: false,
	// 		edgeFriction: 1,
	// 		swipeToSlide: true,
	// 		responsive:[
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				arrows: false,
	// 				slidesToShow: 3,
	// 				edgeFriction: 0,05,
	// 				draggable: true,
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 460,
	// 			settings: {
	// 				arrows: false,
	// 				slidesToShow: 1,
	// 				edgeFriction: 0,05,
	// 				draggable: true,
	// 			}
	// 		}
	// 		]
	// 	})
	// });

// $(document).ready(function() {
// 	$('.slider').slick({
// 		arrows: true,
// 		dots: false,
// 		infinite: true,
// 		autoplay: true,
// 		autoplaySpeed: 5000,
// 		pauseOnFocus: true,
// 		pauseOnHover: true,
// 		asNavFor: '.sliderbig',
// 	})
// });


// //sliderpop
// $(document).ready(function() {
// 	$('.main__slider').slick({
// 		arrows: true,
// 		dots: false,
// 		infinite: true,
// 		slidesToShow: 3,
// 	})
// });


// //validation 
// const form = document.querySelector('.footer__form');
// const email = document.querySelector('.footer__input-mail');
// const check = document.querySelector('.footer__input-check');
// const checkPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
// const success = document.querySelector('.footer__success');

// form.addEventListener('submit', (e) => {
// 	e.preventDefault();

// 	checkInputs();
// });

// function checkInputs() {
// 	const emailValue = email.value.trim();

// 	if (emailValue === '') {
// 			email.classList.add('footer__error');
// 			check.classList.add('footer__input-check-visible');
// 	} else if (!isEmail(emailValue)){
// 		email.classList.add('footer__error');
// 		check.classList.add('footer__input-check-visible');
// 	} else {
// 		form.style.visibility = 'hidden';
// 		success.style.visibility = 'visible';
// 	}
// }

// email.onfocus = function() {
// 	if (email.classList.contains('footer__error') && check.classList.contains('footer__input-check-visible')) {
// 		email.classList.remove('footer__error');
// 		check.classList.remove('footer__input-check-visible');
// 	}
// }

// function isEmail(emailValue) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailValue);
// }

// // Local storage
// // email.oninput = () => {
// // 	localStorage.setItem('emailLog', email.value);
// // }

// // if (email.value === '') {
// // 	email.value = localStorage.getItem('emailLog');
// // }
// const message = document.querySelector('.footer__input-msg');

// function setLog(logName, inputName) {
// 	inputName.oninput = () => {
// 		localStorage.setItem(logName, inputName.value);
// 	}
// }

// function getLog(logName, inputName) {
// 	if (inputName.value === '') {
// 		inputName.value = localStorage.getItem(logName);
// 	}
// }

// setLog('emailLog', email);
// getLog('emailLog', email);
// setLog('messageLog', message);
// getLog('messageLog', message);
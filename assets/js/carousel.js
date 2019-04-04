'use strict';
const qs = e => document.querySelector(e);
document.addEventListener('DOMContentLoaded', () => {
	console.log('yeet');

	const elem = qs('.carousel');
	console.log(elem);
	const instance = M.Carousel.getInstance('.carousel');
	console.log(instance);

	const test = M.Carousel.init(elem, {
		fullWidth: true,
		indicators: true,
    });
    
    qs('#right').addEventListener('click', e => {test.next()});
    qs('#left').addEventListener('click', e => {test.prev()});
});

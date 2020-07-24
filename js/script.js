document.addEventListener("DOMContentLoaded", ()=> {
	TweenMax.fromTo(".player", 2, {
		opacity: 0
	}, {
		delay: .3,
		opacity: 1
	});
	TweenMax.to(".player", 1, {
		delay: 8,
		opacity: 0
	});

	// avatar appearing
	TweenMax.fromTo(".player__avatar", .5, {
		opacity: 0
	}, {
		delay: 1,
		opacity: 1
	});

	TweenMax.to(".player__avatar", .3, {
		delay: 7.8,
		opacity: 0
	});

	TweenMax.to(".player__img", .5, {
		delay: 8.4,
		width: 0
	});

	// nick appearing
	TweenMax.fromTo(".player__nick", .7, {
		width: "0px"
	}, {
		width: "auto"
	});

	TweenMax.to(".player__nick", .7, {
		delay: 8,
		width: "0px",
		padding: "4px 0"
	});

	TweenMax.fromTo(".player__nick-text", .3, {
		yPercent: -100
	}, {
		delay: 1.2,
		yPercent: 0
	});

	TweenMax.to(".player__nick-text", .2, {
		delay: 7.8,
		yPercent: -100
	});

	// social appearing
	TweenMax.fromTo(".player__socials", .7, {
		width: "0px"
	}, {
		delay: .2,
		width: "auto"
	});

	TweenMax.to(".player__socials", .7, {
		delay: 8,
		width: 0,
		padding: 0
	});

	TweenMax.fromTo(".player__socials-icon", .2, {
		opacity: 0
	}, {
		delay: 1,
		opacity: 1
	});

	TweenMax.to(".player__socials-icon", .2, {
		delay: 8,
		opacity: 0
	});

	TweenMax.fromTo(".player__socials-text", .3, {
		yPercent: 100
	}, {
		delay: 1.3,
		yPercent: 0
	});

	TweenMax.to(".player__socials-text", .3, {
		delay: 7.7,
		yPercent: 100
	});
});


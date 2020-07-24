document.addEventListener("DOMContentLoaded", ()=> {
	TweenMax.fromTo(".player", 2, {
		opacity: 0
	}, {
		delay: .3,
		opacity: 1
	});

	// avatar appearing
	TweenMax.fromTo(".player__avatar", .5, {
		opacity: 0
	}, {
		delay: 1,
		opacity: 1
	});

	// nick appearing
	TweenMax.fromTo(".player__nick", .7, {
		width: "0px"
	}, {
		width: "auto"
	});

	TweenMax.fromTo(".player__nick-text", .3, {
		yPercent: -100
	}, {
		delay: 1.2,
		yPercent: 0
	});

	// social appearing
	TweenMax.fromTo(".player__socials", .7, {
		width: "0px"
	}, {
		delay: .2,
		width: "auto"
	});

	TweenMax.fromTo(".player__socials-icon", .2, {
		opacity: 0
	}, {
		delay: 1,
		opacity: 1
	});

	TweenMax.fromTo(".player__socials-text", .3, {
		yPercent: 100
	}, {
		delay: 1.3,
		yPercent: 0
	});
});


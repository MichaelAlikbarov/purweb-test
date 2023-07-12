const rightButton = document.querySelector('.next');
const leftButton = document.querySelector('.prev');
const autoButtonOn = document.querySelector('.auto-on');
const autoButtonOf = document.querySelector('.auto-of')
const listItem = document.querySelectorAll('.dot');
const sliderItem = document.querySelectorAll('.slide');

let slides = document.getElementsByClassName('slide');
let dots = document.getElementsByClassName('dot');
let intervalId = null;

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
};

function curentsSlide(n) {
    showSlides(slideIndex = n);
};

function showSlides(n) {
    let i;

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

rightButton.addEventListener('click', () => {
    plusSlides(1);
});
leftButton.addEventListener('click', () => {
    plusSlides(-1);
});

function slideShow() {
        intervalId = setInterval(() => {
            plusSlides(1)
        }, 2000);
};

// function slideShowTumbler() {
//         console.log('Включено?')
// } надо доработать логические функции


autoButtonOn.addEventListener('click', () => {
    slideShow()
});

autoButtonOf.addEventListener('click', () => {
    clearInterval(intervalId);
})

//переход к слайду по клику на dot
listItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        curentsSlide(index+=1);
    })
	const dotActive = document.querySelector('.active');
	console.log(dotActive)
	if (dotActive) {
		dotActive.removeEventListener('click', () => {
			curentsSlide(index+=1)
		});
	}
})
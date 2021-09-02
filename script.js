//variables used
const photosArr = Array.from(document.querySelector('.photos').children);
const leftArrow = document.querySelector('#left-button');
const rightArrow = document.querySelector('#right-button');
const photoCount = photosArr.length;
console.log(photosArr);
//current index
let index = 0;

//event listeners
leftArrow.addEventListener('click', () => {
    nextImage('back');
});
rightArrow.addEventListener('click', () => {
    nextImage('forward');
});

//function to change to the next image in the array
function nextImage(direction) {
    if (direction === 'forward') {
        index++;
        if (index == photoCount) {
            index = 0;
        }
    } else if(direction ==='back') {
        if (index == 0) {
            index = photoCount - 1;
        } else {
            index--;
        }
    }
    for (let i = 0; i < photoCount; i++) {
        photosArr[i].classList.remove('mainPic');
    }
    photosArr[index].classList.add('mainPic');
}
let jhover = document.getElementsByClassName('jhover');

let jhoverArr = []

for (let i = 0; i < jhover.length; i++) {
    let arr = jhover[i].className.split(' ').indexOf('jhover');
    let vari = jhover[i].className.split(' ')[arr + 1]
    jhoverArr.push(vari)
    let newNam = jhoverArr[i].substring(1)
    jhover[i].addEventListener('mouseover', () => {
        jhover[i].classList.add(newNam)
    });
    jhover[i].addEventListener('mouseout', () => {
        jhover[i].classList.remove(newNam)
    });
}
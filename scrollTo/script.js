const butke = document.getElementsByClassName('pirmas')

document.getElementById('vapse-taip').style.color = 'red'

for (let i = 0; i < butke.length; i++) {
    butke[i].addEventListener('click', () => {
    let classNames = butke[i].className.split(' ');
    let elementas = document.getElementById(`${classNames[1]}`);
    let elemOff = elementas.offsetTop;

    if (classNames[2] == 'jsmooth') {
        if (classNames[3] == 'jsetpx') {
            window.scrollTo({left: 0, top: elemOff - classNames[4], behavior: 'smooth'})
        } else {
            window.scrollTo({left: 0, top: elemOff, behavior: 'smooth'})
        }
    } else if (classNames[2] == 'jsetpx') {
        window.scrollTo(0, elemOff - classNames[3])
    } else {
        window.scrollTo(0, elemOff)
    }
})
}
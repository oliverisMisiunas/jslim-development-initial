let togl = document.getElementsByClassName('jtoggle');
let ed = document.getElementsByClassName('jadd');
let remuv = document.getElementsByClassName('jremove');


let toglArr = []
let edArr = []
let remuvArr = []

for (let i = 0; i < togl.length; i++) {
    let arr = togl[i].className.split(' ').indexOf('jtoggle');
    let vari = togl[i].className.split(' ')[arr + 1]
    toglArr.push(vari)
    let newNam = toglArr[i].substring(1)
    togl[i].addEventListener('click', () => {
        togl[i].classList.toggle(newNam)
    })
}

for (let i = 0; i < ed.length; i++) {
    let arr = ed[i].className.split(' ').indexOf('jadd');
    let vari = ed[i].className.split(' ')[arr + 1];
    edArr.push(vari);
    let newNam = edArr[i].substring(1)
    ed[i].addEventListener('click', () => {
        ed[i].classList.add(newNam)
    })
}


for (let i = 0; i < remuv.length; i++) {
    let arr = remuv[i].className.split(' ').indexOf('jremove');
    let vari = remuv[i].className.split(' ')[arr + 1];
    remuvArr.push(vari);
    remuv[i].addEventListener('click', () => {
        remuv[i].classList.remove(remuvArr)
    })
}
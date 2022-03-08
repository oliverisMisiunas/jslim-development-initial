let jinputArr = []

let jinputBox = document.getElementsByClassName('jinput')
let jinputBtn = document.getElementsByClassName('jinput-btn')

let jinputBoxArr = []

for (let i = 0; i < jinputBox.length; i++) {
    jinputBoxArr.push(jinputBox[i])
}

let jinputBtnArr = []

for (let i = 0; i < jinputBtn.length; i++) {
    jinputBtnArr.push(jinputBtn[i])
    for (let j = 0; j < jinputBox.length; j++) {
    jinputBtnArr[i].addEventListener('click', () => {
        if (jinputArr.length < jinputBox.length) {
            jinputArr.push(jinputBox[j].value)
        }
    })
}
}

//will only push data once. if any data already exists in the jinputArr array any new data wont be pushed on click
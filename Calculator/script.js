const current = document.querySelector('.current');
const AC = document.querySelector('.span-two');
const delBtn = document.querySelector('.del');
const equalBtn = document.querySelector('.equal');
const checkNum = /[^0-9]/;
const dot = document.querySelector('[data-tentsuu]');
current.innerText = '0'

document.addEventListener('click' , 
    (arg) => {
        if(arg.target.className  === 'number' ) {
            current.innerText += arg.target.innerText;
        }

        if(arg.target.className  === 'operand') {
            if(checkNum.test(current.innerText[current.innerText.length - 1]) === false) {
                current.innerText += arg.target.innerText;
            } else if (checkNum.test(current.innerText) === true) {
                let newCurrent = current.innerText.substring(0, current.innerText.length - 1);
                newCurrent += arg.target.innerText;
                current.innerText = newCurrent;
                console.log()
            }
        } 
    }
)

function allClear() {
    current.innerText = '0';
}

function del() {
    current.innerText = current.innerText.substring(0, current.innerText.length - 1) 
}

function equal() {
    if(checkNum.test(current.innerText[current.innerText.length - 1]) === false) {
        current.innerText = eval(current.innerText)
    }
}


equalBtn.addEventListener('click', equal);
delBtn.addEventListener('click', del)
AC.addEventListener('click', allClear);


dot.addEventListener('click' , 
    (arg) => {
        if(current.innerText.includes('.') || checkNum.test(current.innerText[current.innerText.length - 1]) === true   ){
            return
        } else {
            current.innerText += '.'
        }
    }
)



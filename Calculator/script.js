const current = document.querySelector('.current');
const AC = document.querySelector('.span-two');
const delBtn = document.querySelector('.del');
const equalBtn = document.querySelector('.equal');
const checkNum = /[^0-9]/;
const dot = document.querySelector('[data-dot]');
const exceptZero = /[0]/;
current.innerText = '0';
let ifEqualClicked = '';

document.addEventListener('click' , 
    (arg) => {
        if(arg.target.className  === 'number') {
            if(ifEqualClicked === 'clicked') {
                current.innerText = arg.target.innerText ;
                ifEqualClicked = '';
                return
            }

            if(exceptZero.test(current.innerText) == true && current.innerText.length == 1 ) {
                current.innerText = '';
                current.innerText += arg.target.innerText;
            } else {
                current.innerText += arg.target.innerText;
            }
        } 

        if(arg.target.className  === 'operand') {
            if(ifEqualClicked === 'clicked') {
                ifEqualClicked = '';
            }

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
    if(current.innerText.length == 1) {
        console.log('1 hen char uldlee')
        current.innerText = 0;
    } else {
        current.innerText = current.innerText.substring(0, current.innerText.length - 1) 
    }
}

function equal() {
    if(checkNum.test(current.innerText[current.innerText.length - 1]) === false) {
        current.innerText = eval(current.innerText);

        ifEqualClicked = 'clicked';
    }
}


equalBtn.addEventListener('click', equal);
delBtn.addEventListener('click', del)
AC.addEventListener('click', allClear);


dot.addEventListener('click' , 
    (arg) => {
        let array = current.innerText.split(/[=+/-]/);
        if(array[array.length - 1].includes('.') || checkNum.test(current.innerText[current.innerText.length - 1]) === true   ){
            return
        } else {
            current.innerText += '.'
        }
    }
)

//        key darahad ajillah functions START


document.addEventListener('keyup', 
    (par) => {
        if(par.keyCode === 49) {

            if(ifEqualClicked === 'clicked') {
                current.innerText = 1 ;
                ifEqualClicked = '';
                return
            }

            if(exceptZero.test(current.innerText) == true && current.innerText.length == 1 ) {
                current.innerText = ''
                current.innerText += 1
            } else {
                current.innerText += 1
            }

        }

        //    2

        if(par.keyCode === 50) {

            if(ifEqualClicked === 'clicked') {
                current.innerText = 2 ;
                ifEqualClicked = '';
                return
            }

            if(exceptZero.test(current.innerText) == true && current.innerText.length == 1 ) {
                current.innerText = ''
                current.innerText += 2
            } else {
                current.innerText += 2
            }

        }

        //      3

        if(par.keyCode === 51) {
            if(ifEqualClicked === 'clicked') {
                current.innerText = 3 ;
                ifEqualClicked = '';
                return
            }

            if(exceptZero.test(current.innerText) == true && current.innerText.length == 1 ) {
                current.innerText = ''
                current.innerText += 3
            } else {
                current.innerText += 3
            }
        }

        //  4

        if(par.keyCode === 52) {
            if(ifEqualClicked === 'clicked') {
                current.innerText = 4 ;
                ifEqualClicked = '';
                return
            }

            if(exceptZero.test(current.innerText) == true && current.innerText.length == 1 ) {
                current.innerText = ''
                current.innerText += 4
            } else {
                current.innerText += 4
            }
        }

        //  5

        if(par.keyCode === 53) {
            if(ifEqualClicked === 'clicked') {
                current.innerText = 5 ;
                ifEqualClicked = '';
                return
            }

            if(exceptZero.test(current.innerText) == true && current.innerText.length == 1 ) {
                current.innerText = ''
                current.innerText += 5
            } else {
                current.innerText += 5
            }
        }

        //  6

        if(par.keyCode === 54) {
            if(ifEqualClicked === 'clicked') {
                current.innerText = 6 ;
                ifEqualClicked = '';
                return
            }

            if(exceptZero.test(current.innerText) == true && current.innerText.length == 1 ) {
                current.innerText = ''
                current.innerText += 6
            } else {
                current.innerText += 6
            }
        }
        
        //  7

        if(par.keyCode === 55) {
            if(ifEqualClicked === 'clicked') {
                current.innerText = 7 ;
                ifEqualClicked = '';
                return
            }

            if(exceptZero.test(current.innerText) == true && current.innerText.length == 1 ) {
                current.innerText = ''
                current.innerText += 7
            } else {
                current.innerText += 7
            }
        }

        //  8

        if(par.keyCode === 56) {
            if(ifEqualClicked === 'clicked') {
                current.innerText = 8 ;
                ifEqualClicked = '';
                return
            }

            if(exceptZero.test(current.innerText) == true && current.innerText.length == 1 ) {
                current.innerText = ''
                current.innerText += 8
            } else {
                current.innerText += 8
            }
        }

        //  9

        if(par.keyCode === 57) {
            if(ifEqualClicked === 'clicked') {
                current.innerText = 9 ;
                ifEqualClicked = '';
                return
            }

            if(exceptZero.test(current.innerText) == true && current.innerText.length == 1 ) {
                current.innerText = ''
                current.innerText += 9;
            } else {
                current.innerText += 9 ;
            }
        }

        //    0

        if(par.keyCode === 48) {
            if(ifEqualClicked === 'clicked') {
                current.innerText = 0 ;
                ifEqualClicked = '';
                return
            }

            if(exceptZero.test(current.innerText) == true && current.innerText.length == 1 ) {
                current.innerText = ''
                current.innerText += 0
            } else {
                current.innerText += 0
            }
        }

        //   .

        if(par.keyCode === 190) {
            let array = current.innerText.split(/[=+/-]/);
            if(array[array.length - 1].includes('.') || checkNum.test(current.innerText[current.innerText.length - 1]) === true   ){
                return
            } else {
                current.innerText += '.'
            }
        }

        //   DEL 

        if(par.keyCode === 8) {
            if(current.innerText.length == 1) {
                console.log('1 hen char uldlee')
                current.innerText = 0;
            } else {
                current.innerText = current.innerText.substring(0, current.innerText.length - 1) 
            }
        }

        //    /

        if(par.keyCode === 191) {
            if(ifEqualClicked === 'clicked') {
                ifEqualClicked = '';
            }

            if(checkNum.test(current.innerText[current.innerText.length - 1]) === false) {
                current.innerText += '/';
            } else if (checkNum.test(current.innerText) === true) {
                let newCurrent = current.innerText.substring(0, current.innerText.length - 1);
                newCurrent += '/';
                current.innerText = newCurrent;
                console.log()
            }
        }

        //    *

        if(par.keyCode === 106) {
            alert('42')
        }

















    }
)



//        key darahad ajillah functions END

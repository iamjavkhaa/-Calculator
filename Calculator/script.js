const customColumnInput = document.querySelector('.custom-column')
const customRowInput = document.querySelector('.custom-row')


let customNumberColumn = document.querySelector('.custom-column').value
function updateCustomNumberColumn() {
    customNumberColumn = document.querySelector('.custom-column').value
}



let customNumberRow = document.querySelector('.custom-row').value
function updateCustomNumberRow() {
    customNumberRow = document.querySelector('.custom-row').value
}



function addColumn() {
    let rows = document.getElementsByClassName('tr')
    rows = [...rows]
    
    for(var i = 0; i < rows.length; i++) {
        let child = document.createElement('input')
        child.className = 'td';

        rows[i].appendChild(child)
    }
}



function addRow() {
    let grandParent = document.querySelector('#grand-parent')   
    let rows = document.getElementsByClassName('tr')
    rows = [...rows]

    let newRow = document.createElement('div')
    newRow.className = 'tr'

    let trChildCount = rows[0].childElementCount;
    console.log(trChildCount)
    
    for(var i = 0; i < trChildCount; i++) {
        let child = document.createElement('input')
        child.className = 'td'
        newRow.appendChild(child)
    }
        
    grandParent.appendChild(newRow)
}



function deleteColumn() {
    let rows = document.getElementsByClassName('tr')

    if(rows[0].childElementCount > 1) {
        for(var i = 0; i < rows.length; i++) {
            rows[i].lastElementChild.remove()
        } 
    }
}




function deleteRow() {
    let rows = document.getElementsByClassName('tr')
    rows = [...rows]

    if(rows.length > 1) {
        rows[rows.length - 1].remove()
    }
}


//   custom column start
function addCustomColumn() {
    for(var i = 0; i < customNumberColumn; i++) {
        addColumn();
    }
    customColumnInput.value = ''
    updateCustomNumberColumn()
}


customColumnInput.addEventListener('focus', 
    (arg) => {
        document.addEventListener('keyup', 
            (arg) => {
                if(arg.keyCode === 13) {
                    addCustomColumn();
                }
            }
        )
    }
)
//   custom column end



//   custom row start
function addCustomRow() {
    for(var i = 0; i < customNumberRow; i++) {
        addRow();
    }
    customRowInput.value = ''
    updateCustomNumberRow()
}


customRowInput.addEventListener('focus', 
    (arg) => {
        document.addEventListener('keyup', 
            (arg) => {
                if(arg.keyCode === 13) {
                    addCustomRow();
                }
            }
        )
    }
)

//   custom row end





/////////////////////////////////////////////////////

// function createTable() {
//     var a, b, tableElem, rowElem, colElem;

//     a = document.getElementById('tb1').value;
//     b = document.getElementById('tb2').value;

//     if (a == "" || b == "") {
//         alert("Please enter some numeric value");
//     } else {
//         tableElem = document.createElement('table');

//         for (var i = 0; i < a; i++) {
//             rowElem = document.createElement('tr');

//             for (var j = 0; j < b; j++) {
//                 colElem = document.createElement('td');
//                 //colElem.appendChild(document.createTextNode(j + 1));
//                 rowElem.appendChild(colElem);
//             }

//             tableElem.appendChild(rowElem);
//         }

//         document.body.appendChild(tableElem);


//     }
// }

// $(document).ready(function() {
//     createTable();
// });

function addColumn() {
    let rows = document.getElementsByClassName('tr')
    let = [...rows]
    
    for(var i = 0; i < rows.length; i++) {
        let child = document.createElement('div')
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
        let child = document.createElement('div')
        child.className = 'td'
        newRow.appendChild(child)
    }
        
    grandParent.appendChild(newRow)
}


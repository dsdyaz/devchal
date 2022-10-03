fetch('./data/events.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

function renderColumns(){
    const wrap = document.getElementById('timeline')
    const columnBlock = document.createElement('div')
    columnBlock.className = 'columns'
    columnArray = []
    const columns = document.createDocumentFragment()
    for(let i=0; i<100; i++){
        const e = document.createElement('div')
        columns.innerHtml = columnArray[i]
        e.id = i
        columns.appendChild(e)
    }
    columnBlock.appendChild(columns)
    wrap.appendChild(columnBlock)
    
}

renderColumns()
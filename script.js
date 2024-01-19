const etchContainer = document.querySelector('div')
etchContainer.style.display = "flex"

for(let i = 0; i < 16; i++){
    etchContainer.append(document.createElement('div'))
}
const nodeListDiv = etchContainer.querySelectorAll('div')
console.log(nodeListDiv)

for(let i = 0; i < nodeListDiv.length; i++){
    for(let k = 1; k < 16; k++){
        let tempDIV = document.createElement('div')
        tempDIV.style.flex = 'auto'
        nodeListDiv[i].style.display = 'flex'

        nodeListDiv[i].append(tempDIV)
        nodeListDiv[i].style.flex = 'auto'
        nodeListDiv[i].style.flexDirection = 'column'
    }
}

console.log(etchContainer.querySelectorAll('div'))
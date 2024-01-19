const etchContainer = document.querySelector('div')

for(let i = 0; i < 16; i++){
    etchContainer.append(document.createElement('div'))
}
const nodeListDiv = etchContainer.querySelectorAll('div')
console.log(nodeListDiv)

for(let i = 0; i < nodeListDiv.length; i++){
    for(let k = 1; k < 16; k++){
        nodeListDiv[i].append(document.createElement('div'))
    }
}

console.log(etchContainer.querySelectorAll('div'))
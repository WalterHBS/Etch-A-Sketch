const body = document.querySelector('body')
const etchContainer = document.querySelector('div')
etchContainer.style.display = "flex";
let standardSize = 16
function createGrid(size){
//Creates 16 divs inside of the container
for(let i = 0; i < size; i++){
    etchContainer.append(document.createElement('div'))
}
const nodeListDiv = etchContainer.querySelectorAll('div')
console.log(nodeListDiv)

// iterates through each div inside
// of the container and makes 16 more divs inside of it.

for(let i = 0; i < nodeListDiv.length; i++){
    for(let k = 1; k < size; k++){
        let tempDIV = document.createElement('div')
        tempDIV.style.flex = 'auto'
        nodeListDiv[i].style.display = 'flex'

        tempDIV.addEventListener('mouseover', () => tempDIV.style.backgroundColor = 'black')
        nodeListDiv[i].append(tempDIV)
        nodeListDiv[i].style.flex = 'auto'
        nodeListDiv[i].style.flexDirection = 'column'
    }
}
}

createGrid(standardSize)
let chooseSize = document.createElement('button')
chooseSize.textContent = 'Grid Size'
chooseSize.addEventListener('click', () => {
    let size = prompt('How many many cells, hight by width')
    let nodeListDelete = etchContainer.querySelectorAll('div')
    for(let i = 0; i < nodeListDelete.length; i++){
        let celllist = nodeListDelete[i].querySelectorAll('div')
        nodeListDelete[i].remove()
    }
    createGrid(size)
})
body.append(chooseSize)
console.log(etchContainer.querySelectorAll('div'))
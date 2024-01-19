const etchContainer = document.querySelector('div')
etchContainer.style.display = "flex"

//Creates 16 divs inside of the container
for(let i = 0; i < 16; i++){
    etchContainer.append(document.createElement('div'))
}
const nodeListDiv = etchContainer.querySelectorAll('div')
console.log(nodeListDiv)

// iterates through each div inside
// of the container and makes 16 more divs inside of it.

for(let i = 0; i < nodeListDiv.length; i++){
    for(let k = 1; k < 16; k++){
        let tempDIV = document.createElement('div')
        tempDIV.style.flex = 'auto'
        nodeListDiv[i].style.display = 'flex'

        tempDIV.addEventListener('mouseover', () => tempDIV.style.backgroundColor = 'black')
        nodeListDiv[i].append(tempDIV)
        nodeListDiv[i].style.flex = 'auto'
        nodeListDiv[i].style.flexDirection = 'column'
    }
}

console.log(etchContainer.querySelectorAll('div'))
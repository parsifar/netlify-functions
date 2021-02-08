console.log('script started...')

document.querySelector('#three').addEventListener('click' , handleClick)

function handleClick(e){
e.preventDefault()
console.log('click')
}
const newBio=()=>{
    let newBio=document.querySelector('.bio')
newBio.innerHTML=" Lacoste is here to help you look great!";
}
//now lets transform a box to a circle//

const boxToCircle=()=>{
    let square=document.querySelector('.box')
    square.classList.toggle('circle')

}

const addImage=()=>{
    let imageContainer=document.querySelector('.imageDiv')
    let imgTag=document.createElement('img')
    imgTag.src="https://www.pngarts.com/files/5/Nikola-Jokic-Free-PNG-Image.png"
    imageContainer.append(imgTag)
}
const moveBoxRight=()=>{
    let moveContainer=document.querySelector('.move')
    moveContainer.classList.add('moveBox')
}
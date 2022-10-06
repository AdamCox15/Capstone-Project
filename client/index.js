const baseURL = 'http://localhost:4567'

const showTattoos = document.querySelector('#tattooDisplay')
const makeList = document.querySelector('#makeTattooList')

// Axios request to get tattoos array
//Loop over that array
const displayTattoos = (arr) => {
for(let i =0; i < arr.length; i++){
    createTattooList(arr[i])
    console.log(arr[i])
  }
}


const createTattooList = (tattoo) => {
    const tattooList = document.createElement('section')
    tattooList.classList.add('tattoo-list')

    tattooList.innerHTML = `
    <img id = "ink1" src = ${tattoo.picture} alt='Tattoo Image')" />
    <p>${tattoo.name}</p>

    `
    showTattoos.appendChild(tattooList);
}

const getAllTattoos = () => {
    axios.get(`${baseURL}/getTattoo`)
    .then((res) => {
        displayTattoos(res.data)
        console.log(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}

const addTattoo = () => {
   let newInput = document.querySelector('#new-tattoo')
   let newImage = document.querySelector('#img-new')
    let bodyObj = { 
        name: newInput.value,
        picture: newImage.value
    }
    axios.post(`${baseURL}/addToList`, bodyObj)
    .then((res) => {
        showTattoos.innerHTML = ''
        displayTattoos(res.data)
        console.log(res.data)
        newInput.value = ''
        newImage.value = ''
    })
    .catch((err) => {
        console.log(err)
    })
}

// ** Working on drag and drop for later **

//     const clickDrag = (event) => {

//     let shiftX = event.clientX - event.target.getBoundingClientRect().left;
//     let shiftY = event.clientY - event.target.getBoundingClientRect().top;
  
//     event.target.style.position = 'absolute';
//     event.target.style.zIndex = 1000;
//     document.body.append(tattoo.picture);
  
//     moveAt(event.pageX, event.pageY);
  
    
//     function moveAt(pageX, pageY) {
//       event.target.style.left = pageX - shiftX + 'px';
//       event.target.style.top = pageY - shiftY + 'px';
//     }
  
//     function onMouseMove(event) {
//       moveAt(event.pageX, event.pageY);
//     }
  
  
//     document.addEventListener('mousemove', onMouseMove);
  

//     event.target.onmouseup = function() {
//       document.removeEventListener('mousemove', onMouseMove);
//       event.target.picture.onmouseup = null;
//     };
  
//   };
  
//   .target.ondragstart = function() {
//     return false;
//   };





document.querySelector('#dropDown').addEventListener('click', getAllTattoos);
document.querySelector('#new-btn').addEventListener('click', addTattoo)
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

// const personalTattooList = (name) => {
//     const newList = document.createElement('section')
//     newList.classList.add()

//     newList.innerHTML = `
//     <form>
//     <input 
//         type='text'
//         placeholder='Your name'/>
//     <input 
//         type='text'
//         placeholder='The name of the new tattoo!'/>
//     <input 
//         type='text'
//         id="img"
//         placeholder='Paste an image URL'/>
//     <button>add house</button>
// </form>

//     `
// }



const createTattooList = (tattoo) => {
    const tattooList = document.createElement('section')
    tattooList.classList.add('tattoo-list')

    tattooList.innerHTML = `
    <img id = "ink1" src = ${tattoo.picture} alt='Tattoo Image' onclick="getList(${{id: tattoo.id, name: tattoo.name, picture: tattoo.picture}})" />
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



document.querySelector('#dropDown').addEventListener('click', getAllTattoos);
document.querySelector('#new-btn').addEventListener('click', addTattoo)
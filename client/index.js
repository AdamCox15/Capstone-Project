const baseURL = 'http://localhost:4567'

const showTattoos = document.querySelector('#tattooDisplay')

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
    <img src = ${tattoo.picture} alt='Tattoo Image' />
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



document.querySelector('#dropDown').addEventListener('click', getAllTattoos);
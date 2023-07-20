(async() => {


    function randall() {
        console.log('randall')
    }
    const img = document.querySelector('#ImagenPK');
    const apiButton = document.getElementById('apiButton');
    const apiData = document.getElementById('parrafo');
    const base_xp = document.getElementById('h3xp')
    const callApi = () => {

        fetch('https://pokeapi.co/api/v2/pokemon/charizard')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                base_xp.innerText = `experiencia base : ${JSON.stringify(data.base_experience)}`;
                img.src = data.sprites.other.dream_world.front_default;

            })
            .catch(e => console.error(new Error(e)));

    }



    apiButton.addEventListener('click', callApi)




    randall();

})()
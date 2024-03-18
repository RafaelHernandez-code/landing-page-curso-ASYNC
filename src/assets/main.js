const API = 'https://game-of-thrones1.p.rapidapi.com/Characters';
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '32e9c4da8fmsh29ea586fe6e14f9p113e22jsnb3246fbac303',
		'X-RapidAPI-Host': 'game-of-thrones1.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options)
    const data = await response.json();
    return data;
}

(async () =>{
    let view= '';
    try{
        const characters = await fetchData(API);
        characters.slice(0,8).forEach(character => {
            view += `
        <div class=" grid justify-items-center">
            <div
            class=" group-hover:opacity-75 lg:aspect-none">
            <img src="${character.imageUrl}" alt="${character.fullName}" class="w-28 rounded-3xl ">
            </div>
            <div class="mt-4 flex justify-between">
            <h3 class="text-lg text-center  text-zinc-300">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${character.fullName}<br>
                ${character.family}
            </h3>
            </div>
        </div>`;
        });
        content.innerHTML = view;
        console.log(view); 
    } catch(error){
        console.log(error);
    }
})();
async function fetchApiAll(){
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data.results;
}

fetchApiAll()
    .then((data)=>{
        
        const {id , name , image, origin} = data[0];
        

        const {name : nombre, url} = origin;
        
        console.log(id);
        console.log(name);
        console.log(image);
        console.log(data);

        console.log("-----------");
        console.log(nombre);
        console.log(url);

    })
    .catch((error)=>{
        console.log(`El error es ${error}`);
    })
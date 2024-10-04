    const API_URL_RANDOM = "https://api.thecatapi.com/v1/images/search?limit=10";
    const API_URL_FAVORITES = "https://api.thecatapi.com/v1/favourites?limit=20";
    const API_URL_FAVORITES_DELETE = (id) => 'https://api.thecatapi.com/v1/favourites/'+id;
    //KEY : ""
    const KEY = "live_Ys95SkmS6fMQGTcFd5fevudHitE9djPf8YUU5riZpsPLAQ6lI2LbVu6pOZ25UxU8";

const spanError=document.getElementById("error")

async function loadRandomMichis() {
    const res= await fetch(API_URL_RANDOM);
    const data = await res.json();
    console.log('Randoms');
    console.log(data);

    if(res.status !==200){
        spanError.innerHTML ="Hubo un error: "+res.status;
    }else{
        const img0 = document.getElementById('img0');
            const btn0 = document.getElementById('btn0');
        const img1 = document.getElementById('img1');
            const btn1 = document.getElementById('btn1');
        const img2 = document.getElementById('img2');
            const btn2 = document.getElementById('btn2');
        const img3 = document.getElementById('img3');
            const btn3 = document.getElementById('btn3');        
        const img4 = document.getElementById('img4');
            const btn4 = document.getElementById('btn4');
        const img5 = document.getElementById('img5');
            const btn5 = document.getElementById('btn5');
        const img6 = document.getElementById('img6');
            const btn6 = document.getElementById('btn6');
        const img7 = document.getElementById('img7');
            const btn7 = document.getElementById('btn7');
        const img8 = document.getElementById('img8');
            const btn8 = document.getElementById('btn8');
        const img9 = document.getElementById('img9');
            const btn9 = document.getElementById('btn9');

        img0.src = data[0].url;
        img1.src = data[1].url;
        img2.src = data[2].url;
        img3.src = data[3].url;
        img4.src = data[4].url;
        img5.src = data[5].url;
        img6.src = data[6].url;
        img7.src = data[7].url;
        img8.src = data[8].url;
        img9.src = data[9].url;

        btn0.onclick = () => likearFavoritesMichis(data[0].id);
        btn1.onclick = () => likearFavoritesMichis(data[1].id);
        btn2.onclick = () => likearFavoritesMichis(data[2].id);
        btn3.onclick = () => likearFavoritesMichis(data[3].id);
        btn4.onclick = () => likearFavoritesMichis(data[4].id);
        btn5.onclick = () => likearFavoritesMichis(data[5].id);
        btn6.onclick = () => likearFavoritesMichis(data[6].id);
        btn7.onclick = () => likearFavoritesMichis(data[7].id);
        btn8.onclick = () => likearFavoritesMichis(data[8].id);
        btn9.onclick = () => likearFavoritesMichis(data[9].id);


    }
}

async function loadLikesMichis() {
    const res= await fetch(API_URL_FAVORITES,{
        method: 'GET',
        headers: {
            'x-api-key': KEY,
        }
    });
    const data = await res.json();
    console.log('Likes')
    console.log(data);

    if(res.status !== 200) {
        spanError.innerHTML = "Hubo un error:" + res.status;
        console.log('Error');
    }else{
        const favoritesMichis = document.getElementById("favoritesMichis");
        const h1 = document.createElement("h1");
        const h1Text = document.createTextNode("Michis que te gustan");
        
        favoritesMichis.innerHTML="";
        h1.appendChild(h1Text);
        favoritesMichis.appendChild(h1);

        data.forEach(michi => {
            const likesMichis = document.getElementById("favoritesMichis");
            const article = document.createElement("article");
            const img = document.createElement("img");
            const btn = document.createElement("button");
            const btnText = document.createTextNode('dis-like');

            img.src = michi.image.url;
            img.width=150;
            btn.appendChild(btnText);
            btn.onclick = () => unlikearFavoritesMichis(michi.id);
            article.appendChild(img);
            article.appendChild(btn);
            likesMichis.appendChild(article);
        });
    }

}

async function likearFavoritesMichis(id) {
    console.log("likeando")
    const res = await fetch(API_URL_FAVORITES, {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json',
            'x-api-key': KEY,
        },
        body: JSON.stringify({
            image_id: id
        }),
    });

    const data = await res.json();

    console.log('Save');
    console.log(res);

    if(res.status !== 200){
        spanError.innerHTML="Hubo un error: "+res.status+" -> "+data.message;
    }else{
        alert("Michi guardo en favoritos")
        loadLikesMichis()
    }
    
}

async function unlikearFavoritesMichis(id){
    const res = await fetch(API_URL_FAVORITES_DELETE(id), {
        method: 'DELETE',
        headers:{
            'x-api-key': KEY,
        }
    });

    const data = await res.json();

    if(res.status !== 200){
        spanError.innerHTML="Hubo un error: "+res.status+" -> "+data.message;
    }else{
        alert("Michi descartado")
        loadLikesMichis()
    }
}
loadRandomMichis();
loadLikesMichis()
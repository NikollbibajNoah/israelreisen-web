const assets = './assets.json';


const gallery = document.getElementById('gallery');
const closeBtn = document.getElementById('closeBtn');
let preview = document.getElementById('preview');
const previewImg = document.getElementById('previewImg');

const hotels = document.getElementById('hotels');


console.log('JS loaded!');

function loadData() {
    fetch(assets)
    .then((res) => {
        if (!res.ok) throw new Error('Could not load file!');

        return res.json();
    }).then((data) => {
        //data here

        ///Gallery
        for (let i = 0; i < data.gallery.length; i++) {
            const img = data.gallery[i];

            let liItem = document.createElement('li');
            liItem.className = 'gallery-item';
            liItem.style.background = 'url("' + img + '")';
            liItem.style.backgroundPosition = 'center';
            liItem.style.backgroundSize = 'cover';
            gallery.appendChild(liItem);
        }

        
        for (let i = 0; i < gallery.children.length; i++) {
            let item = gallery.children[i];

            ///event listener for all imgs
            item.addEventListener('click', () => {
                preview.style.display = 'inline-block';

                const img = data.gallery[i];

                //Set right Img
                previewImg.src = img;
            });
        }


        ///Hotels
        for (let i = 0; i < data.hotels.length; i++) {
            const img = data.hotels[i];

            let liItem = document.createElement('li');
            liItem.className = 'hotel-item';
            liItem.style.background = 'url("' + img + '")';
            liItem.style.backgroundPosition = 'center';
            liItem.style.backgroundSize = 'cover';
            hotels.appendChild(liItem);
        }

        for (let i = 0; i < hotels.children.length; i++) {
            let item = hotels.children[i];

            ///event listener for all imgs
            item.addEventListener('click', () => {
                preview.style.display = 'inline-block';

                const img = data.hotels[i];

                //Set right Img
                previewImg.src = img;
            });
        }
    });
}

loadData();

//Close Preview
closeBtn.addEventListener('click', () => {

    preview.style.display = 'none';
});
async function fetchData() {
    try {
        const response = await fetch('assets/js/Api.json');
        const productData = await response.json();
        CreateCard(productData);
    } catch (error) {
        console.error('Bir hata oluştu:', error);
    }
}

function CreateCard(productData) {
    productData.forEach(item => {

        let col4 = document.createElement('div');
        col4.className = 'col-3 mb-4';
        let card = document.createElement('div');
        card.className = 'card';
        card.style = 'width: 18rem;';
        col4.appendChild(card)

        let img = document.createElement('img');
        img.className = 'card-img-top';
        img.alt = item.name;
        img.src = item.image;
        img.style = 'width: 100px;';
        img.style = 'height: 280px;';
        card.appendChild(img);

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        card.appendChild(cardBody);

        let h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.textContent = item.name;
        cardBody.appendChild(h5);

        let h52 = document.createElement('h5');
        h52.className = 'card-title';
        h52.textContent =`Catagory: ${item.category}`;
        cardBody.appendChild(h52);

        let p = document.createElement('p');
        p.className = 'card-text';
        p.textContent = `${item.price} AZN`;
        let p1 = document.createElement('p');
        p1.className = 'card-text';
        p1.textContent = ` count: ${item.count}`;
        cardBody.appendChild(p);
        cardBody.appendChild(p1);


        let addBtn = document.createElement('button');
        addBtn.className = 'btn btn-warning text-light';
        addBtn.textContent = 'Add Product';
        cardBody.appendChild(addBtn);

        document.querySelector('#card-parent-element').appendChild(col4);
    });



    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('keyup', (e) => {
        const searchText = e.target.value;
        performSearch(searchText)
    });

    function performSearch(searchText) {
        const cards = document.querySelectorAll('.col-3');

        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLocaleLowerCase()
            if (title.includes(searchText.toLocaleLowerCase())) {
                card.style.display = "block"
            } else {
                card.style.display = "none"

            }
        })
    }
}
document.addEventListener('DOMContentLoaded', function () {
    fetchData();
});

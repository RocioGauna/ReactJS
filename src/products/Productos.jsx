export const products = [{id: '1', categoryId: 'Skins', product: 'Skin - Annie', description: 'Annie is a child mage with immense pyrokinetic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier.', price: 40, img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_6.jpg'},
    {id: '2', categoryId: 'Skins', product: 'Skin - Eckko', price: 50, img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_19.jpg'},
    {id: '3', categoryId: 'Skins', product: 'Skin - Lulu', price: 60, img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_14.jpg'},
    {id: '4', categoryId: 'Champions', product: 'Champion - Caitlyn', price: 80, img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_1.jpg'},
    {id: '5', categoryId: 'Champions', product: 'Champion - Jinx', price: 100, img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_2.jpg'},
    {id: '6', categoryId: 'Champions', product: 'Champion - Ahri', price: 48, img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_3.jpg'},
];

export const bringProducts = new Promise ((resolve, reject) => {
    resolve(products);
});
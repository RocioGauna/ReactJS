export const products = [{id: '1', product: 'Skin - Annie', price: 40, img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_6.jpg'},
    {id: '2', product: 'Skin - Eckko', price: 50, img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_19.jpg'},
    {id: '3', product: 'Skin - Lulu', price: 60, img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_14.jpg'},
    {id: '4', product: 'Skin - Caitlyn', price: 80, img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_1.jpg'},
    {id: '5', product: 'Skin - Jinx', price: 100, img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_2.jpg'},
    {id: '6', product: 'Skin - Ahri', price: 48, img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_3.jpg'},
];

export const bringProducts = new Promise ((resolve, reject) => {
    resolve(products);
});
import { LoyaltyUser } from './enums.js';
export default class MainProperty {
    constructor(src, title, reviews) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    }
}
let yourMainProperty = new MainProperty('images/italian-property.jpg', 'Italian Property', [
    {
        name: 'Oliv',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '12-04-2021',
    },
]);

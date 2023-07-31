// Function Types challenge - Pass the code review
// 1. Add types to the function that returns the top 2 reviews specifically based on
// descending order. Make sure to use what you learned in the previous lessons.
// 2. Add types to the function in this file that shows the reviews when we click the button
import { showReviewTotal, populateUser, getTopTwoReviews } from './utils.js';
import { Permissions, LoyaltyUser } from './enums.js';
const propertyContainer = document.querySelector('.properties');
const reviewContainer = document.querySelector('.reviews');
const container = document.querySelector('.container');
const button = document.querySelector('button');
const footer = document.querySelector('.footer');
let isLoggedIn;
// Reviews
const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021',
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021',
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
    },
];
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
};
// Array of Properties
const properties = [
    {
        image: 'images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia',
        },
        contact: [+112343823978921, 'marywinkle@gmail.com'],
        isAvailable: true,
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland',
        },
        contact: [+1298239028490830, 'garydavis@hotmail.com'],
        isAvailable: false,
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true,
    },
];
// Functions
showReviewTotal(1, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);
let authorityStatus;
isLoggedIn = true;
function showDetails(authorityStatus, element, price) {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay);
    }
}
function add(firstValue, secondValue) {
    return firstValue + secondValue;
}
// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    const image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);
    propertyContainer.appendChild(card);
    showDetails(you.permissions, card, properties[i].price);
}
let count = 0;
function addReviews(array) {
    if (!count) {
        count++;
        const topTwo = getTopTwoReviews(array);
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div');
            card.classList.add('review-card');
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name;
            reviewContainer.appendChild(card);
        }
        container.removeChild(button);
    }
}
button.addEventListener('click', () => addReviews(reviews));
let currentLocation = ['London', '11.03', 17];
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';
// Classes
class Car {
    constructor(make, year, color) {
        this.make = make;
        this.year = year;
        this.color = color;
    }
}
// / 1. Add a Class that will let us create a main image, it should allow us to
// store the reviews, the src and title.
class mainImage {
    constructor(reviews, src, title) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    }
}
let yourMainProperty = new MainProperty();
const mainImageContainer = document.querySelector('.main-image');
const image = document.createElement('img');
image.setAttribute('src', yourMainProperty.src);
mainImageContainer.appendChild(image);

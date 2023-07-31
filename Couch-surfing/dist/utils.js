const reviewTotalDisplay = document.querySelector('#reviews');
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
import { LoyaltyUser } from './enums.js';
export function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : '';
    reviewTotalDisplay.innerHTML =
        value.toString() + ' Review' + makeMultiple(value) + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
}
export function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
export function showDetails(value, element, price) {
    if (value) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay);
    }
}
export function makeMultiple(value) {
    if (value > 1 || value == 0) {
        return 's';
    }
    else
        return '';
}
// const reviews: Review[] = [
// 	{
// 		name: 'Sheia',
// 		stars: 5,
// 		loyaltyUser: LoyaltyUser.GOLD_USER,
// 		date: '01-04-2021',
// 	},
// 	{
// 		name: 'Andrzej',
// 		stars: 3,
// 		loyaltyUser: LoyaltyUser.BRONZE_USER,
// 		date: '28-03-2021',
// 	},
// 	{
// 		name: 'Omar',
// 		stars: 4,
// 		loyaltyUser: LoyaltyUser.SILVER_USER,
// 		date: '27-03-2021',
// 	},
// ]
export function getTopTwoReviews(reviews) {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0, 2);
}

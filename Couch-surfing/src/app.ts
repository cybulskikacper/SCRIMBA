const reviewTotalDisplay = document.querySelector('#reviews')

let variable = true

const reviews = [
	{
		name: 'Sheia',
		stars: 5,
		loyaltyUser: true,
		date: '01-04-2021',
	},
	{
		name: 'Andrzej',
		stars: 3,
		loyaltyUser: false,
		date: '28-03-2021',
	},
	{
		name: 'Omar',
		stars: 4,
		loyaltyUser: true,
		date: '27-03-2021',
	},
]

// Solution
// function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
// 	const iconDisplay = isLoyalty ? '⭐' : ''
// 	reviewTotalDisplay.innerHTML =
// 		'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
// }

// showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

// 1. Funkcja która pokaże nam liczbę recenzji oraz wyswietli kto napisał ostatnią recenzje, dodatkowo jesli uzytownki ma loyalityuser na true ( boolean), to ma mu sie dodac gwiazdka na koncu

function showReviewTotal(value: number) {
	reviewTotalDisplay.innerHTML = 'review total |' + value.toString()
}

showReviewTotal(reviews.length)

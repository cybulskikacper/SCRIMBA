import { Permissions, LoyaltyUser } from './enums.js'
import { Price, Country } from './aliases.js'

export default interface Review {
	name: string
	stars: number
	loyaltyUser: LoyaltyUser
	date: string
}

export interface Info {
	image: string
	title: string
	price: number
}

export interface Location{
	firstLine: string
	city: string
	code: number
	country: Country
}

const reviews: Review[] = [
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
]

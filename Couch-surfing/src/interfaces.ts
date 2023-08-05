import { Permissions, LoyaltyUser } from './enums.js'
import { Price, Country } from './aliases.js'

export interface Review {
	name: string
	stars: number
	loyaltyUser: LoyaltyUser
	date: string
}

export interface Property {
	image: string
	title: string
	price: Price
	location: {
		firstLine: string
		city: string
		code: number | string
		country: Country
	}
	contact: [number, string]
	isAvailable: boolean
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

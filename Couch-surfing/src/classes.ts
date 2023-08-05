import { Property, Review } from './interfaces.js'
import { Permissions, LoyaltyUser } from './enums.js'

export default class MainProperty {
	src: string
	title: string
	reviews: Review[]
	constructor(src: string, title: string, reviews: Review[]) {
		this.src = src
		this.title = title
		this.reviews = reviews
	}
}
let yourMainProperty = new MainProperty('images/italian-property.jpg', 'Italian Property', [
	{
		name: 'Oliv',
		stars: 5,
		loyaltyUser: LoyaltyUser.GOLD_USER,
		date: '12-04-2021',
	},
])

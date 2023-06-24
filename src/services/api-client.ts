import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'de85c86dc9124a15876619c0e35afacd'
	}
})

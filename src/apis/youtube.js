import axios from 'axios';

const KEY = 'AIzaSyDpqJccaWyBRbh2MJM9BVdvZ-rDZNwP4xQ';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: `${KEY}`
	}
});
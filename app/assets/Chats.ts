export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Gaby',
		imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/Gaby.jpg',
	}, {
		id: 'u2',
		name: 'Elon Musk',
		imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
	}],
	messages: [{
		id: 'm1',
		content: 'Heck yes!',
		createdAt: '2020-10-10T12:48:00.000Z',
		user: {
			id: 'u1',
			name: 'Gaby',
		},
	}, {
		id: 'm2',
		content: 'Sure!',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Elon Musk',
		},
	}, {
		id: 'm3',
		content: 'Wanna join me? :]',
		createdAt: '2020-10-03T14:49:40.000Z',
		user: {
			id: 'u2',
			name: 'Elon Musk',
		},
	}, {
		id: 'm4',
		content: 'Good as well, preparing for an afternoon stroll at the park.',
		createdAt: '2020-10-03T14:50:00.000Z',
		user: {
			id: 'u1',
			name: 'Gaby',
		},
	}, {
		id: 'm5',
		content: 'Thank you! Enjoying my day off. What about u?',
		createdAt: '2020-10-03T14:51:00.000Z',
		user: {
			id: 'u1',
			name: 'Gaby',
		},
	}, {
		id: 'm6',
		content: 'How are you today?',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Elon Musk',
		},
	}, {
		id: 'm7',
		content: 'Cute pup!',
		createdAt: '2020-10-03T14:53:00.000Z',
		user: {
			id: 'u2',
			name: 'Elon Musk',
		},
	}]
}


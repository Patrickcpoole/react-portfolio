export default {
	name: 'skill',
	title: 'Skill',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			description: 'Title of skill',
			type: 'string',
		},
		{
			name: 'order',
			title: 'Order',
			description: 'Order of skill son page',
			type: 'number',
		},
		{
			name: 'skillType',
			title: 'Skill Type',
			description: 'Type of skill',
			type: 'string',
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
};

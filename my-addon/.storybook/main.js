module.exports = {
	stories: [],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/preset-create-react-app",
		"../src/preset.js", //👈 Our addon registered here
	],
};

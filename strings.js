/*
	For use with https://github.com/airbnb/polyglot.js/
	The |||| separates strings used for different forms of plurals
*/
const langStrs = {
	"en": {
		"useRightToLeft": false,
		"title": "Gym badge progress",
		"appraiseButton": "Select a screenshot to appraise",
		"failedBadgeTest": "Couldn't work out your badge level.",
		"failedProgressBarTest": "Failed to find a progress bar.",
		"tryDifferentImage": "Try a different image.",
		"goldBadgeComment": "That's a lovely gold badge you have, well done.",
		"obstruction": "(There may be a Pokémon obscuring the progress bar)",
		"levelUpYourBadge": "Here's a few ways you can level your badge up",
		"completeRaids": "Complete 1 raid |||| Complete %{smart_count} raids",
		"placePokemon": "Place %{numPokemon} Pokémon in this gym",

		"inGymFor": "Have a Pokémon in the gym for %{numDays}%{timeSpacer}%{numHours}",
		"numDays": "%{smart_count} day |||| %{smart_count} days",
		"timeSpacer": ", ",
		"numHours": "%{smart_count} hour |||| %{smart_count} hours",

		"defeatGymPokemon": "Defeat %{numPokemon} %{cp}CP Pokémon in this gym",
		"feedBerries": "Feed Pokémon in this gym 1 berry |||| Feed Pokémon in this gym %{smart_count} berries",

		"basic": "Basic",
		"bronze": "Bronze",
		"silver": "Silver",
		"gold": "Gold",

		"badgePercent": "%{badge}%{unsure} badge at ~%{percent}%",
		"unsure": "?",

		"neededBXP": "You need about %{neededBXP} more BXP%{errorMargin}",
		"errorMarginStr": " (±%{errorMargin})",
	},
}
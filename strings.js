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

		"languages": "Languages",
		"thisLanguage": "English",
		"darkMode": "Dark Mode",
		"trackedGyms": "Tracked Gyms",
		"selectTrackedTitle": "Select a tracked gym to view",
		"close": "Close",
		"undo": "Undo",
		"gridTip": "Tap a badge to see more info!",
		"addToTracked": "Add this result to a tracked gym",
		"trackNewGym": "Keep track of this as a new gym",
		"gymsAboveBXP": "1 other gym is already above this BXP total |||| %{smart_count} other gyms are already above this BXP total",
		"enterNewGym": "Please enter the name of the new gym",
		"duplicateName": "There is already a gym with this name.",
		"nameConfirm": "Is %{newGymName} correct?",
		"trackedGymCount": "You are tracking 1 gym |||| You are tracking %{smart_count} gyms",
		"nothingTracked": "You have no tracked gyms",
		"startDate": "Tracking started: %{date} at %{time}",
		"lastUpdated": "Last updated: %{date} at %{time}",
		"levelUpAround": "You should earn the %{badge} badge around %{date}",
		"enterGymNote": "Enter a note about this gym",
		"removeDataPoint": "Remove the most recent data point",
		"deleteGym": "Delete this tracked gym",
		"confirmDeleteGym": "Are you sure you want to delete this tracked gym?",
		"confirmRemoveDataPoint": "Are you sure you want to remove the latest data point?",
		"translatedBy": "Translated by: %{translators}",
		"madeByQOAL": "Made by QOAL",
		"paypalText": "Found this useful? Tip me",

		"translators": "Names of people that did this translation"
	},
}
var college = ["ALABAMA", "ARIZONA", "ARIZONA STATE", "ARKANSAS", "AUBURN", "BAYLOR", "BOSTON COLLEGE", "CALIFORNIA", "CLEMSON", "COLORADO", "DUKE", "FLORIDA", "FLORIDA STATE", "GEORGIA", "GEORGIA TECH", "ILLINOIS",
    "INDIANA", "IOWA", "IOWA STATE", "KANSAS", "KANSAS STATE", "KENTUCKY", "LOUISIANA STATE", "LOUISVILLE", "MARYLAND", "MIAMI", "MICHIGAN", "MICHIGAN STATE", "MINNESOTA", "MISSISSIPPI", "NEBRASKA", "NORTH CAROLINA STATE",
    "NORTH CAROLINA", "NORTHWESTERN", "NOTRE DAME", "OHIO STATE", "OKLAHOMA", "OKLAHOMA STATE", "OREGON", "OREGON STATE", "PENN STATE", "PITTSBURGH", "PURDUE", "RUTGERS", "SOUTH CAROLINA", "SYRACUSE", "TENNESSEE", "TEXAS",
    "TEXAS A&M", "TEXAS CHRISTIAN", "TEXAS TECH", "UCLA", "USC", "UTAH", "VANDERBILT", "VILLANOVA", "VIRGINIA", "VIRGINIA TECH", "WAKE FOREST", "WASHINGTON", "WASHINGTON STATE", "WEST VIRGINIA", "WISCONSIN", "STANFORD"
];
var color = ["#9e1b32", "#cc0033", "#8c1d40", "#9D2235", "#e87722", "#1d3c34", "#98002E", "#003262", "#f66733", "#cfb87c", "#001a57", "#fa4616", "#782f40", "#ba0c2f", "#eeb211", "#e84a27", "#990000", "#ffcd00", "#c8102e", "#0051ba",
    "#512888", "#0033a0", "#461d7c", "#Ad0000", "#e03a3e", "#f47321", "#00274c", "#18453b", "#7a0019", "#13294b", "#c8102e", "#cc0000", "#4B9CD3", "#4e2a84", "#c99700", "#bb0000", "#841617", "#ff7300", "#154733", "#dc4405", "#093162",
    "#cdb87d", "#98700d", "#cc0033", "#73000a", "#d44500", "#FF8200", "#bf5700", "#500000", "#4d1979", "#cc0000", "#3284BF", "#9d2235", "#cc0000", "#866d4b", "#3DB7E4", "#e57200", "#8a1e41", "#a67f31", "#4b2e83", "#981e32", "#eaaa00",
    "#c50505", "#8C1515"
];

function displayColor(userInput, clickedColor) {
    var collegeName = userInput.toUpperCase();
    console.log("finding color for: " + collegeName);
    if (college.includes(collegeName)) {
        var newColor = color[college.indexOf(collegeName)];
        console.log("color code for " + collegeName + " is " + newColor);
        $("#" + clickedColor).css("background-color", newColor);
        testForMatch(color, newColor);
    }
    else {
        console.log("no color match found");
    }
}

function testForMatch(color, newColor) {
    //takes the college team color and see whether or not it has a match
    //matches found so far: arizona and rutgers, iowa state and nebraska, nc state and utah and texas tech!
    var indexes = [],
        i = -1;
    while ((i = color.indexOf(newColor, i + 1)) != -1) {
        if (newColor === color[i]) {
            indexes.push(i);
            var colorMatch = college[i];
            console.log("college with this color: " + colorMatch);
        }

    }
    if (indexes.length > 1) {
        console.log("matches found!");
    }
    else {
        console.log("unique color!");
    }
    console.log("number of " + newColor + ":" + indexes.length);
}

$(document).ready(function() {
    console.log("script.js connected");
    console.log("number of colleges: " + college.length);
    console.log("number of colors: " + color.length);

    //jquery for autocomplete
    $('input.autocomplete').autocomplete({
        data: {
            "ALABAMA": null,
            "ARIZONA": null,
            "ARIZONA STATE": null,
            "ARKANSAS": null,
            "AUBURN": null,
            "BAYLOR": null,
            "BOSTON COLLEGE": null,
            "CALIFORNIA": null,
            "CLEMSON": null,
            "COLORADO": null,
            "DUKE": null,
            "FLORIDA": null,
            "FLORIDA STATE": null,
            "GEORGIA": null,
            "GEORGIA TECH": null,
            "ILLINOIS": null,
            "INDIANA": null,
            "IOWA": null,
            "IOWA STATE": null,
            "KANSAS": null,
            "KANSAS STATE": null,
            "KENTUCKY": null,
            "LOUISIANA STATE": null,
            "LOUISVILLE": null,
            "MARYLAND": null,
            "MIAMI": null,
            "MICHIGAN": null,
            "MICHIGAN STATE": null,
            "MINNESOTA": null,
            "MISSISSIPPI": null,
            "NEBRASKA": null,
            "NORTH CAROLINA STATE": null,
            "NORTH CAROLINA": null,
            "NORTHWESTERN": null,
            "NOTRE DAME": null,
            "OHIO STATE": null,
            "OKLAHOMA": null,
            "OKLAHOMA STATE": null,
            "OREGON": null,
            "OREGON STATE": null,
            "PENN STATE": null,
            "PITTSBURGH": null,
            "PURDUE": null,
            "RUTGERS": null,
            "SOUTH CAROLINA": null,
            "SYRACUSE": null,
            "TENNESSEE": null,
            "TEXAS": null,
            "TEXAS A&M": null,
            "TEXAS CHRISTIAN": null,
            "TEXAS TECH": null,
            "UCLA": null,
            "USC": null,
            "UTAH": null,
            "VANDERBILT": null,
            "VILLANOVA": null,
            "VIRGINIA": null,
            "VIRGINIA TECH": null,
            "WAKE FOREST": null,
            "WASHINGTON": null,
            "WASHINGTON STATE": null,
            "WEST VIRGINIA": null,
            "WISCONSIN": null,
            "STANFORD": null

        },
        limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
        onAutocomplete: function(val) {
            // Callback function when value is autcompleted.
            displayColor();
        },
        minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
    });

    // jquery functions for when colleges are entered
    var theParent = document.querySelector("#theMothership");
    theParent.addEventListener("click", findCollege, false);

    function findCollege(e) {
        if (e.target !== e.currentTarget) {
            var clickedItem = e.target.id;
        }
        e.stopPropagation();
    }

    $(".blackboard").keypress(function(e) {
        var key = e.which;
        if (key == 13) // the enter key code
        {
            var clickedItem = e.target.id;
            var userInput = $("#" + clickedItem).val().trim();
            var clickedColor = "color" + clickedItem;
            displayColor(userInput, clickedColor);
        }
    });

    // jquery functions for when college color boxes are clicked on.
    // modals will open up with more information

});

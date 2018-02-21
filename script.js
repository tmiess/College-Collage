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
        $("#" + clickedColor).text(collegeName);
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
            "North Carolina": [
                { "tid": 159, "cid": 0, "did": 0, "region": "Boston College", "name": "Eagles", "abbrev": "BC", "pop": 161, "city": "Chestnut Hill", "state": "MA", "latitude": 42.330, "longitude": -71.166 },
                { "tid": 105, "cid": 0, "did": 0, "region": "Clemson", "name": "Tigers", "abbrev": "CLEM", "pop": 215, "city": "Clemson", "state": "SC", "latitude": 34.678, "longitude": -82.839 },
                { "tid": 109, "cid": 0, "did": 0, "region": "Florida State", "name": "Seminoles", "abbrev": "FSU", "pop": 211, "city": "Tallahassee", "state": "FL", "latitude": 30.442, "longitude": -84.298 },
                { "tid": 18, "cid": 0, "did": 0, "region": "Louisville", "name": "Cardinals", "abbrev": "UL", "pop": 302, "city": "Louisville", "state": "KY", "latitude": 38.25, "longitude": -85.766 },
                { "tid": 31, "cid": 0, "did": 0, "region": "North Carolina State", "name": "Wolfpack", "abbrev": "NCST", "pop": 289, "city": "Raleigh", "state": "NC", "latitude": 35.786, "longitude": -78.682 },
                { "tid": 9, "cid": 0, "did": 0, "region": "Notre Dame", "name": "Fighting Irish", "abbrev": "ND", "pop": 311, "city": "South Bend", "state": "IN", "latitude": 41.672, "longitude": -86.255 },
                { "tid": 66, "cid": 0, "did": 0, "region": "Syracuse", "name": "Orange", "abbrev": "CUSE", "pop": 254, "city": "Syracuse", "state": "NY", "latitude": 43.046, "longitude": -76.144 },
                { "tid": 141, "cid": 0, "did": 0, "region": "Wake Forest", "name": "Demon Deacons", "abbrev": "WAKE", "pop": 179, "city": "Winston-Salem", "state": "NC", "latitude": 36.102, "longitude": -80.260 },
                { "tid": 0, "cid": 0, "did": 1, "region": "Duke", "name": "Blue Devils", "abbrev": "DUKE", "pop": 320, "city": "Durham ", "state": "NC", "latitude": 35.988, "longitude": -78.907 },
                { "tid": 145, "cid": 0, "did": 1, "region": "Georgia Tech", "name": "Yellow Jackets", "abbrev": "GT", "pop": 175, "city": "Atlanta", "state": "GA", "latitude": 33.775, "longitude": -84.394 },
                { "tid": 47, "cid": 0, "did": 1, "region": "Miami", "name": "Hurricanes ", "abbrev": "CANES", "pop": 273, "city": "Coral Gables", "state": "FL", "latitude": 25.75, "longitude": -80.271 },
                { "tid": 8, "cid": 0, "did": 1, "region": "North Carolina", "name": "Tar Heels", "abbrev": "UNC", "pop": 312, "city": "Chapel Hill", "state": "NC", "latitude": 35.933, "longitude": -79.033 },
                { "tid": 76, "cid": 0, "did": 1, "region": "Pittsburgh", "name": "Panthers", "abbrev": "PITT", "pop": 244, "city": "Pittsburgh", "state": "PA", "latitude": 40.439, "longitude": -79.976 },
                { "tid": 6, "cid": 0, "did": 1, "region": "Virginia", "name": "Cavaliers", "abbrev": "UVA", "pop": 314, "city": "Charlottesville", "state": "VA", "latitude": 38.03, "longitude": -78.478 },
                { "tid": 220, "cid": 0, "did": 1, "region": "Virginia Tech", "name": "Hokies", "abbrev": "VT", "pop": 100, "city": "Blacksburg", "state": "VA", "latitude": 37.23, "longitude": -80.417 }
            ]
        },
        limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
        onAutocomplete: function(val) {
            // Callback function when value is autcompleted.
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

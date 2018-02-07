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

var column;

function displayColor(userInput, column) {
    var collegeName = userInput.toUpperCase();
    console.log("finding color for: " + collegeName);
    if (college.includes(collegeName)) {
        var newColor = color[college.indexOf(collegeName)];
        console.log("color code for " + collegeName + " is " + newColor);
        $("#color" + column).css("background-color", newColor);
        $("#color" + column).text(collegeName);
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

    $("#name1").keypress(function(e) {
        console.log("name1 listening");
        var key = e.which;
        if (key == 13) // the enter key code
        {
            console.log("enter button 1 works");
            // $('input[name = butAssignProd]').click();
            // return false;
            var userInput = $("#name1").val().trim();
            var column = 1;
            displayColor(userInput, column);
        }
    });
    $("#name2").keypress(function(e) {
        var key = e.which;
        if (key == 13) // the enter key code
        {
            console.log("enter button 2 works");
            // $('input[name = butAssignProd]').click();
            // return false;
            var userInput = $("#name2").val().trim();
            var column = 2;
            displayColor(userInput, column);
        }
    });
    $("#name3").keypress(function(e) {
        var key = e.which;
        if (key == 13) // the enter key code
        {
            console.log("enter button 3 works");
            // $('input[name = butAssignProd]').click();
            // return false;
            var userInput = $("#name3").val().trim();
            var column = 3;
            displayColor(userInput, column);
        }
    });
    $("#name4").keypress(function(e) {
        var key = e.which;
        if (key == 13) // the enter key code
        {
            console.log("enter button 4 works");
            // $('input[name = butAssignProd]').click();
            // return false;
            var userInput = $("#name4").val().trim();
            var column = 4;
            displayColor(userInput, column);
        }
    });
    $("#name5").keypress(function(e) {
        var key = e.which;
        if (key == 13) // the enter key code
        {
            console.log("enter button 5 works");
            // $('input[name = butAssignProd]').click();
            // return false;
            var userInput = $("#name5").val().trim();
            var column = 5;
            displayColor(userInput, column);
        }
    });
    $("#name6").keypress(function(e) {
        var key = e.which;
        if (key == 13) // the enter key code
        {
            console.log("enter button 6 works");
            // $('input[name = butAssignProd]').click();
            // return false;
            var userInput = $("#name6").val().trim();
            var column = 6;
            displayColor(userInput, column);
        }
    });
    $("#name7").keypress(function(e) {
        var key = e.which;
        if (key == 13) // the enter key code
        {
            console.log("enter button 7 works");
            // $('input[name = butAssignProd]').click();
            // return false;
            var userInput = $("#name7").val().trim();
            var column = 7;
            displayColor(userInput, column);
        }
    });
    $("#name8").keypress(function(e) {
        var key = e.which;
        if (key == 13) // the enter key code
        {
            console.log("enter button 8 works");
            // $('input[name = butAssignProd]').click();
            // return false;
            var userInput = $("#name8").val().trim();
            var column = 8;
            displayColor(userInput, column);
        }
    });
    $("#name9").keypress(function(e) {
        var key = e.which;
        if (key == 13) // the enter key code
        {
            console.log("enter button 9 works");
            // $('input[name = butAssignProd]').click();
            // return false;
            var userInput = $("#name9").val().trim();
            var column = 9;
            displayColor(userInput, column);
        }
    });
    $("#name10").keypress(function(e) {
        var key = e.which;
        if (key == 13) // the enter key code
        {
            console.log("enter button 10 works");
            // $('input[name = butAssignProd]').click();
            // return false;
            var userInput = $("#name10").val().trim();
            var column = 10;
            displayColor(userInput, column);
        }
    });
    $("#name11").keypress(function(e) {
        var key = e.which;
        if (key == 11) // the enter key code
        {
            console.log("enter button 6 works");
            // $('input[name = butAssignProd]').click();
            // return false;
            var userInput = $("#name11").val().trim();
            var column = 11;
            displayColor(userInput, column);
        }
    });
    $("#name12").keypress(function(e) {
        var key = e.which;
        if (key == 13) // the enter key code
        {
            console.log("enter button 12 works");
            // $('input[name = butAssignProd]').click();
            // return false;
            var userInput = $("#name12").val().trim();
            var column = 12;
            displayColor(userInput, column);
        }
    });
});

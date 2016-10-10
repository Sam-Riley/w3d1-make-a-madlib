//Intentionally made global by leaving off var before variable
log = console.log.bind(console);

var defaultName = "Sam";

function sayHello(name) {
    if (name === undefined) {
        console.log("Hello, " + defaultName + "!");
    }
    else {
        console.log("Hello, " + name + "!");
    }
}

//sayHello();
//sayHello('Cyrus');
/*sayHello('Darius');
sayHello('Xerxes');*/

//console.log('Hello');

var transportationName = 'Lexus';
var transportationType = 'Car';
var $cost = 'Too Much';
var _green = true;
var transportationNumber1 = true;
var snake_case_variable_is_okay = true;
var camelCaseIsBest = true;

var thisIsAVariable = true;
let thisBeTrue = true;
const thisNeverChanges = true;

function testVariables () {
    var thisIsNotAvailableOutside = true;
    console.log(thisIsAVariable);
}

if (true === true) {
    let thisIsAvailableOutside = true;
}

//log(thisIsAvailableOutside);

const thisCannotChange = true;
//thisCannotChange = false;


var firstName = 'Sam';
firstName = 'Sean';

//console.log(lastName); // <-- output at this point in the code

var thisIsUndefined;
var thisIsNull = null;
var thisIsBoolean = true; //<-- or false
var thisIsNumber = 12.34;
var thisIsString = 'Hello World!';
var thisIsExpression = (1 + 1 * 100 / 4 - 8 );
//var thisIsInput = inputs.first_name;

var movieTitle = 'The Departed'
var movieDirector = 'Martin Scorsese'
var movieYear = 2006
var movieGenre = 'crime'
var isMovie = 'true'

//log(movieTitle, movieDirector, movieYear, movieGenre, isMovie)

var verb = 'ran';
var sentence = 'Flying by the tower, I ' + verb + ' to '
'safety.';  //Example of how to put a string on 2 lines
log(sentence);

var verb = 1;
var sentence = 12 + verb + 12;
log(sentence);

var verb = '1';
var sentence = 12 + verb + 12;
log(sentence);


var verb = 'ran';
var sentence = `Flying by the tower, I ${verb} to
safety.`; //String interpolasion
log(sentence);

var on = false;
var lightSwitch = (on ? 'The light is on.' : 'The light is off.'); //Ternary switch
log(lightSwitch);

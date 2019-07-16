// -----This is the answer key of testwords---->
var wordList = {}
// var random = ["what", "txt", "this"];
var html = ["div","anchor","responsive","layout","iframes","filepaths","blocks","editors","attributes","children","headings","hyperlinks"];
var html1 = ["div","anchor","responsive","layout","iframes","filepaths","blocks","editors","attributes","children","headings","hyperlinks"];
var javascript = ["whileloop","forloop","else","ifstatement","thiskeyword","hoisting","Booleans","api","documentobjectmodel","elseif"];
var javascript1 = ["whileloop","forloop","else","ifstatement","thiskeyword","hoisting","Booleans","api","documentobjectmodel","elseif"];
var css = ["syntax","backgrounds","borders","margins","padding","height/width","box-model","outline","text","fonts"];
var css1 = ["syntax","backgrounds","borders","margins","padding","height/width","box-model","outline","text","fonts"];
var python = ["zenofpython","yield","user-interface","whileloop","variables","tuple","statement","strings","str","slice","setuptools","try"];
var python1 = ["zenofpython","yield","user-interface","whileloop","variables","tuple","statement","strings","str","slice","setuptools","try"];
var vocabulary = ["superb", "amazing", "clear","blurry","stone","basket","butter","reciprocal","indefinite","latitude","encouraging","billowy","skillful","unwieldy","tightfisted","hungry","alphabet","backpack","barbecue","cappuccino","circus","church","electricity","floodlight","library","minute","accord","consider","evident","practice","intend","concern","commit","issue","approach","establish","utter","conduct","engage","obtain","scarce","policy","straight","stock","apparent","property","fancy","concept","court","appoint","passage","vain","instance","coast","project","commission","constant","circumstances","constitute","level","affect","institute","render","appeal","generate","theory","range","campaign","league","labor","confer","grant","dwell","entertain","contract","earnest"];
var vocabulary1 = ["superb", "amazing", "clear","blurry","stone","basket","butter","reciprocal","indefinite","latitude","encouraging","billowy","skillful","unwieldy","tightfisted","hungry","alphabet","backpack","barbecue","cappuccino","circus","church","electricity","floodlight","library", "minute","accord","consider","evident","practice","intend","concern","commit","issue","approach","establish","utter","conduct","engage","obtain","scarce","policy","straight","stock","apparent","property","fancy","concept","court","appoint","passage","vain","instance","coast","project","commission","constant","circumstances","constitute","level","affect","institute","render","appeal","generate","theory","range","campaign","league","labor","confer","grant","dwell","entertain","contract","earnest"];
// ------ custom dictionary definitions for non-dicitonary programming terms---->
var randomTerms = []
var htmlTerms = ["div The <div> tag defines a division or a section in an HTML document. The <div> element is often used as a container for other HTML elements to style them with CSS or to perform certain tasks with JavaScript div,The <div> tag defines a division or a section in an HTML document."
,"anchor The HTML code for creating a link to another page or to a particular section within a page. It is also commonly called an h-ref."
,"responsive design is an approach to web page creation that makes use of flexible layouts, flexible images and cascading style sheet media queries. The goal ofresponsive design is to build web pages that detect the visitor's screen size and orientation and change the layout accordingly."
,"layout,In word processing and desktop publishing, layout refers to the arrangement of text and graphics. The layout of a document can determine which points are emphasized, and whether the document is aesthetically pleasing."
 , "iframes The IFrame HTML element is often used to insert content from another source, such as an advertisement, into a Web page." 
 ,"filepaths A path, the general form of the name of a file or directory, specifies a unique location in a file system. A path points to a file system location by following the directory tree hierarchy expressed in a string of characters in which path components, separated by a delimiting character, represent each directory."
, "blocks HTML (Hypertext Markup Language) elements historically were categorized as either 'block-level' elements or 'inline' elements. By default, a block-level element occupies the entire space of its parent element (container), thereby creating a 'block.'"
,"editors An HTML editor is a tool for editing or evaluating code in hypertext markup language (HTML)."
,"attributes The class attribute specifies one or more classnames for an element. The classattribute is mostly used to point to a class in a style sheet."
,"children a computer language that is used to create pages on the World Wide Web that can include text, pictures, sound, video, and hyperlinks to other Web pages."
,"headings The heading elements are H1, H2, H3, H4, H5, and H6 with H1 being the highest (or most important) level and H6 the least."
,"hyperlinks a hyperlink, or simply a link, is a reference to data that the reader can follow by clicking or tapping. A hyperlink points to a whole document or to a specific element within a document."
];
var javascriptTerms = ["whileloop The while statement creates a loop that is executed while a specified condition is true. ... while - loops through a block of code while a specified condition is true."
,"forloop In computer science, a for-loop is a control flow statement for specifying iteration, which allows code to be executed repeatedly."
,"else In programming languages, an else statement is an alternative statement that is executed if the result of a previous test condition evaluates to false."
,"ifstatement An if statement is a programming conditionalstatement that, if proved true, performs a function or displays information."
,"thiskeyword What is 'this' keyword in JavaScript. This keyword refers to an object, that object which is executing the current bit of javascript code. In other words, every javascript function while executing has a reference to its current execution context, called this. Execution context means here is how the function is called."
,"hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local."
,"Booleans A JavaScript Boolean represents one of two values: true or false."
,"api Application Programming Interface (API) In basic terms, APIs just allow applications to communicate with one another. When people speak of 'an API', they sometimes generalize and actually mean 'a publicly available web-based API that returns data, likely in JSON or XML'."
,"documentobjectmodel DOM. The DOM (Document Object Model) is an API that exposes the elements of HTML and XML documents as programming language objects. ... The most common programming language used in the DOM is JavaScript, which is used on most websites."
,"elseif A high-level programming language statement that compares two or more sets of data and tests the results. If the results are true, the THEN instructions are taken; if not, the ELSE instructions are taken."
];
var cssTerms = ["syntax CSS Syntax. A CSS rule-set consists of a selector and a declaration block: The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon ", 
"backgrounds The background property in CSS allows you to control the background of any element (what paints underneath the content in that element). It is a shorthand property, which means that it allows you to write what would be multiple CSS properties in one."
,"borders the border-style property has four values: border-style: dotted solid double dashed; top border is dotted. right border is solid."
, "margins The CSS margin properties are used to create space around elements, outside of any defined borders. With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left)."
, "padding CSS Padding. The CSS padding properties are used to generate space around an element's content, inside of any defined borders. With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left)."
, "height/width height: 100px; width: 500px; background-color: powderblue; Note: The height and width properties do not include padding, borders, or margins; they set the height/width of the area inside the padding, border, and margin of the element!"
, "box-model In CSS, the term 'box model' is used when talking about design and layout. The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content."
, "outline An outline is a line that is drawn around elements, OUTSIDE the borders, to make the element 'stand out'. CSS has the following outline properties: outline-style. outline-color. outline-width."
, "text CSS - Text. ... The text-decoration property is used to underline, overline, and strikethrough text. The text-transform property is used to capitalize text or convert text to uppercase or lowercase letters. The white-space property is used to control the flow and formatting of text."
, "fonts CSS Fonts is a module of CSS that defines font-related properties and how font resources are loaded. It lets you define the style of a font, such as its family, size and weight, line height, and the glyph variants to use when multiple are available for a single character."
, ];
var pythonTerms = ["zenofpython The Zen of Python is a collection of 19 'guiding principles' for writing computer programs that influence the design of the Python programming language."
, "yield at a glance, the yield statement is used to define generators, replacing the return of a function to provide a result to its caller without destroying local variables. Unlike a function, where on each call it starts with new set of variables, a generator will resume the execution where it was left off."
, "user-interface There are many graphical user interface (GUI) toolkits that you can use with the Python programming language. The big three are Tkinter, wxPython, and PyQt. ... A graphical user interface is an application that has buttons, windows, and lots of other widgets that the user can use to interact with your application."
, "whileloop The while loop tells the computer to do something as long as the condition is met. Its construct consists of a block of code and a condition. The condition is evaluated, and if the condition is true, the code within the block is executed."
, "variables Variables are containers for storing data values.Unlike other programming languages, Python has no command for declaring a variable. A variable is created the moment you first assign a value to it."
, "tuple A tuple is a sequence of immutable Python objects. Tuples are sequences, just like lists. The differences between tuples and lists are, the tuples cannot be changed unlike lists and tuples use parentheses, whereas lists use square brackets. Creating a tuple is as simple as putting different comma-separated values."
, "statement An else statement can be combined with an if statement. An else statement contains the block of code that executes if the conditional expression in the if statement resolves to 0 or a FALSE value. The else statement is an optional statement and there could be at most only one else statement following if."
, "strings A string in Python is a sequence of characters. It is a derived data type. Strings are immutable. This means that once defined, they cannot be changed."
, "str The str() method returns the 'informal' or nicely printable representation of a given object."
, "slice A slice object is used to specify how to slice a sequence. You can specify where to start the slicing, and where to end. You can also specify the step, which allows you to e.g. slice only every other item."
, "setuptools Setuptools is a package development process library designed to facilitate packaging Python projects by enhancing the Python standard library distutils (distribution utilities). It includes: Python package and module definitions. Distribution package metadata. Test hooks."
, "try The try and except block in Python is used to catch and handle exceptions. Python executes code following the try statement as a “normal” part of the program. The code that follows the except statement is the program's response to any exceptions in the preceding try clause."
,];
//  stores each cateogry in an object for retrival---->
wordList.random = random;
wordList.html = html;
wordList.javascript = javascript;
wordList.css = css;
wordList.python = python;
wordList.vocabulary = vocabulary;

bestScore();

//------------------------------default start time with no difficulty selected*-------->
var userTimeSelect = 500;
//--------------on click of category make others inactive,choose a random category if random is selected
// then, show the level buttons------------->
$(".category").one("click", function() {
    if($(this).attr('id') == "random"){
        var randomelement = document.getElementsByClassName("category");
        var randomcategoryNumber = Math.floor(Math.random() * 5) + 1 ;
        $(this).siblings().addClass("inactive");
    $(this).addClass("active");
        randomelement[randomcategoryNumber].classList.add("active");
        randomelement[randomcategoryNumber].classList.add("chosen");
    
    }
    else{
    $(this).siblings().addClass("inactive");
    $(this).addClass("active");
    $(this).addClass("chosen");
    }
    $("#level-button").show();
   

});

// -------------on click of level difficulty make others inactive, usertimer changes with level setting------->
$(".level").on("click", function() {
    userTimeSelect = $(this).attr("id");
    $(this).siblings().addClass("inactive");
    $(this).addClass("active");
    count = parseInt(userTimeSelect);
});

//--------******START OF THE GAME!******* on non-click of Start Match show alert modal, on click of category + Start Match start game --------->
$("#start_game").on("click", function() {
    if ($(".active").length == 0) {
        $("#dialogModal").modal();
    }
    else {
        var timeleft = 3;
        $("#start_game").hide();
        $("#answer-input").focus();
        var downloadTimer = setInterval(function() {
            document.getElementById("current-word").innerHTML = timeleft;
            timeleft -= 1;
            if (timeleft < 0) {
                clearInterval(downloadTimer);

                playRound();
            }
        }, 1000);


    }



});

//---Global Varibles for counter and all correct words----->
// 
var count = parseInt(userTimeSelect);
var counter;
var correctWords = []

function timer() {
    if (count == 0) {
        verifyResult();
    }

    else {
        count--;
    }
    // defines my count speed at id of user count 1 second at a time---->
    document.getElementById("user-time").innerHTML = count / 100;
}

// -----**Setup of round**,random word generator function to generate random words for the interactive gameplay/play a round----->
function playRound() {
    var speed = 10;
    var id_selected_category = $(".chosen").attr("id");
    var random_occourance = Math.floor(Math.random() * wordList[id_selected_category].length);
    var index_to_remove = wordList[id_selected_category].indexOf(wordList[id_selected_category][random_occourance]);
    $("#current-word").text(wordList[id_selected_category][random_occourance]);
    wordList[id_selected_category].splice(index_to_remove, 1);
    counter = setInterval(timer, speed); //10 will  run it every 100th of a second
}
// -----function to check the current word against user answer input returns true or false only--->
// ---------------------------------------------------------------------
function checkResult() {
    var testWord = $("#current-word").text();
    var userAnswer = $("#answer-input").val();
    if (testWord.toUpperCase() === userAnswer.toUpperCase()) {
        return true;
    }
    else {
        return false;
    }
};

//---------------------------------------------------------Checkbox functionality liinked to check result function------------->
$("#answer-input").keyup(function() {
    var checkBox = checkResult();
    if (checkBox === true) {
        $("#checkbox").show();
        $("#checkbox").css("margin-top", "20px !important");
    }


    else {
        $("#checkbox").hide();

    }


});
// -----------------------------------------------------------------------
//--------------------------------------------------------------------Tablechart---------->
var blank_WordTable = '<tr><th scope="row">1</th><td>fdsf</td><td>fdsfd</td></tr>'
//------uses api index merriam academy vocabulary--->//
function userlostRound() {
    //---on loose logic for when to store the best score in local storage,populate the blank word table with correct word* and defintions based on else condition--->
    if (correctWords.length != 0) {
        if(localStorage.getItem("user-best-score") < correctWords.length*1.5){
            localStorage.setItem("user-best-score", correctWords.length*1.5)
        }
        var i;
        for (i = 0; i < correctWords.length; i++) {
            var correctWordTable = blank_WordTable.replace("1", i + 1);
            correctWordTable = correctWordTable.replace("fdsf", correctWords[i]);
            if ($(".chosen").attr("id") == "vocabulary") {
                wordDefinition(correctWords[i], correctWordTable);
            }
            // ------uses personal definition index switch and case------->//
            else {
                var definitionIndex;
                var testword = correctWords[i].toString();
                if(html1.includes(correctWords[i])){
                    definitionIndex = html1.indexOf(correctWords[i]);
                    correctWordTable = correctWordTable.replace("fdsfd", htmlTerms[definitionIndex]);
                }
                else if(css1.includes(correctWords[i])){
                    definitionIndex = css1.indexOf(correctWords[i]);
                    correctWordTable = correctWordTable.replace("fdsfd", cssTerms[definitionIndex]);
                }
                else if(javascript1.includes(correctWords[i])){
                    definitionIndex = javascript1.indexOf(correctWords[i]);
                    correctWordTable = correctWordTable.replace("fdsfd", javascriptTerms[definitionIndex]);
                }
                else if(python1.includes(correctWords[i])){
                    definitionIndex = python1.indexOf(correctWords[i]);
                    correctWordTable = correctWordTable.replace("fdsfd", pythonTerms[definitionIndex]);
                }
                
                $("#table-body").append(correctWordTable);
                $(".hide-table").show();
            }

        }

    }

};

// ----------------------------------------------------api calling merriam dictionary for correct definitions------>//

function wordDefinition(targetWord, tablestring) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + targetWord + "?key=833754d1-505c-459f-a936-2182413f2cc4");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var meaning = JSON.parse(this.responseText);
            tablestring = tablestring.replace("fdsfd", meaning[0].shortdef[0]);
            $("#table-body").append(tablestring);
            $(".hide-table").show();
            return meaning[0].shortdef[0];
        }
    };
    return true;

};




// ---on keypress of enter input my answer verifyresult!--//
$("#answer-input").on("keypress", function(e) {
    var code = e.keyCode || e.which;
    if (code == 13) {
        verifyResult();
    }
});
// if check result equals correct store the word in a string, play the sfx win, hide the checkbox play another round---->
function verifyResult() {
    clearInterval(counter);
    checkResult();
    if (checkResult() === true) {
        gameSdfx("win");
        correctWords.push($("#answer-input").val());
        $("#user-score").text(correctWords.length * 1.5);
        $("#answer-input").val("");
        $("#checkbox").hide();

        count = parseInt(userTimeSelect);
        playRound();
    }
    // got the wrong answer! do this..---->
    //---game sfx on lose--->
    else {
        gameSdfx("lose");
        $("#answer-input").attr("readonly", "readonly");
        $("#answer-input").css({ "border-color": "red", "box-shadow": "0 0 0 0.2rem red" });
        $("#final-score").text(correctWords.length * 1.5);
        if (correctWords.length === 0) {
        $("#nothingrightdialogModal").modal();
        // alert("you didnt get anything right");
        }
        else{
          $("#gameoverModal").modal();  
        }
        
        userlostRound();
        
    }
};
// ----game sfx on win--->
function gameSdfx(soundOf) {
    var audioPlayer = document.getElementById("gameSoundPlayer");
    if (soundOf === "win") {
        audioPlayer.setAttribute('src', 'assets/audio/right.wav');
        audioPlayer.play();
    }
    else {
        audioPlayer.setAttribute('src', 'assets/audio/wrong.mp3');
        audioPlayer.play();
    }

}
// Email form submission entry on click-->
$("#mail-submission").on("click", function(){
    var user_mail = $("#exampleInputEmail1").val();
    if (user_mail == "" || ValidateEmail(user_mail) == false){
        $("#noemailfilledModal").modal();
        
        // Email js template and send to user-->
    } else {
         $(".hide-table").hide();
    $("#thank-you").show();
    var template_params = {
   "to_email": user_mail ,
   "from_name": "Daniel",
   "subject_message": "I am prefilling the subject message",
   "body_message": "words and definition",
 
    }
   
}

var service_id = "default_service";
var template_id = "template_jyLHx8AM";
emailjs.send(service_id, template_id, template_params);
});

// ensure they put a valid email address-->
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.match(mailformat))
{
return true;
}
else
{
return false;
}
}

// ------your best game score displayed on restart of match------>
function bestScore() {
    if(localStorage.getItem("user-best-score") == null) {
    localStorage.setItem("user-best-score", 0);
     document.getElementById("user-best-score").innerHTML = 0;
}else {
     var best = localStorage.getItem("user-best-score");
     document.getElementById("user-best-score").innerHTML = best;
}

   
}

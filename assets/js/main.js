var wordList = {}
var random = ["what", "txt", "this"];
var html = ["div", "anchor", "tag", "title", "tags", "element", "tables", "semanticformating", "paragraph", "orderedlist", "unorderedlist", "list", "links", "linebreak", "images", "hyperlinks", "horizontalrules", "headings", "head", "comments", "children", "usage", "body", "basicformatting", "href", "id", "aclass", "attributes", "col", "data", "element", "xhtml", "urlencode", "charset", "entities", "computercode", "responsive", "layout", "filepaths", "js", "iframes", "id", "classes", "blocks", "tables", "images", "css", "colors", "quotations", "basic", "editors", "forms", "formelements", "inputtypes", "inputattributes", "browser", "browsersupport", "newelements", "semantics", "migration", "styleguide", "htmlcanvas", "svg", "htmlmultimedia", "htmlvideo", "htmlaudio", "plugins", "htmlyoutube", "htmlapi", "htmlgeaolocation", "draganddrop", "webstorage", "webworker", "htmlsse", "httpmessages", "httpmethods", "px-converter", "em converter", "keyboardshortcuts", "httplangcodes", "htmlurlencode", "characterset", "htmlaudio/video", "canvas", "globalattributes", "category", "basichtml", "formatting", "inputs", "frames", "images", "button", "textarea", "select", "label", "fieldset", "optionoptgroup", "legend", "datalist", "output", "frame", "frameset", "noframes", "img", "area", "canvas", "figcaption", "figure", "picture", "svg", "audio", "source", "track", "video", "a", "link", "nav", "ol", "li", "dir", "dl", "dt", "dd", "table", "caption", "th", "tr", "td", "thead", "tbody", "tfoot", "col", "colgroup", "style", "div", "span", "header", "footer", "main", "section", "article", "detals", "dialog", "summary", "data", "head", "meta", "base", "basefont", "script", "noscript", "applet", "embed", "object", "param", "accept", "accept-charset", "accesskey", "action", "align", "alt", "anasync", "autpcomplete", "autofocus", "autoplay", "bgcolor", "border", "meta", "checked", "cite", "aclass", "color", "cols", "colspan", "conenteditable", "controls", "cords", "data", "datetime", "defer", "dir", "dirname", "disabled", "download", "draggable", "dropzone", "enctype", "formaction", "headers", "height", "hidden", "high", "href", "http-equiv", "id", "ismap", "kind", "label", "lang", "list", "loop", "maxlength", "media", "method", "min", "novalidate", "onafterprint", "onbeforeprint", "onbeforeunload"];
var javascript = ["whileloop", "forloop", "elseif", "else", "ifstatement", "functioncalling", "consoletime", "consolelog", "confirm", "popupbox", "casekeyword", "switchkeyword", "ternaryoperator", "output", "statements", "syntax", "comments", "variables", "operators", "arithmetic", "assignment", "datatypes", "functions", "objects", "events", "strings", "stringmethods", "numbers", "numbermethods", "arraysort", "array iteration", "dates", "dateformats", "dategetmethods", "datesetmethods", "math", "mathrandom", "random", "Booleans", "comparisons", "conditions", "switch", "loopfor", "loopwhile", "break", "typeconversion", "bitwise", "regexp", "errors", "scope", "hoisting", "strictmode", "thiskeyword", "a-let", "const", "arrowfunction", "classes", "debugging", "styleguide", "bestpractices", "mistakes", "performance", "reservedkeywords", "versions", "versiones5", "versiones6", "json", "jsforms", "api", "objectdefinitions", "objectproperties", "objectmethods", "objectconstructors", "objecrprototype", "objectecmascript5", "functiondefinitions", "functionparameters", "functioninvocation", "functioncall", "functioncall", "functionapply", "functionclosures", "dommethods", "nodelists", "collections", "nodes", "navigation", "eventlistener", "events", "animations", "domcss", "domhtml", "domelements", "documentobjectmodel", "domdocument"];
var css = ["syntax", "backgrounds", "borders", "margins", "padding", "height/width", "box-model", "outline", "text", "fonts", "icons", "links", "lists", "tables", "display", "max-width", "position", "overflow", "float", "inline-block", "align", "combinators", "pseudo-class", "pseudo-element", "opacity", "navigation-bar", "dropdowns", "imagegallery", "imagesprites", "attrselectors", "forms", "counters", "websitelayout", "units", "specificity", "rounded-corners", "borderimages", "background", "gradients", "shadows", "texteffects", "webfonts", "2dtransforms", "3dtransforms", "transitions", "animations", "tooltips", "styleimages", "object-fit", "buttons", "pagination", "multiplecolumns", "user-interface", "variables", "box-sizing", "flexbox", "mediaqueires", "mqexamples", "viewport", "gridview", "rwdmediaqueries", "rwdimages", "rwdvideos", "rwdframeworks", "rwdtemplates", "color-values", "css-browsersupport"];
var python = ["zenofpython", "yield", "with", "while", "variables", "tuple", "try", "statement", "strings", "str", "slice", "setuptools", "set", "reduce", "pythonic", "pythonpackageindex", "pep8", "pass", "object-oriented", "object", "module", "methods", "map", "literals", "lambda", "iterate", "ipython", "interpret", "interactive-mode", "int", "import", "immutable", "ifstatement", "idle", "highlevellanguage", "generators", "garbagecollection", "functioncall", "function", "for", "float", "filter", "expression", "evaluation-order", "easy-install", "_future_", "docstring", "distutils", "dictionary", "def", "debugging", "conditional-statement", "continue", "compiler", "class", "break", "assignment", "assert", "argparse", "argument", "abs", ">>>"];
var vocabulary = ["that"]
wordList.random = random;
wordList.html = html;
wordList.javascript = javascript;
wordList.css = css;
wordList.python = python;
wordList.vocabulary = vocabulary;

var userTimeSelect = 500;

$(".category").on("click", function() {
    $(this).siblings().addClass("inactive");
    $(this).addClass("active");
    $("#level-button").show();

});


$(".level").on("click", function() {
    userTimeSelect = $(this).attr("id");
    $(this).siblings().addClass("inactive");
    $(this).addClass("active");
    count = parseInt(userTimeSelect);
});

$("#start_game").on("click", function() {
    if ($(".active").length == 0) {
        alert("Please select your game category");
    }
    else {
        $("#start_game").hide();
        $("#answer-input").focus();
        playRound();

    }



});


var count = parseInt(userTimeSelect);
var counter;
var correctWords = []



// var counter = setInterval(timer, 10); //10 will  run it every 100th of a second

function timer() {
    if (count == 0) {
        clearInterval(counter);
        checkResult();
        if (checkResult() === true) {
            correctWords.push($("#answer-input").val());
            $("#user-score").text(correctWords.length * 1.5);
            $("#answer-input").val("");
            $("#checkbox").hide();

            count = parseInt(userTimeSelect);
            playRound();
        }
        else {
            $("#answer-input").attr("readonly", "readonly");
            $("#answer-input").css({ "border-color": "red", "box-shadow": "0 0 0 0.2rem red" });
            $("#final-score").text(correctWords.length * 1.5);
            $("#myModal").modal();
            userlostRound();
            // alert(correctWords.length*1.5);
            // alert("You have lost the round please play again.");
        }


    }

    else {
        count--;
    }

    document.getElementById("user-time").innerHTML = count / 100;
}


function playRound() {
    var speed = 10;
    var id_selected_category = $(".active").attr("id");
    var random_occourance = Math.floor(Math.random() * wordList[id_selected_category].length);
    var index_to_remove = wordList[id_selected_category].indexOf(wordList[id_selected_category][random_occourance]);
    $("#current-word").text(wordList[id_selected_category][random_occourance]);
    wordList[id_selected_category].splice(index_to_remove, 1);
    counter = setInterval(timer, speed); //10 will  run it every 100th of a second
}

function checkResult() {
    var testWord = $("#current-word").text();
    var userAnswer = $("#answer-input").val();
    if (testWord === userAnswer) {
        return true;
    }
    else {
        return false;
    }
};

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


var blank_WordTable = '<tr><th scope="row">1</th><td>fdsf</td><td>fdsfd</td></tr>'

function userlostRound() {
    if (correctWords.length === 0) {
        alert("you didnt get anything right");
    }
    else {
        var i;
        for (i = 0; i < correctWords.length; i++) {
            alert(i);
            var correctWordTable = blank_WordTable.replace("1", i + 1);
            correctWordTable = correctWordTable.replace("fdsf", correctWords[i]);
            $("#table-body").append(correctWordTable);
            $(".hide-table").show();
        }

    }

};

var xhr = new XMLHttpRequest();

xhr.open ("GET", "https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=833754d1-505c-459f-a936-2182413f2cc4");
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // document.getElementById("data").innerHTML = responseText;
            var meaning = JSON.parse(this.responseText)
            console.log(meaning[0].shortdef[0]);

        
    }
    
};

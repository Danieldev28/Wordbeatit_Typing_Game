var wordList = {}
var random = ["what", "txt", "this"];
var html = ["div", "anchor","tag","title","tags","element","tables","semanticformating","paragraph","orderedlist","unorderedlist","list","links","linebreak","images","hyperlinks","horizontalrules","headings","head","comments","children","usage","body","basicformatting","href","id","aclass","attributes","col","data","element","xhtml","urlencode","charset","entities","computercode","responsive","layout","filepaths","js","iframes","id","classes","blocks","tables","images","css","colors","quotations","basic","editors","forms","formelements","inputtypes","inputattributes","browser","browsersupport","newelements","semantics","migration","styleguide","htmlcanvas","svg","htmlmultimedia","htmlvideo","htmlaudio","plugins","htmlyoutube","htmlapi","htmlgeaolocation","draganddrop","webstorage","webworker","htmlsse","httpmessages","httpmethods","px-converter","em converter","keyboardshortcuts","httplangcodes","htmlurlencode","characterset","htmlaudio/video","canvas","globalattributes","category","basichtml","formatting","inputs","frames","images","button","textarea","select","label","fieldset","optionoptgroup","legend","datalist","output","frame","frameset","noframes","img","area","canvas","figcaption","figure","picture","svg","audio","source","track","video","a","link","nav","ol","li","dir","dl","dt","dd","table","caption","th","tr","td","thead","tbody","tfoot","col","colgroup","style","div","span","header","footer","main","section","article","detals","dialog","summary","data","head","meta","base","basefont","script","noscript","applet","embed","object","param","accept","accept-charset","accesskey","action","align","alt","anasync","autpcomplete","autofocus","autoplay","bgcolor","border","meta","checked","cite","aclass","color","cols","colspan","conenteditable","controls","cords","data","datetime","defer","dir","dirname","disabled","download","draggable","dropzone","enctype","formaction","headers","height","hidden","high","href","http-equiv","id","ismap","kind","label","lang","list","loop","maxlength","media","method","min","novalidate","onafterprint","onbeforeprint","onbeforeunload"];
var javascript =["whileloop","forloop","elseif","else","ifstatement","functioncalling","consoletime","consolelog","confirm","popupbox","casekeyword","switchkeyword","ternaryoperator","output","statements","syntax","comments","variables","operators","arithmetic","assignment","datatypes","functions","objects","events","strings","stringmethods","numbers","numbermethods","arraysort","array iteration","dates","dateformats","dategetmethods","datesetmethods","math","mathrandom","random","Booleans","comparisons","conditions","switch","loopfor","loopwhile","break","typeconversion","bitwise","regexp","errors","scope","hoisting","strictmode","thiskeyword","a-let","const","arrowfunction","classes","debugging","styleguide","bestpractices","mistakes","performance","reservedkeywords","versions","versiones5","versiones6","json","jsforms","api","objectdefinitions","objectproperties","objectmethods","objectconstructors","objecrprototype","objectecmascript5","functiondefinitions","functionparameters","functioninvocation","functioncall","functioncall","functionapply","functionclosures","dommethods","nodelists","collections","nodes","navigation","eventlistener","events","animations","domcss","domhtml","domelements","documentobjectmodel","domdocument"];
var css = ["syntax","backgrounds","borders","margins","padding","height/width","box-model","outline","text","fonts","icons","links","lists","tables","display","max-width","position","overflow","float","inline-block","align","combinators","pseudo-class","pseudo-element","opacity","navigation-bar","dropdowns","imagegallery","imagesprites","attrselectors","forms","counters","websitelayout","units","specificity","rounded-corners","borderimages","background","gradients","shadows","texteffects","webfonts","2dtransforms","3dtransforms","transitions","animations","tooltips","styleimages","object-fit","buttons","pagination","multiplecolumns","user-interface","variables","box-sizing","flexbox","mediaqueires","mqexamples","viewport","gridview","rwdmediaqueries","rwdimages","rwdvideos","rwdframeworks","rwdtemplates","color-values","css-browsersupport"];
var python = ["zenofpython","yield","with","while","variables","tuple","try","statement","strings","str","slice","setuptools","set","reduce","pythonic","pythonpackageindex","pep8","pass","object-oriented","object","module","methods","map","literals","lambda","iterate","ipython","interpret","interactive-mode","int","import","immutable","ifstatement","idle","highlevellanguage","generators","garbagecollection","functioncall","function","for","float","filter","expression","evaluation-order","easy-install","_future_","docstring","distutils","dictionary","def","debugging","conditional-statement","continue","compiler","class","break","assignment","assert","argparse","argument","abs",">>>"];
wordList.random = random;
wordList.html = html;
wordList.javascript = javascript;
wordList.css = css;
wordList.python = python;


$(".category").on("click", function(){
    $(this).siblings().addClass("inactive");
    $(this).addClass("active");
});

$("#start_game").on("click", function(){
    if ($(".active").length == 0){
        alert("Please select your game category");
    }
    else {
    var id_selected_category = $(".active").attr("id");
   var random_occourance = Math.floor(Math.random() * wordList[id_selected_category].length);
   var index_to_remove = wordList[id_selected_category].indexOf(wordList[id_selected_category][random_occourance]);
   $("#current-word").text(wordList[id_selected_category][random_occourance]);
   wordList[id_selected_category].splice(index_to_remove,1);
    }
   
   
   
});


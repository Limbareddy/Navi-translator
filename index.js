var clickin=document.querySelector("#btn-translate");
var TxtInput=document.querySelector("#txt");
var OutputTxt=document.querySelector("#output-txt");
var SerURL="https://api.funtranslations.com/translate/navi.json"

function getURL(text){
    return SerURL+"?"+"text="+text;
}
 function errorHandling(error){
    console.log("there was something wrong")
 }

function clickhanding()
{
    var inptTxt= TxtInput.value;
    fetch(getURL(inptTxt)) 
    .then (Response=>Response.json())
    .then(json=> {
        var Translated = json.contents.translated;
        OutputTxt.innerText=Translated;

    })
    .catch(errorHandling)
};
clickin.addEventListener("click", clickhanding)

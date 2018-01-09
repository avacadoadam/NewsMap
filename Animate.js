

$(document).ready(function () {
    var geocoder;
    console.log("Loaded Now : jquery Document Ready");
    var $API_URL_LUAGUAGE = "eng";
    var $SelectLuaguageValue;
    var $SelectCaterogeryValue;
    //Defualt
    $("#LauguageButton").html("next");
    //Lauguage Selected next transition into Caterogery
    $("#LauguageButton").click(function () {
        $("#Lauguage_Wrap").hide();
        $("#Catergory_Wrap").show(400);
        $("#Catergory_Wrap").css("display","flex");
        $("#CatergoryButton").text($("#LauguageButton").html());
        $("#DropDownHeader").text("Select the Catergory you wish");

    });

    $("#MenuIcon").click(function () {
        if ("0px" !== $("#MenuList").css('left')) {
    $("#MenuList").animate( {left: "+=50"} , 200);
    $("#Menu").css("background-color","#ffffff");
    }else{
        $("#Menu").css("background-color","unset");
        $("#MenuList").animate( {left: "-=50"} , 200);
        }
    });

    //Caterogry Selection---------------
    $("#CatergoryButton").click(function () {
        $SelectCaterogeryValue = $("#CatergorySelect option:selected").text();
        $("#DropDown").hide();
        TrigerMapMarkerCall($API_URL_LUAGUAGE,"");
    });


    // Start of lauguage select fucntion--------------------------
    $("#LauguageSelect").change(function () {
        $SelectLuaguageValue = $("#LauguageSelect option:selected").text();
        $("#LauguageButton").html(LuaguageNexy($SelectValue))
    });
    //End Of Lauguage Select Function--------------------
    //Determines Next Spelling Tempory will replace with Lauguage api possibly
    function LuaguageNexy($SelectValueString) {
        if($SelectValueString == "English"){
            $API_URL_LUAGUAGE = "eng";
            return "next";
        }else if($SelectValueString == "Spanish"){
            $API_URL_LUAGUAGE = "spa";
            return "siguiente";
        }else if($SelectValueString == "German"){
            $API_URL_LUAGUAGE = "deu";
            return "Nächster";
        }else if($SelectValueString == "Russian"){
            $API_URL_LUAGUAGE = "rus";
            return "следующий";
        }
        return "next";
    }





});

    //Calls JSON SCRIPT With permeter set by client
    //Onload Calls LoopThroughDataFunction.
    function TrigerMapMarkerCall(Lauguage,Catogory) {
        var script = document.createElement("script");
        console.log(Lauguage);
        script.id="JSON_Call";
        script.src =
       "http://eventregistry.org/json/article?query=%7B%22%24query%22%3A%7B%22lang%22%3A%22eng%22%7D%7D&action=getArticles&resultType=articles&articlesSortBy=date&articlesCount=100&articlesArticleBodyLen=-1&articlesIncludeArticleLocation=true&articlesIncludeLocationGeoLocation=true&apiKey=6f4689b1-2f95-405a-8e3e-3430d291bc84&callback=JSON_CALLBACK";

        document.head.appendChild(script);
        document.getElementById("JSON_Call").addEventListener("load",function (ev) {

        LoopThroughData();
        })


    }


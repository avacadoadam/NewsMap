

$(document).ready(function () {
    var $SelectValue;
    //Defualt
    $("#LauguageButton").html("next");

    $("#LauguageButton").click(function () {
        $("#Lauguage_Wrap").hide();
        $("#Catergory_Wrap").show(400);
        $("#Catergory_Wrap").css("display","flex");
        $("#CatergoryButton").text($("#LauguageButton").html());
        $("#DropDownHeader").text("Select the Catergory you wish");
    });

    // Start of lauguage select fucntion
    $("#LauguageSelect").change(function () {
        $SelectValue = $("#LauguageSelect option:selected").text();
        $("#LauguageButton").html(LuaguageNexy($SelectValue))
    })
    //End Of Lauguage Select Function

    function LuaguageNexy($SelectValueString) {
        if($SelectValueString == "English"){
            return "next";
        }else if($SelectValueString == "Spanish"){
            return "siguiente";
        }else if($SelectValueString == "German"){
            return "Nächster";
        }else if($SelectValueString == "Russian"){
            return "следующий";
        }
    }
    return "next";


})


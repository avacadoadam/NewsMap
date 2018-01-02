

$(document).ready(function () {
    console.log("Loaded Now : jquery Document Ready");
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
    //Caterogry Selection---------------
    $("#CatergoryButton").click(function () {
        $SelectCaterogeryValue = $("#CatergorySelect option:selected").text();
        LoopThroughData();
        $("#DropDown").hide();
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
            return "next";
        }else if($SelectValueString == "Spanish"){
            return "siguiente";
        }else if($SelectValueString == "German"){
            return "Nächster";
        }else if($SelectValueString == "Russian"){
            return "следующий";
        }
        return "next";
    }



});


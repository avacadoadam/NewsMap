function initMap() {
    console.log("Loaded Now:Map init");
    geocoder = new google.maps.Geocoder();
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0},
        zoom: 2,
        disableDefaultUI: true,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ]

    });


}
//Function to add marker and info on click
function AddMarker(NewWatch){
    var marker = new google.maps.Marker({
        position:NewWatch.Coord,
        map:map

        //icon:''to chaneg marker
    });
    if(NewWatch.icon){
        marker.setIcon("http://newsworld/Images/MapIcon.png");
    }
    var infoWindow = new google.maps.InfoWindow({
        content: NewWatch.Summary
    });

    marker.addListener('click',function () {
        infoWindow.open(map,marker);
    })

}
console.log("Loaded Now:Loop Through Data");

//EventResultType = locArrgr
//How will use Result Type Event to get Headers and Descripting then get lat and lng of place it took place
/*
var LoopThroughData = function () {
    console.log("Lopo");
    console.log(NewsData);
    for(var i =0;i<NewsData.locAggr.results.length;i++){
        console.log(NewsData.locAggr.results[0].concept.location.lat);
        NewPoint = {
            Coord :{
                lat:NewsData.locAggr.results[i].concept.location.lat,
                lng:NewsData.locAggr.results[i].concept.location.long
            },
            icon:"http://newsworld/Images/MapIcon.png"

        }
        AddMarker(NewPoint);
    }
*/


//CALL BACK FUNCTION FOR GEOCODE GOOGLE MAPS WILL SAVE TO GLOBAL VAR
//Returning Object Doent work**Becuase it Asynchronous
//Correction call back function will be called when the JSON request is complemeted
//Possible send geocode A array of places will be more effiecnt
///Needs Update possible do in php or server side
//

//--------------------------------------------------------------------------------
// var Goecode_Lat;
// var Geocode_lng;
// var i = 0;
// function callback(data) {
//     Goecode_Lat =data["0"].geometry.location.lat();
//     Geocode_lng = data["0"].geometry.location.lng();
//     CreateMarker();
// }
//
//     var LoopThroughData = function () {
//         console.log("Lopo");
//         console.log(NewsData);
//         for (;i < NewsData.events.results.length; i++) {
//            try {
//                //Gets lng and lat
//                var location = NewsData.events.results[i].location.country.label.eng + " , " + NewsData.events.results[i].location.label.eng;
//
//                geocoder.geocode({'address': location}, function (results, status) {
//                    if (status === google.maps.GeocoderStatus.OK) {
//                        callback(results);
//                    } else {
//                        console.log("Fail");
//                    }
//                });
//            }catch (err){
//                console.log("Error");
//            }
//            }
//         }
//
//         function CreateMarker() {
//             NewPoint = {
//                 Coord :{
//                     lat:Goecode_Lat,
//                     lng:Geocode_lng
//                 },
//                 location:location
//
//             }
//             console.log("index" + i);
//             if(NewsData.events.results[i].eventDate !== null){
//                 NewPoint.EventDate = NewsData.events.results[i].eventDate;
//             }
//             if(NewsData.events.results[i].title.eng !== null){
//                 NewPoint.EventTitle=NewsData.events.results[i].title.eng;
//             }
//             if(NewsData.events.results[i].summary.eng !== null){
//                 NewPoint.Summary = NewsData.events.results[i].summary.eng;
//                 AddMarker(NewPoint);
//             }
//
//         }
//------------------------------------------------------------
// Version 3

function LoopThroughData() {
    for(var i = 0;i<NewsData.articles.results.length;i++){
        if(NewsData.articles.results[i].location != null){
            console.log("Result " + i + " Has location ");
            NewPoint = {
                Coord:{
                 lat: NewsData.articles.results[i].location.lat,
                 lng:NewsData.articles.results[i].location.long
                },
                Summary:NewsData.articles.results[i].body
            }
            AddMarker(NewPoint);

        }
    }



}







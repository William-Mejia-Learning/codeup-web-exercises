(function(){
    "use strict";
//
    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|")
//
//     /**
//      * TODO:
//      * Convert planetsString to an array, and save it in a variable named
//      * planetsArray.
//      * console.log planetsArray to check your work
//      */
//

    console.log(planetsArray);
//
//     /**
//      * TODO:
//      * Create a string with <br> tags between each planet. console.log() your
//      * results. Why might this be useful?
//      *I would be usefull I this ever needed to be displayed on the HTML
//      *
//      *
//      *
//      * BONUS:
//      * Create another string that would display your planets in an undordered
//      * list. You will need an opening AND closing <ul> tags around the entire
//      * string, and <li> tags around each planet.
//      */
//
    var  finalString = planetsArray.join('<br>');
    console.log(finalString);

    // planetsArray.unshift('<ul>');
    // planetsArray.push('</ul>');
    // console.log(planetsArray);
    // let planetsArray2 = planetsArray.join("</li><li>");
    // // console.log(planetsArray2);
    // planetsArray2 = planetsArray2.replace("</li>", "")
    // planetsArray2 = planetsArray2.replace([planetsArray2.length - 2])
    // // planetsArray2 = planetsArray2.replace(" ", "</li>")
    // console.log(planetsArray2)

    let planetsArray3 = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";
    console.log(planetsArray3)
    document.querySelector("h1").innerHTML = planetsArray3;


})();
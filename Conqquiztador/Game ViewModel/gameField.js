﻿/* Every click on game field will return point coordinates of the mouse pointer X and Y . 
 * Also on click will be showed flag animated image. This image mark the teritory, witch will be under attack.
 * The point X and Y are using to change the territory owner, if the player win the quiz.
 */

//TODO: Define administration areas coordinates

function getPointCoordinates(event) {

    pointX = event.offsetX ? (event.offsetX) : event.pageX - document.getElementById("mouse_pointer").offsetLeft;
    pointY = event.offsetY ? (event.offsetY) : event.pageY - document.getElementById("mouse_pointer").offsetTop;
    document.getElementById("flag").style.left = (pointX - 1);
    document.getElementById("flag").style.top = (pointY - 15);
    document.getElementById("flag").style.visibility = "visible";

    var coordinates = new Array;
    coordinates[0] = pointX;
    coordinates[1] = pointY;
    console.log(coordinates[0], coordinates[1]);

    return coordinates;
}

function changeТerritoryOwner(coordinates) {
    //TODO: 
    //assign pointX and pointY;
    //check who's the current owner of territory if exists
    //change the owner
    //return new owner
}

function chnageDecoration(owner) {
    //TODO:
    //assign colour of the teritory if owner exists
    //assign new flag
}
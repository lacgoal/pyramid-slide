
function pyramidSlideChange()
{
    var brick = document.getElementById("brickSymbol").value;
    var height = document.getElementById("pyramidSlide").value;

    document.getElementById("sliderDisplay").innerHTML = height;
    drawPyramid(height, brick);
}

 //drawPyramid function renders a Mario pyramid of specified height
function drawPyramid(height, brick) {
    //clear old content
    document.getElementById("pyramid").innerHTML = "";
    // for each row....
    for (var row = 0; row < height; row++) {
        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;
        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brick;
        }
        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}

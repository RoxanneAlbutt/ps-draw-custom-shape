//Draw Custom Shape. Create a path or shape according to a user generated list of path points and anchors.

// Copyright 2019
// September 30, 2019 
// Written by Roxanne Albutt
// http://www.roxannealbutt.org
// e-mail: roxanne.albutt@gmail.com

//==================================== GLOBALS =============================================
var myDoc = app.activeDocument;
//==================================== MAIN ================================================

// Make Photoshop the frontmost application
app.bringToFront();

// Save the user's layout
var startRulerUnits = app.preferences.rulerUnits;
var startDisplayDialogs = app.displayDialogs;

// Set the units to pixels and set no dialogs
app.preferences.rulerUnits = Units.PIXELS;
app.displayDialogs = DialogModes.NO;

// Needed to access PathPointInfo
cTID = function(s) {  return app.charIDToTypeID(s);};
sTID = function(s) {  return app.stringIDToTypeID(s);};

function Main() {
    // Create a new array that will hold the new shape's path points;
    points = new Array();

    // Assign the custom Points in the shape
    points[0] = new ShapePoint([200,100], [200,100], [200,100]);
    points[1] = new ShapePoint([150,50], [100,50], [200,50]);
    points[2] = new ShapePoint([100,100], [100,100], [100,100]); 
    
    // Create the Shape
    DrawCustomShape(myDoc, points, true, false);   
}

Main();

// Restore the user's preferences
app.preferences.rulerUnits = startRulerUnits;
app.displayDialogs = startDisplayDialogs;

//====================================  FUNCTIONS ==========================================

function DrawCustomShape(doc, points, isClosed, isShapeDeleted) {
    var lineArray = new Array();   
    
    // Create an array of pathpoints
    for (var i = 0; i < points.length; i ++) {
        lineArray[i] = new PathPointInfo;
        lineArray[i].kind = PointKind.CORNERPOINT;
        lineArray[i].anchor = points[i].anchor;
        lineArray[i].leftDirection = points[i].left;
        lineArray[i].rightDirection = points[i].right;        
    }

    // Create the main path 
    var spi = new SubPathInfo();
    spi.closed = isClosed;
    spi.operation = ShapeOperation.SHAPEXOR;
    spi.entireSubPath = lineArray;  

    // Create the path item
    var line = doc.pathItems.add("Shape", [spi]);
    
    // Delete it 
    if (isShapeDeleted) { line.remove(); };
}

//====================================  OBJECTS ==========================================

/*
A custom constructer to use when creating a path point
 - Anchor is the location of the point
 - Left / right are the directions that determines the left and right curve
 - If the curve is straight, assign left/right to the anchor position
*/
function ShapePoint(anchor, left, right) {
    this.anchor = anchor;
    this.left = left;
    this.right = right;
}




# Draw Custom Shape 
### Install

1. Download [draw-custom-shape.zip](https://github.com/RoxanneAlbutt/ps-draw-custom-shape/blob/master/draw-custom-shape.zip?raw=true)
2. Place `draw-custom-shape.jsx` in the Photoshop Scripts folder.
	- OS X: `/Applications/[Photoshop]/Presets/Scripts/`
	- Windows: `C:\[Program Files]\Adobe\[Photoshop]\Presets\Scripts`
4. Restart Photoshop. The script should now be available in `File ? Scripts ? draw-custom-shape`.

### Usage
Save Photoshop file into multiple sizes in one click.

Add point paths in the Main() function to the points array by adding a new PathPoint with the parameters (anchor(x,y), leftdirection(x,y), rightdirection(x,y).

#### For example:

new ShapePoint([200,100], [200,100], [200,100]); *will create a point at position X:200 Y:100 with no curve anchor*.

new ShapePoint([150,50], [100,50], [200,50]); *will create a point at position X:150 Y:50 with equal curving to its left and right anchors.*


### License
Copyright © 2019 Roxanne Albutt 

Multi-size Saver is licensed under the MIT licence. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.

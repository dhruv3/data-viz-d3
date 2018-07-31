# Data Visualization with D3
D3.js, or D3, stands for Data Driven Documents. D3 is a JavaScript library to create dynamic and interactive data visualizations in the browser. It's built to work with common web standards, namely HTML, CSS, and Scalable Vector Graphics (SVG).

D3 takes input data and maps it into a visual representation of that data. It supports many different data formats. D3 lets you bind (or attach) the data to the Document Object Model (DOM). You use HTML or SVG elements with D3's built-in methods to transform the data into a visualization.

## Add Document Elements with D3
```javascript
d3.select("ul")
  .append("li")
  .text("Very important item");
```
The `select()` method selects one element from the document. It takes an argument for the name of the element you want and returns an HTML node for the first element in the document that matches the name.

The `append()` method takes an argument for the element you want to add to the document. It appends an HTML node to a selected item, and returns a handle to that node.

The `text()` method either sets the text of the selected node, or gets the current text. To set the value, you pass a string as an argument inside the parentheses of the method.

## Select a Group of Elements with D3
`selectAll()` method to select a group of elements. It returns an array of HTML nodes for all the items in the document that match the input string.

## Work with Data in D3
The `data()` method is used on a selection of DOM elements to attach the data to those elements. The data set is passed as an argument to the method.
```javascript
<body>
  <ul></ul>
  <script>
    const dataset = ["a", "b", "c"];
    d3.select("ul").selectAll("li")
      .data(dataset)
      .enter()
      .append("li")
      .text("New item");
  </script>
</body>
```
It may seem confusing to select elements that don't exist yet. This code is telling D3 to first select the `ul` on the page. Next, select all list items, which returns an empty selection. Then the `data()` method reviews the dataset and runs the following code three times, once for each item in the array. The `enter()` method sees there are no `li` elements on the page, but it needs 3 (one for each piece of data in `dataset`). New `li` elements are appended to the `ul` and have the text "New item".

## Work with Dynamic Data in D3
The D3 `text()` method can take a string or a callback function as an argument:
```javascript
selection.text((d) => d)
```
In the example above, the parameter `d` refers to a single entry in the dataset that a selection is bound to.

## Add Inline Styling to Elements
The `style()` method takes a comma-separated key-value pair as an argument. Here's an example to set the selection's text color to blue:
```javascript
selection.style("color","blue");
```
## Change Styles Based on Data
You can use a callback function in the `style()` method and include the conditional logic. The callback function uses the `d` parameter to represent the data point:

```javascript
selection.style("color", (d) => {
  /* Logic that returns the color based on a condition */
});
```
## Add Classes with D3
The attr() method works the same way that style() does. It takes comma-separated values, and can use a callback function. Here's an example to add a class of "container" to a selection:
```javascript
selection.attr("class", "container");
```
## Learn About SVG in D3
"scalable" means that, if you zoom in or out on an object, it would not appear pixelated.

SVG shapes for a web page must go within an HTML `svg` tag.

Width and height attributes do not have units. This is the building block of scaling - the element will always have a 5:1 width to height ratio, no matter what the zoom level is.

## Dynamically Set the Coordinates for Each Bar
```javascript
selection.attr("property", (d, i) => {
  /* 
  * d is the data point value
  * i is the index of the data point in the array
  */
})
```
`data()` method parses the data set, and any method that's chained after `data()` is run once for each item in the data set.
## Invert SVG Elements
The `y` coordinate that is `y = heightOfSVG - heightOfBar` would place the bars right-side-up.
## Add Attributes to the Circle Elements
All methods chained after `data(dataset)` run once per item in `dataset`.
## Create a Linear Scale with D3
In D3, there are scales to help plot data. `Scales` are functions that tell the program how to map a set of raw data points onto the pixels of the SVG canvas.

D3 has several scale types. For a linear scale (usually used with quantitative data), there is the D3 method scaleLinear():
```javascript
const scale = d3.scaleLinear()
```
By default, a scale uses the identity relationship. The value of the input is the same as the value of the output.
## Set a Domain and a Range on a Scale
```javascript
// Set a domain
// The domain covers the set of input values
scale.domain([50, 480]);
// Set a range
// The range covers the set of output values
scale.range([10, 500]);
scale(50) // Returns 10
scale(480) // Returns 500
scale(325) // Returns 323.37
scale(750) // Returns 807.67
d3.scaleLinear()
```
## d3.min and d3.max
```javascript
const exampleData = [34, 234, 73, 90, 6, 52];
d3.min(exampleData) // Returns 6
d3.max(exampleData) // Returns 234
```
`min()` and `max()` methods take a callback function.
```javascript
const locationData = [[1, 7],[6, 3],[8, 3]];
// Returns the smallest number out of the first elements
const minX = d3.min(locationData, (d) => d[0]);
// minX compared 1, 6, and 8 and is set to 1
```
## Use Dynamic Scales
```javascript
range([padding, w - padding])
```
The padding may be confusing at first. Picture the x-axis as a horizontal line from 0 to 500 (the width value for the SVG canvas). Including the padding in the `range()` method forces the plot to start at 30 along that line (instead of 0), and end at 470 (instead of 500).

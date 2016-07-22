
// helper function to create HSL string from a vector of colors
var renderHSL = function(hsl) { // omg
  var ht = Math.min(360, Math.max(0, hsl[0]));
  var st = Math.min(100, Math.max(0, hsl[1]));
  var lt = Math.min(100, Math.max(0, hsl[2]));
  return 'hsl(' + ht + ',' + st + '%,' + lt + '%)';
}

// randomly shuffle an array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// html escaping util
var entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;'
};
function escapeHtml(string) {
  return String(string).replace(/[&<>"'\/]/g, function (s) {
    return entityMap[s];
  });
}


// store colors in a global var because why not
var WAD_COLORS = [
  "rgb(87, 87, 87)",    // Dark Gray
 
  //"rgb(0, 0, 0)",       // Black
];

// ----------------------------------------------------------------------------
// visualization utils
// ----------------------------------------------------------------------------

// renders a bounding box and text annotaiton in svg element elt. assumes d3js
function renderBox(elt, box, color, width, text) {
  if (typeof(width) === 'undefined') width = 1;
  elt.append('rect')
     .attr('x', box[0])
     .attr('y', box[1])
     .attr('width', box[2])
     .attr('height', box[3])
     .attr('stroke', 0)
     .attr('fill', 'none')
     .attr('stroke-width', width);
  if (typeof(text) !== 'undefined' && text != '') {
    var t = elt.append('text').text(text)
               .attr('x', box[0]).attr('y', box[1])
               .attr('dominant-baseline', 'hanging')
               .attr('text-anchor', 'start');
    t = t[0][0];
    var tbox = t.getBBox();
    elt.insert('rect', 'text').attr('fill', color)
       .attr('x', tbox.x).attr('y', tbox.y)
       .attr('width', tbox.width)
       .attr('height', tbox.height);
  }
}

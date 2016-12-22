var button = $("#button")
var list = $("#list-display")

button.click(function(){
  $.ajax({
    method: "GET",
    url: "https://www.govtrack.us/api/v2/person",
    success: function(data) {    
      var arr = []
      data.objects.forEach(function(object) {
        arr.push(object.firstname)
        list.append("<div>" + object.firstname + " " +  object.lastname + "; " + object.birthday + "</div>")
      })
    }
  })
});

//var items = [523,3452,334,31,5346];
//var item = items[Math.floor(Math.random() * "items".length)]
//console.log(item)
//list.append("<div>" + item + "</div>")


//
//var arr = []
//arr.push(1, 2)
//console.log(arr)
//
//data.objects = [{firstname:"ronald", height: "7"}, {name:"sophia"}]
//console.log(object.firstname)

//var fill = d3.scale.category20();

//makeCloud(["hi", "there", "friedn"])
//
//function makeCloud(words) {
//  var layout = d3.layout.cloud()
//  .size([500, 500])
//  .words(words.map(function(d) {
//    return {text: d, size: 10 + Math.random() * 90, test: "haha"};
//  }))
//  .padding(5)
//  .rotate(function() { return ~~(Math.random() * 2) * 90; })
//  .font("Impact")
//  .fontSize(function(d) { return d.size; })
//  .on("end", draw);
//
//  layout.start(); 
//}
////
//function draw(words) {
//  d3.select("body").append("svg")
//    .attr("width", layout.size()[0])
//    .attr("height", layout.size()[1])
//    .append("g")
//    .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
//    .selectAll("text")
//    .data(words)
//    .enter().append("text")
//    .style("font-size", function(d) { return d.size + "px"; })
//    .style("font-family", "Impact")
//    .style("fill", function(d, i) { return fill(i); })
//    .attr("text-anchor", "middle")
//    .attr("transform", function(d) {
//    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
//  })
//    .text(function(d) { return d.text; });
//}
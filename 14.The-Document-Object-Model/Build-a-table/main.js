const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  var body = document.getElementsByTagName("body")[0];
  let mountains = document.getElementById("mountains");
  let myTable = document.createElement("table");
  let myHeadingRow = document.createElement('tr');

  

  myHeadingss = ["name", "height", "place"];
  for (let s of myHeadingss){
    let celA = document.createElement("th");
    var cellText = document.createTextNode(s);
    celA.appendChild(cellText);
    myHeadingRow.appendChild(celA);
  }
  myTable.appendChild(myHeadingRow);
  for (let o of MOUNTAINS){
    let myDataRows = document.createElement("tr");
    let values = Object.values(o);
    for (const v of values) {
      var cell = document.createElement("td");
      var cellText = document.createTextNode(v);
      cell.appendChild(cellText);
      
      if (!isNaN(v)){
        cell.style.textAlign = "right";
      }
      myDataRows.appendChild(cell);
   }
    myTable.appendChild(myDataRows);

  }

  
  mountains.appendChild(myTable);
  


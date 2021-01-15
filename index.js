function generate_table() {
   table1()
   table2()
   
  }

function table1(){
     // get the reference for the body
     var div1 = document.getElementById("table1");
 
     var inputTable = document.getElementById("inputTableRows").value;
 
 
     // creates a <table> element and a <tbody> element
     // var p = document.createElement(`p aaa`);
     var tbl = document.createElement("table");
     var tblBody = document.createElement("tbody");
   
     // creating all cells
     for (var i = 0; i < inputTable; i++) {
       // creates a table row
       var row = document.createElement("tr");
   
       for (var j = 0; j < inputTable; j++) {
         // Create a <td> element and a text node, make the text
         // node the contents of the <td>, and put the <td> at
         // the end of the table row
         var cell = document.createElement("td");
         var cellText = document.createElement(`input`);
         cell.appendChild(cellText);
         row.appendChild(cell);
       }
   
       // add the row to the end of the table body
       var p = document.createTextNode("Masukan nilai Matriks 1 :")
       tblBody.appendChild(row);
     }
   
     // put the <tbody> in the <table>
     tbl.appendChild(tblBody);
     // appends <table> into <body>
     div1.appendChild(p);
     div1.appendChild(tbl);
     // sets the border attribute of tbl to 2;
}
function table2(){
    // get the reference for the body
    var div2 = document.getElementById("table2");

    var inputTable = document.getElementById("inputTableRows").value;
    var input = "";
    input = input ="<input id='ip'>";

    // creates a <table> element and a <tbody> element
    // var p = document.createElement(`p aaa`);
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // creating all cells
    for (var i = 0; i < inputTable; i++) {
      // creates a table row
      var row = document.createElement("tr");
  
      for (var j = 0; j < inputTable; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        var cellText = document.createElement("input");
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
      var p = document.createTextNode("Masukan nilai Matriks 2 :")
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    div2.appendChild(p);
    
    div2.appendChild(tbl);
    // sets the border attribute of tbl to 2;
}

function tambah (){
    
}
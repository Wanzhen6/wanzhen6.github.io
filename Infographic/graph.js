let csv_data, rows, cols, choice1, choice2, choice3, choice4, newcases, newcases2, newcases3, newcases4
let previous, previous2, previous3, previous4, xdata, ydata, x2data, y2data, x3data, y3data, x4data, y4data
newcases = "", newcases2 = "" , newcases3 = "", newcases4 = ""

function init() {
  previous = 0
  previous2 = 0
  previous3 = 0
  previous4 = 0
  xdata = []
  ydata = []
  x2data = []
  y2data = []
  x3data = []
  y3data = []
  x4data = []
  y4data = []
}

function preload() {
  csv_data = loadTable('https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv')
}

function setup() {
  noCanvas()

  rows = csv_data.getRowCount()
  cols = csv_data.getColumnCount()
}



function create() {
  choice1=document.querySelector("#state1").value
  choice2=document.querySelector("#state2").value
  choice3=document.querySelector("#state3").value
  choice4=document.querySelector("#state4").value
  init()
  createGraph()
}

function createGraph() {
  for (let i = 0; i < rows; i++) {
    let state = csv_data.getString(i, 1)
    if (state == choice1) {
      xdata.push(csv_data.getString(i, 0))
      newcases=parseInt(csv_data.getString(i, 3) - previous)
      ydata.push(parseInt(csv_data.getString(i, 3) - previous))
      previous = parseInt(csv_data.getString(i, 3))
    }
    else if (state == choice2) {
      x2data.push(csv_data.getString(i, 0))
      newcases2=parseInt(csv_data.getString(i, 3) - previous2)
      y2data.push(parseInt(csv_data.getString(i, 3) - previous2))
      previous2 = parseInt(csv_data.getString(i, 3))
    }
    else if (state == choice3) {
      x3data.push(csv_data.getString(i, 0))
      newcases3=parseInt(csv_data.getString(i, 3) - previous3)
      y3data.push(parseInt(csv_data.getString(i, 3) - previous3))
      previous3 = parseInt(csv_data.getString(i, 3))
    }
    else if (state == choice4) {
      x4data.push(csv_data.getString(i, 0))
      newcases4=parseInt(csv_data.getString(i, 3) - previous4)
      y4data.push(parseInt(csv_data.getString(i, 3) - previous4))
      previous4 = parseInt(csv_data.getString(i, 3))
    }
  }


  let trace1 = {
    x: xdata,
    y: ydata,
    mode: 'lines',
    name: choice1,
    line: {
      color: 'random(255)',
      width: 1
    }
  };

  let trace2 = {
    x: x2data,
    y: y2data,
    name: choice2,
    line: {
      color: 'random(255)',
      width: 1
    }
  };
  let trace3 = {
    x: x3data,
    y: y3data,
    name: choice3,
    line: {
      color: 'random(255)',
      width: 1
    }
  };
  let trace4 = {
    x: x4data,
    y: y4data,
    name: choice4,
    line: {
      color: 'random(255)',
      width: 1
    }
  }

  let layout = {
    // width: windowWidth - 50,
    //height: windowHeight - 200
  }


  let data = [trace1, trace2, trace3, trace4]

  Plotly.newPlot('myDiv', data, layout);
document.querySelector("#mytable").innerHTML=`<table>
  <tr>
    <th>State</th>
    <th>New Confirmed Case(s)</th>
  </tr>

  <tr>
    <td>`+choice1+`</td>
    <td>`+newcases+`</td>
  </tr>

  <tr>
    <td>`+choice2+`</td>
    <td>`+newcases2+`</td>
  </tr>

  <tr>
    <td>`+choice3+`</td>
    <td>`+newcases3+`</td>
  </tr>

  <tr>
    <td>`+choice4+`</td>
    <td>`+newcases4+`</td>
  </tr>

</table>`
}





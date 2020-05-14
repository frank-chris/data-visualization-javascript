

let schema = [{
    "name": "Time",
    "type": "date",
    "format": "%d-%b-%y"
  }, {
    "name": "Type",
    "type": "string"
  }, {
    "name": "Cases",
    "type": "number"
  }]
  
  
  const dataStore = new FusionCharts.DataStore();
  const dataSource = {
    chart: {palettecolors: "5d62b5,f2726f",
            exportEnabled: "1"
  },
    // caption: {
    //   text: "Sales Analysis"
    // },
    // subcaption: {
    //   text: "Grocery & Footwear"
    // },
    series: "Type",
    yaxis: [
      {
        plot: "Cases",
        title: "Cases",
        // format: {
        //   prefix: "$"
        // }
      }
    ]
  };
  dataSource.data = dataStore.createDataTable(data, schema);
  
  new FusionCharts({
    type: "timeseries",
    renderAt: "chart-container",
    width: "100%",
    height: "500",
    dataSource: dataSource
  }).render();
  
  
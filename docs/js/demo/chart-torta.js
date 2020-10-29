// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace('.', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? '.' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Area Chart Papel Obra - Mat. 3361
// var ctx = document.getElementById("AreaChart3361");
// var myLineChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
//     datasets: [{
//       label: "Stock",
//       lineTension: 0.1,
//       backgroundColor: "rgba(78, 115, 223, 0.05)",
//       borderColor: "rgba(78, 115, 223, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointBorderColor: "rgba(78, 115, 223, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: [1833, 43775, 4279,	75,	45,	15, 118110, 107550, 91590, 80620],
//     },
//     {
//       label: "Salidas",
//       lineTension: 0.1,
//       backgroundColor: "rgba(255, 0, 93, 0.05)",
//       borderColor: "rgba(255, 0, 93, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(255, 0, 93, 1)",
//       pointBorderColor: "rgba(255, 0, 93, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(255, 0, 93, 1)",
//       pointHoverBorderColor: "rgba(255, 0, 93, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: [1788, 39596, 4204, 30, 30, 15, 10560, 16280, 11060, 19380],
//     }],
//   },
//   options: {
//     maintainAspectRatio: false,
//     layout: {
//       padding: {
//         left: 10,
//         right: 25,
//         top: 25,
//         bottom: 0
//       }
//     },
//     scales: {
//       xAxes: [{
//         time: {
//           unit: 'date'
//         },
//         gridLines: {
//           display: false,
//           drawBorder: false
//         },
//         ticks: {
//           maxTicksLimit: 7
//         }
//       }],
//       yAxes: [{
//         ticks: {
//           maxTicksLimit: 5,
//           padding: 10,
//           // Include a dollar sign in the ticks
//           callback: function(value, index, values) {
//             return '' + number_format(value);
//           }
//         },
//         gridLines: {
//           color: "rgb(234, 236, 244)",
//           zeroLineColor: "rgb(234, 236, 244)",
//           drawBorder: false,
//           borderDash: [2],
//           zeroLineBorderDash: [2]
//         }
//       }],
//     },
//     legend: {
//       display: true, position: 'bottom'
//     },
//     tooltips: {
//       backgroundColor: "rgb(255,255,255)",
//       bodyFontColor: "#858796",
//       titleMarginBottom: 10,
//       titleFontColor: '#6e707e',
//       titleFontSize: 14,
//       borderColor: '#dddfeb',
//       borderWidth: 1,
//       xPadding: 15,
//       yPadding: 15,
//       displayColors: false,
//       intersect: false,
//       mode: 'index',
//       caretPadding: 10,
//       callbacks: {
//         label: function(tooltipItem, chart) {
//           var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
//           return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
//         }
//       }
//     }
//   }
// });

// // Area Chart Tóner LEXMARK - Mat. 296
// var ctx = document.getElementById("AreaChart296");
// var myLineChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
//     datasets: [{
//       label: "Stock",
//       lineTension: 0.1,
//       backgroundColor: "rgba(78, 115, 223, 0.05)",
//       borderColor: "rgba(78, 115, 223, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointBorderColor: "rgba(78, 115, 223, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: [2776, 2143, 1648, 1164, 1126, 1118, 996, 710, 417, 193],
//     },{
//       label: "Salidas",
//       lineTension: 0.1,
//       backgroundColor: "rgba(255, 0, 93, 0.05)",
//       borderColor: "rgba(255, 0, 93, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(255, 0, 93, 1)",
//       pointBorderColor: "rgba(255, 0, 93, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(255, 0, 93, 1)",
//       pointHoverBorderColor: "rgba(255, 0, 93, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: [664, 495, 484, 38, 8, 122, 286, 293, 227, 187],
//     }],
//   },
//   options: {
//     maintainAspectRatio: false,
//     layout: {
//       padding: {
//         left: 10,
//         right: 25,
//         top: 25,
//         bottom: 0
//       }
//     },
//     scales: {
//       xAxes: [{
//         time: {
//           unit: 'date'
//         },
//         gridLines: {
//           display: false,
//           drawBorder: false
//         },
//         ticks: {
//           maxTicksLimit: 7
//         }
//       }],
//       yAxes: [{
//         ticks: {
//           maxTicksLimit: 5,
//           padding: 10,
//           // Include a dollar sign in the ticks
//           callback: function(value, index, values) {
//             return '' + number_format(value);
//           }
//         },
//         gridLines: {
//           color: "rgb(234, 236, 244)",
//           zeroLineColor: "rgb(234, 236, 244)",
//           drawBorder: false,
//           borderDash: [2],
//           zeroLineBorderDash: [2]
//         }
//       }],
//     },
//     legend: {
//       display: true, position: 'bottom',
//     },
//     tooltips: {
//       backgroundColor: "rgb(255,255,255)",
//       bodyFontColor: "#858796",
//       titleMarginBottom: 10,
//       titleFontColor: '#6e707e',
//       titleFontSize: 14,
//       borderColor: '#dddfeb',
//       borderWidth: 1,
//       xPadding: 15,
//       yPadding: 15,
//       displayColors: false,
//       intersect: false,
//       mode: 'index',
//       caretPadding: 10,
//       callbacks: {
//         label: function(tooltipItem, chart) {
//           var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
//           return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
//         }
//       }
//     }
//   }
// });

// // Area Chart ALCOHOL EN GEL 500CM3 - Mat. 763
// var ctx = document.getElementById("AreaChart763");
// var myLineChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
//     datasets: [{
//       label: "Stock",
//       lineTension: 0.1,
//       backgroundColor: "rgba(78, 115, 223, 0.05)",
//       borderColor: "rgba(78, 115, 223, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointBorderColor: "rgba(78, 115, 223, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: [0, 0, 0, 0, 0, 0, 10750, 61718, 133429, 121652],
//     },{
//       label: "Salidas",
//       lineTension: 0.1,
//       backgroundColor: "rgba(255, 0, 93, 0.05)",
//       borderColor: "rgba(255, 0, 93, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(255, 0, 93, 1)",
//       pointBorderColor: "rgba(255, 0, 93, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(255, 0, 93, 1)",
//       pointHoverBorderColor: "rgba(255, 0, 93, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: [0, 0, 0, 0, 0, 0, 712, 18593, 18397, 5265],
//     }],
//   },
//   options: {
//     maintainAspectRatio: false,
//     layout: {
//       padding: {
//         left: 10,
//         right: 25,
//         top: 25,
//         bottom: 0
//       }
//     },
//     scales: {
//       xAxes: [{
//         time: {
//           unit: 'date'
//         },
//         gridLines: {
//           display: false,
//           drawBorder: false
//         },
//         ticks: {
//           maxTicksLimit: 7
//         }
//       }],
//       yAxes: [{
//         ticks: {
//           maxTicksLimit: 5,
//           padding: 10,
//           // Include a dollar sign in the ticks
//           callback: function(value, index, values) {
//             return '' + number_format(value);
//           }
//         },
//         gridLines: {
//           color: "rgb(234, 236, 244)",
//           zeroLineColor: "rgb(234, 236, 244)",
//           drawBorder: false,
//           borderDash: [2],
//           zeroLineBorderDash: [2]
//         }
//       }],
//     },
//     legend: {
//       display: true, position: 'bottom'
//     },
//     tooltips: {
//       backgroundColor: "rgb(255,255,255)",
//       bodyFontColor: "#858796",
//       titleMarginBottom: 10,
//       titleFontColor: '#6e707e',
//       titleFontSize: 14,
//       borderColor: '#dddfeb',
//       borderWidth: 1,
//       xPadding: 15,
//       yPadding: 15,
//       displayColors: false,
//       intersect: false,
//       mode: 'index',
//       caretPadding: 10,
//       callbacks: {
//         label: function(tooltipItem, chart) {
//           var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
//           return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
//         }
//       }
//     }
//   }
// });

// // Area Chart BARBIJOS - Mat. 2239
// var ctx = document.getElementById("AreaChart2239");
// var myLineChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
//     datasets: [{
//       label: "Stock",
//       lineTension: 0.1,
//       backgroundColor: "rgba(78, 115, 223, 0.05)",
//       borderColor: "rgba(78, 115, 223, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointBorderColor: "rgba(78, 115, 223, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: [0, 0, 0, 218, 389, 65, 9004, 5351, 4192, 3354],
//     },{
//       label: "Salidas",
//       lineTension: 0.1,
//       backgroundColor: "rgba(255, 0, 93, 0.05)",
//       borderColor: "rgba(255, 0, 93, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(255, 0, 93, 1)",
//       pointBorderColor: "rgba(255, 0, 93, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(255, 0, 93, 1)",
//       pointHoverBorderColor: "rgba(255, 0, 93, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: [0, 0, 0, 110, 324, 65, 3653, 1159, 888, 753],
//     }],
//   },
//   options: {
//     maintainAspectRatio: false,
//     layout: {
//       padding: {
//         left: 10,
//         right: 25,
//         top: 25,
//         bottom: 0
//       }
//     },
//     scales: {
//       xAxes: [{
//         time: {
//           unit: 'date'
//         },
//         gridLines: {
//           display: false,
//           drawBorder: false
//         },
//         ticks: {
//           maxTicksLimit: 7
//         }
//       }],
//       yAxes: [{
//         ticks: {
//           maxTicksLimit: 5,
//           padding: 10,
//           // Include a dollar sign in the ticks
//           callback: function(value, index, values) {
//             return '' + number_format(value);
//           }
//         },
//         gridLines: {
//           color: "rgb(234, 236, 244)",
//           zeroLineColor: "rgb(234, 236, 244)",
//           drawBorder: false,
//           borderDash: [2],
//           zeroLineBorderDash: [2]
//         }
//       }],
//     },
//     legend: {
//       display: true, position: 'bottom'
//     },
//     tooltips: {
//       backgroundColor: "rgb(255,255,255)",
//       bodyFontColor: "#858796",
//       titleMarginBottom: 10,
//       titleFontColor: '#6e707e',
//       titleFontSize: 14,
//       borderColor: '#dddfeb',
//       borderWidth: 1,
//       xPadding: 15,
//       yPadding: 15,
//       displayColors: false,
//       intersect: false,
//       mode: 'index',
//       caretPadding: 10,
//       callbacks: {
//         label: function(tooltipItem, chart) {
//           var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
//           return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
//         }
//       }
//     }
//   }
// });

// // Area Chart Tóner Ricoh 4500 - Mat. 2078
// var ctx = document.getElementById("AreaChart2078");
// var myLineChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
//     datasets: [{
//       label: "Stock",
//       lineTension: 0.1,
//       backgroundColor: "rgba(78, 115, 223, 0.05)",
//       borderColor: "rgba(78, 115, 223, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointBorderColor: "rgba(78, 115, 223, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: [291, 246, 223, 183, 183, 183, 177, 157, 129, 119],
//     },{
//       label: "Salidas",
//       lineTension: 0.1,
//       backgroundColor: "rgba(255, 0, 93, 0.05)",
//       borderColor: "rgba(255, 0, 93, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(255, 0, 93, 1)",
//       pointBorderColor: "rgba(255, 0, 93, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(255, 0, 93, 1)",
//       pointHoverBorderColor: "rgba(255, 0, 93, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: [45, 23, 40, 0, 0, 6, 20, 28, 10, 23],
//     }],
//   },
//   options: {
//     maintainAspectRatio: false,
//     layout: {
//       padding: {
//         left: 10,
//         right: 25,
//         top: 25,
//         bottom: 0
//       }
//     },
//     scales: {
//       xAxes: [{
//         time: {
//           unit: 'date'
//         },
//         gridLines: {
//           display: false,
//           drawBorder: false
//         },
//         ticks: {
//           maxTicksLimit: 7
//         }
//       }],
//       yAxes: [{
//         ticks: {
//           maxTicksLimit: 5,
//           padding: 10,
//           // Include a dollar sign in the ticks
//           callback: function(value, index, values) {
//             return '' + number_format(value);
//           }
//         },
//         gridLines: {
//           color: "rgb(234, 236, 244)",
//           zeroLineColor: "rgb(234, 236, 244)",
//           drawBorder: false,
//           borderDash: [2],
//           zeroLineBorderDash: [2]
//         }
//       }],
//     },
//     legend: {
//       display: true, position: 'bottom'
//     },
//     tooltips: {
//       backgroundColor: "rgb(255,255,255)",
//       bodyFontColor: "#858796",
//       titleMarginBottom: 10,
//       titleFontColor: '#6e707e',
//       titleFontSize: 14,
//       borderColor: '#dddfeb',
//       borderWidth: 1,
//       xPadding: 15,
//       yPadding: 15,
//       displayColors: false,
//       intersect: false,
//       mode: 'index',
//       caretPadding: 10,
//       callbacks: {
//         label: function(tooltipItem, chart) {
//           var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
//           return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
//         }
//       }
//     }
//   }
// });

// // Area Chart Alcohol en Gel 5Lt. - Mat. 3927
// var ctx = document.getElementById("AreaChart3927");
// var myLineChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
//     datasets: [{
//       label: "Stock",
//       lineTension: 0.1,
//       backgroundColor: "rgba(78, 115, 223, 0.05)",
//       borderColor: "rgba(78, 115, 223, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointBorderColor: "rgba(78, 115, 223, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: [0, 0, 0, 0, 0, 0, 960, 3600, 7434, 8262],
//     },{
//       label: "Salidas",
//       lineTension: 0.1,
//       backgroundColor: "rgba(255, 0, 93, 0.05)",
//       borderColor: "rgba(255, 0, 93, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(255, 0, 93, 1)",
//       pointBorderColor: "rgba(255, 0, 93, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(255, 0, 93, 1)",
//       pointHoverBorderColor: "rgba(255, 0, 93, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: [0, 0, 0, 0, 0, 0, 0, 6, 132, 302],
//     }],
//   },
//   options: {
//     maintainAspectRatio: false,
//     layout: {
//       padding: {
//         left: 10,
//         right: 25,
//         top: 25,
//         bottom: 0
//       }
//     },
//     scales: {
//       xAxes: [{
//         time: {
//           unit: 'date'
//         },
//         gridLines: {
//           display: false,
//           drawBorder: false
//         },
//         ticks: {
//           maxTicksLimit: 7
//         }
//       }],
//       yAxes: [{
//         ticks: {
//           maxTicksLimit: 5,
//           padding: 10,
//           // Include a dollar sign in the ticks
//           callback: function(value, index, values) {
//             return '' + number_format(value);
//           }
//         },
//         gridLines: {
//           color: "rgb(234, 236, 244)",
//           zeroLineColor: "rgb(234, 236, 244)",
//           drawBorder: false,
//           borderDash: [2],
//           zeroLineBorderDash: [2]
//         }
//       }],
//     },
//     legend: {
//       display: true, position: 'bottom'
//     },
//     tooltips: {
//       backgroundColor: "rgb(255,255,255)",
//       bodyFontColor: "#858796",
//       titleMarginBottom: 10,
//       titleFontColor: '#6e707e',
//       titleFontSize: 14,
//       borderColor: '#dddfeb',
//       borderWidth: 1,
//       xPadding: 15,
//       yPadding: 15,
//       displayColors: false,
//       intersect: false,
//       mode: 'index',
//       caretPadding: 10,
//       callbacks: {
//         label: function(tooltipItem, chart) {
//           var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
//           return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
//         }
//       }
//     }
//   }
// });

// // Area Chart Tóner Brother HL - Mat. 337
// var ctx = document.getElementById("AreaChart337");
// var myLineChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
//     datasets: [{
//       label: "Stock",
//       lineTension: 0.1,
//       backgroundColor: "rgba(78, 115, 223, 0.05)",
//       borderColor: "rgba(78, 115, 223, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointBorderColor: "rgba(78, 115, 223, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: [381, 381, 377, 361, 346, 346, 342, 335, 328, 327],
//     },{
//       label: "Salidas",
//       lineTension: 0.1,
//       backgroundColor: "rgba(255, 0, 93, 0.05)",
//       borderColor: "rgba(255, 0, 93, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(255, 0, 93, 1)",
//       pointBorderColor: "rgba(255, 0, 93, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(255, 0, 93, 1)",
//       pointHoverBorderColor: "rgba(255, 0, 93, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: [0, 4, 16, 15, 0, 4, 7, 7, 1, 0],
//     }],
//   },
//   options: {
//     maintainAspectRatio: false,
//     layout: {
//       padding: {
//         left: 10,
//         right: 25,
//         top: 25,
//         bottom: 0
//       }
//     },
//     scales: {
//       xAxes: [{
//         time: {
//           unit: 'date'
//         },
//         gridLines: {
//           display: false,
//           drawBorder: false
//         },
//         ticks: {
//           maxTicksLimit: 7
//         }
//       }],
//       yAxes: [{
//         ticks: {
//           maxTicksLimit: 5,
//           padding: 10,
//           // Include a dollar sign in the ticks
//           callback: function(value, index, values) {
//             return '' + number_format(value);
//           }
//         },
//         gridLines: {
//           color: "rgb(234, 236, 244)",
//           zeroLineColor: "rgb(234, 236, 244)",
//           drawBorder: false,
//           borderDash: [2],
//           zeroLineBorderDash: [2]
//         }
//       }],
//     },
//     legend: {
//       display: true, position: 'bottom'
//     },
//     tooltips: {
//       backgroundColor: "rgb(255,255,255)",
//       bodyFontColor: "#858796",
//       titleMarginBottom: 10,
//       titleFontColor: '#6e707e',
//       titleFontSize: 14,
//       borderColor: '#dddfeb',
//       borderWidth: 1,
//       xPadding: 15,
//       yPadding: 15,
//       displayColors: false,
//       intersect: false,
//       mode: 'index',
//       caretPadding: 10,
//       callbacks: {
//         label: function(tooltipItem, chart) {
//           var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
//           return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
//         }
//       }
//     }
//   }
// });

// // Area Chart Tóner HP Laser Jet 3005 - Mat. 290
// var ctx = document.getElementById("AreaChart290");
// var myLineChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
//     datasets: [{
//       label: "Stock",
//       lineTension: 0.1,
//       backgroundColor: "rgba(78, 115, 223, 0.05)",
//       borderColor: "rgba(78, 115, 223, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointBorderColor: "rgba(78, 115, 223, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: [1467, 1457, 1453, 1449, 1449, 1445, 1445, 1445, 1445, 1440],
//     },{
//       label: "Salidas",
//       lineTension: 0.1,
//       backgroundColor: "rgba(255, 0, 93, 0.05)",
//       borderColor: "rgba(255, 0, 93, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(255, 0, 93, 1)",
//       pointBorderColor: "rgba(255, 0, 93, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(255, 0, 93, 1)",
//       pointHoverBorderColor: "rgba(255, 0, 93, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: [10, 4, 4, 0, 4, 0, 0, 0, 5, 1],
//     }],
//   },
//   options: {
//     maintainAspectRatio: false,
//     layout: {
//       padding: {
//         left: 10,
//         right: 25,
//         top: 25,
//         bottom: 0
//       }
//     },
//     scales: {
//       xAxes: [{
//         time: {
//           unit: 'date'
//         },
//         gridLines: {
//           display: false,
//           drawBorder: false
//         },
//         ticks: {
//           maxTicksLimit: 7
//         }
//       }],
//       yAxes: [{
//         ticks: {
//           maxTicksLimit: 5,
//           padding: 10,
//           // Include a dollar sign in the ticks
//           callback: function(value, index, values) {
//             return '' + number_format(value);
//           }
//         },
//         gridLines: {
//           color: "rgb(234, 236, 244)",
//           zeroLineColor: "rgb(234, 236, 244)",
//           drawBorder: false,
//           borderDash: [2],
//           zeroLineBorderDash: [2]
//         }
//       }],
//     },
//     legend: {
//       display: true, position: 'bottom'
//     },
//     tooltips: {
//       backgroundColor: "rgb(255,255,255)",
//       bodyFontColor: "#858796",
//       titleMarginBottom: 10,
//       titleFontColor: '#6e707e',
//       titleFontSize: 14,
//       borderColor: '#dddfeb',
//       borderWidth: 1,
//       xPadding: 15,
//       yPadding: 15,
//       displayColors: false,
//       intersect: false,
//       mode: 'index',
//       caretPadding: 10,
//       callbacks: {
//         label: function(tooltipItem, chart) {
//           var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
//           return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
//         }
//       }
//     }
//   }
// });

// // Area Chart Alcohol en Gel 5Lt. - Mat. 6148
// var ctx = document.getElementById("AreaChart6148");
// var myLineChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
//     datasets: [{
//       label: "Stock",
//       lineTension: 0.1,
//       backgroundColor: "rgba(78, 115, 223, 0.05)",
//       borderColor: "rgba(78, 115, 223, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointBorderColor: "rgba(78, 115, 223, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: [0, 0, 0, 0, 0, 0, 200, 145, 142, 75],
//     },{
//       label: "Salidas",
//       lineTension: 0.1,
//       backgroundColor: "rgba(255, 0, 93, 0.05)",
//       borderColor: "rgba(255, 0, 93, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(255, 0, 93, 1)",
//       pointBorderColor: "rgba(255, 0, 93, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(255, 0, 93, 1)",
//       pointHoverBorderColor: "rgba(255, 0, 93, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: [0, 0, 0, 0, 0, 0, 55, 3, 67, 1],
//     }],
//   },
//   options: {
//     maintainAspectRatio: false,
//     layout: {
//       padding: {
//         left: 10,
//         right: 25,
//         top: 25,
//         bottom: 0
//       }
//     },
//     scales: {
//       xAxes: [{
//         time: {
//           unit: 'date'
//         },
//         gridLines: {
//           display: false,
//           drawBorder: false
//         },
//         ticks: {
//           maxTicksLimit: 7
//         }
//       }],
//       yAxes: [{
//         ticks: {
//           maxTicksLimit: 5,
//           padding: 10,
//           // Include a dollar sign in the ticks
//           callback: function(value, index, values) {
//             return '' + number_format(value);
//           }
//         },
//         gridLines: {
//           color: "rgb(234, 236, 244)",
//           zeroLineColor: "rgb(234, 236, 244)",
//           drawBorder: false,
//           borderDash: [2],
//           zeroLineBorderDash: [2]
//         }
//       }],
//     },
//     legend: {
//       display: true, position: 'bottom'
//     },
//     tooltips: {
//       backgroundColor: "rgb(255,255,255)",
//       bodyFontColor: "#858796",
//       titleMarginBottom: 10,
//       titleFontColor: '#6e707e',
//       titleFontSize: 14,
//       borderColor: '#dddfeb',
//       borderWidth: 1,
//       xPadding: 15,
//       yPadding: 15,
//       displayColors: false,
//       intersect: false,
//       mode: 'index',
//       caretPadding: 10,
//       callbacks: {
//         label: function(tooltipItem, chart) {
//           var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
//           return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
//         }
//       }
//     }
//   }
// });




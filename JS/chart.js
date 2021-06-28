'use strict';

var canvas = document.getElementById('myChart');
var ctx = canvas.getContext('2d');

// var dataPoints = [],
var myData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3500];

new Chart(ctx, {
  type: 'bar',
  title: {
    text: "Daily Caloric Intake"
  },
  data: {
    labels: ['Fruit', 'Vegetable', 'Protein',  'Carb', 'Dairy', 'Total'],
    datasets: [{
      label: 'Caloric Intake',
      // data: myData,
      data: [ 
        {y: "TotalDairyCal", label: "Dairy"},
        {y: "TotalCarbCal", label: "Carb"},
        {y: "TotalProteinCal", label: "Protein"},
        {y: "TotalVegCal", label: "Vegetable"},
        {y: "TotalFruitCal", label: "Fruit"},
        {y: "numbers", label: "Total"},

      ]
      backgroundColor: [
        '#000000',
        '#ffffff',
        'indigo',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
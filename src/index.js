import _ from 'lodash';
import Chart from 'chart.js/auto';
import './styles.scss'

// Sample data for Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  },
});

// Using lodash to demonstrate
const array = [1, 2, 3, 4, 5];
const sum = _.sum(array);
console.log('Sum:', sum);
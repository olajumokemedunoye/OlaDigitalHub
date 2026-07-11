// Synthetic data for illustration only.
const NAVY = '#1F3A5F';
const TEAL = '#00A8A8';
const GREY = '#B9C7D6';
const AMBER = '#E8A33D';

Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.color = '#52657A';
Chart.defaults.plugins.legend.labels.usePointStyle = true;

const months = ['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun'];

new Chart(document.getElementById('chartAttrition'), {
  type: 'line',
  data: {
    labels: months,
    datasets: [
      { label: 'Actual attrition %', data: [12.1,12.6,13.0,12.4,13.8,14.5,15.1,14.8,14.0,13.6,14.0,14.2], borderColor: TEAL, backgroundColor: 'rgba(0,168,168,0.08)', tension:0.35, fill:true, pointRadius:2 },
      { label: 'Target %', data: Array(12).fill(12), borderColor: NAVY, borderDash:[5,4], pointRadius:0 }
    ]
  },
  options: { responsive:true, plugins:{legend:{position:'bottom'}}, scales:{ y:{ ticks:{ callback:v=>v+'%' } } } }
});

new Chart(document.getElementById('chartReasons'), {
  type: 'doughnut',
  data: {
    labels: ['Pay', 'Manager relationship', 'Career growth', 'Relocation', 'Other'],
    datasets: [{ data: [36,21,19,12,12], backgroundColor:[NAVY, TEAL, '#4A6E9A', '#5FCACA', '#D7DEE7'] }]
  },
  options: { responsive:true, plugins:{legend:{position:'bottom', labels:{boxWidth:10, font:{size:11}}}} }
});

new Chart(document.getElementById('chartDept'), {
  type: 'bar',
  data: {
    labels: ['Retail Stores','Distribution','Support Centre','Digital','Buying'],
    datasets: [{ label:'Headcount', data:[720,240,160,80,40], backgroundColor: NAVY, borderRadius:3 }]
  },
  options: { responsive:true, plugins:{legend:{display:false}}, scales:{ y:{ beginAtZero:true } } }
});

new Chart(document.getElementById('chartDiversity'), {
  type: 'bar',
  data: {
    labels: ['Exec','Senior Mgmt','Middle Mgmt','Individual Contributor'],
    datasets: [
      { label:'Women', data:[33,41,52,58], backgroundColor: TEAL, stack:'s' },
      { label:'Men', data:[67,59,48,42], backgroundColor: NAVY, stack:'s' }
    ]
  },
  options: { responsive:true, indexAxis:'y', plugins:{legend:{position:'bottom', labels:{boxWidth:10,font:{size:11}}}}, scales:{ x:{ stacked:true, max:100 }, y:{ stacked:true } } }
});

new Chart(document.getElementById('chartTTH'), {
  type: 'bar',
  data: {
    labels: ['Retail Stores','Distribution','Support Centre','Digital','Buying'],
    datasets: [{ label:'Days', data:[26,31,38,52,44], backgroundColor: AMBER, borderRadius:3 }]
  },
  options: { responsive:true, plugins:{legend:{display:false}}, scales:{ y:{ beginAtZero:true } } }
});

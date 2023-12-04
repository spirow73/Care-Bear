<script>
    import { onMount, onDestroy } from 'svelte';
    import Chart from 'chart.js/auto';
  
    let chart; // Variable to hold the Chart instance
  
    async function fetchData() {
      const superbaseUrl = 'https://djhxrvvfyaoduxzlowlf.supabase.co';
      const superbaseApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqaHhydnZmeWFvZHV4emxvd2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0ODU2MDEsImV4cCI6MjAxNjA2MTYwMX0.N5ILlFpgSQp_k8o4XKNOZIyJ5alm1kQkxDCk8VNC2js';
      const tableUrl = `${superbaseUrl}/rest/v1/mood_entry`; // Replace 'mood_data' with your actual table name
  
      try {
        const response = await fetch(tableUrl, {
          headers: {
            'Content-Type': 'application/json',
            'apikey': superbaseApiKey,
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        updateChart(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    function updateChart(data) {
      // Extract relevant data from Superbase response and update the chart
      const labels = data.map(entry => entry.mood);
      const datasetData = data.map(entry => entry.value);
  
      if (chart) {
        chart.data.labels = labels;
        chart.data.datasets[0].data = datasetData;
        chart.update(); // Update the chart to reflect the changes
      }
    }
  
    function createChart() {
      const ctx = document.getElementById('myChart').getContext('2d');
  
      const data = {
        labels: ['sad', 'Stressed', 'Happy'],
        datasets: [{
          label: 'My Mood',
          data: [100, 50, 100],
          backgroundColor: [
            'rgb(255, 205, 86)',
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            
          ],
          hoverOffset: 100
        }]
      };
  
      const config = {
        type: 'doughnut',
        data: data,
        options: {
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  return data.labels[context.dataIndex];
                }
              }
            }
          }
        }
      };
  
      chart = new Chart(ctx, config);
    }
  
    onMount(() => {
      createChart();
      fetchData(); // Fetch data from Superbase when the component mounts
    });
  
</script>

<canvas id="myChart" width="400" height="400"></canvas>

<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import Chart from 'chart.js/auto';

  const dataStore = writable([]);

  async function fetchData() {
    const superbaseUrl = 'https://djhxrvvfyaoduxzlowlf.supabase.co';
    const superbaseApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqaHhydnZmeWFvZHV4emxvd2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0ODU2MDEsImV4cCI6MjAxNjA2MTYwMX0.N5ILlFpgSQp_k8o4XKNOZIyJ5alm1kQkxDCk8VNC2js';
    const tableUrl = `${superbaseUrl}/rest/v1/mood_entry`;

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

      const jsonData = await response.json();
      dataStore.set(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Function to map numeric values to labels
  function mapNumericToLabel(value) {
    switch (value) {
      case 1: return 'Happy';
      case 2: return 'Sad';
      case 3: return 'Stressed';
      case 4: return 'Relaxed';
      case 5: return 'Okay';
      case 6: return 'Tired';
      default: return '';
    }
  }

  function createChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const numericData = $dataStore.map(entry => entry.value);
    const labels = numericData.map(mapNumericToLabel);

    const config = {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'My Mood',
          data: numericData,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 159, 64)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)'
          ],
          hoverOffset: 100 // Reduce hover offset for better interactivity
        }]
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${labels[context.dataIndex]}: ${numericData[context.dataIndex]}`;
              }
            }
          }
        }
      }
    };

    return new Chart(ctx, config);
  }

  let chart;

  onMount(() => {
    const unsubscribe = dataStore.subscribe((value) => {
      if (chart) {
        chart.destroy();
      }
      chart = createChart();
    });

    fetchData(); // Fetch data from Superbase when the component mounts

    return unsubscribe;
  });
</script>

<canvas id="myChart" width=400 height=400></canvas>








``
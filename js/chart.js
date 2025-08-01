document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('sucesionesChart').getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: 50 }, (_, i) => i + 1),
            datasets: [
                {
                    label: 'Convergente',
                    data: datosConvergente,
                    borderColor: 'green',
                    backgroundColor: 'rgba(0, 128, 0, 0.15)',
                    fill: true,
                    tension: 0.3,
                    pointRadius: 3,
                    pointHoverRadius: 6,
                    borderWidth: 2
                },
                {
                    label: 'Divergente',
                    data: datosDivergente,
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.15)',
                    fill: true,
                    tension: 0.3,
                    pointRadius: 3,
                    pointHoverRadius: 6,
                    borderWidth: 2
                },
                {
                    label: 'Oscilante',
                    data: datosOscilante,
                    borderColor: 'blue',
                    backgroundColor: 'rgba(0, 0, 255, 0.15)',
                    fill: true,
                    tension: 0,
                    stepped: true,
                    pointRadius: 4,
                    pointHoverRadius: 7,
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            interaction: {
                mode: 'nearest',
                intersect: false
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    mode: 'nearest',
                    intersect: false,
                    callbacks: {
                        label: ctx => `Valor: ${ctx.parsed.y}`
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'n (término)'
                    },
                    ticks: {
                        maxTicksLimit: 10
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Valor de la sucesión'
                    },
                    beginAtZero: false
                }
            }
        }
    });
});

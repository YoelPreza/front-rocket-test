 const mock = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gráficos con Chart.js</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex flex-col items-center justify-center h-screen bg-gray-100">

    <h1 class="text-2xl font-bold mt-9">Reporte de Pólizas por Estado</h1>

    <div class="bg-white p-6 rounded-lg shadow-lg">
        <canvas id="barChart" width="400" height="200"></canvas>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-lg mt-6">
        <canvas id="lineChart" width="400" height="200"></canvas>
    </div>

    <script>
        // Datos simulados
        const labels = ["Activas", "Pendientes", "Vencidas"];
        const data = [30, 15, 10];

        // Gráfico de Barras
        const ctx1 = document.getElementById("barChart").getContext("2d");
        new Chart(ctx1, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [{
                    label: "Número de Pólizas",
                    data: data,
                    backgroundColor: ["green", "orange", "red"]
                }]
            }
        });

        // Gráfico de Líneas
        const ctx2 = document.getElementById("lineChart").getContext("2d");
        new Chart(ctx2, {
            type: "line",
            data: {
                labels: ["Enero", "Febrero", "Marzo", "Abril"],
                datasets: [{
                    label: "Crecimiento de Pólizas",
                    data: [5, 10, 20, 35],
                    borderColor: "blue",
                    fill: false
                }]
            }
        });
    </script>

</body>
</html>`;

export default mock;
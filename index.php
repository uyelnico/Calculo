<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <title>Primer Evaluación Semestral</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="css/style.css" />
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>

<body>
    <h1 style="text-align:center;">Calculo</h1>

    <div class="tabs">
        <div class="tab-buttons">
            <button class="active" data-tab="convergente">Convergente</button>
            <button data-tab="divergente">Divergente</button>
            <button data-tab="oscilante">Oscilante</button>
            <button data-tab="grafica">Gráfica</button>
        </div>

        <div class="tab-content">
            <?php include 'php/main.php'; ?>
            <div id="convergente" class="tab-pane active">
                <?php mostrar_tabla_convergente_interactiva(); ?>
            </div>

            <div id="divergente" class="tab-pane">
                <?php mostrar_tabla_divergente_interactiva(); ?>
            </div>

            <div id="oscilante" class="tab-pane">
                <?php mostrar_tabla_oscilante_interactiva(); ?>
            </div>


            <div id="grafica" class="tab-pane">
                <canvas id="sucesionesChart" style="max-width:100%; height:400px;"></canvas>
                <div id="custom-legend" style="text-align:center; margin-top: 10px; font-size: 1.1em;">
                    <span style="color: green;">●</span> Convergente \( \frac{1}{n} \) &nbsp;&nbsp;&nbsp;
                    <span style="color: red;">●</span> Divergente \( n \) &nbsp;&nbsp;&nbsp;
                    <span style="color: blue;">●</span> Oscilante \( (-1)^n \)
                </div>


            </div>
        </div>
    </div>


    <script>
        const datosConvergente = <?php echo json_encode($GLOBALS['convergente']); ?>;
        const datosDivergente = <?php echo json_encode($GLOBALS['divergente']); ?>;
        const datosOscilante = <?php echo json_encode($GLOBALS['oscilante']); ?>;
    </script>

    <script src="js/app.js"></script>
    <script src="js/chart.js"></script>
</body>

</html>
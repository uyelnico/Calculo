<?php
$GLOBALS['convergente'] = [];
$GLOBALS['divergente'] = [];
$GLOBALS['oscilante'] = [];

function mostrar_tabla_convergente_interactiva() {
    echo '<p class="formula">Sucesión Convergente: \\( a_n = \\frac{1}{n} \\)</p>';
    echo '<div class="interactive-container">';
    echo '<div class="tabla-container">';
    echo '<table id="tabla-convergente"><thead><tr><th>n</th><th>Valor</th></tr></thead><tbody>';
    for ($i = 1; $i <= 50; $i++) {
        $val = round(1 / $i, 5);
        $GLOBALS['convergente'][] = $val;
        echo "<tr data-n=\"$i\"><td>$i</td><td>$val</td></tr>";
    }
    echo '</tbody></table></div>';
    echo '<div class="formula-container" id="formula-convergente"><p>Hacé clic en un valor para ver la fórmula aquí.</p></div>';
    echo '</div>';
}

function mostrar_tabla_divergente_interactiva() {
    echo '<p class="formula">Sucesión Divergente: \\( b_n = n \\)</p>';
    echo '<div class="interactive-container">';
    echo '<div class="tabla-container">';
    echo '<table id="tabla-divergente"><thead><tr><th>n</th><th>Valor</th></tr></thead><tbody>';
    for ($i = 1; $i <= 50; $i++) {
        $val = $i;
        $GLOBALS['divergente'][] = $val;
        echo "<tr data-n=\"$i\"><td>$i</td><td>$val</td></tr>";
    }
    echo '</tbody></table></div>';
    echo '<div class="formula-container" id="formula-divergente"><p>Hacé clic en un valor para ver la fórmula aquí.</p></div>';
    echo '</div>';
}

function mostrar_tabla_oscilante_interactiva() {
    echo '<p class="formula">Sucesión Oscilante: \\( c_n = (-1)^n \\)</p>';
    echo '<div class="interactive-container">';
    echo '<div class="tabla-container">';
    echo '<table id="tabla-oscilante"><thead><tr><th>n</th><th>Valor</th></tr></thead><tbody>';
    for ($i = 1; $i <= 50; $i++) {
        $val = pow(-1, $i);
        $GLOBALS['oscilante'][] = $val;
        echo "<tr data-n=\"$i\"><td>$i</td><td>$val</td></tr>";
    }
    echo '</tbody></table></div>';
    echo '<div class="formula-container" id="formula-oscilante"><p>Hacé clic en un valor para ver la fórmula aquí.</p></div>';
    echo '</div>';
}

?>

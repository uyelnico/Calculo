document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-buttons button');
    const panes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            panes.forEach(pane => {
                if (pane.id === tab.dataset.tab) {
                    pane.classList.add('active');
                } else {
                    pane.classList.remove('active');
                }
            });
        });
    });
});


function actualizarFormula(contenedor, nuevoHTML) {
  contenedor.style.opacity = 0;
  setTimeout(() => {
    contenedor.innerHTML = nuevoHTML;
    if (window.MathJax) {
      MathJax.typesetPromise();
    }
    contenedor.style.opacity = 1;
  }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
  const tablaCon = document.getElementById('tabla-convergente');
  const formulaCon = document.getElementById('formula-convergente');

  if (tablaCon && formulaCon) {
    tablaCon.addEventListener('click', (e) => {
      let tr = e.target.closest('tr');
      if (!tr || !tr.hasAttribute('data-n')) return;
      const n = tr.getAttribute('data-n');
      const val = tr.cells[1].textContent;

      const nuevoHTML = `
        <p><strong>Fórmula para \\( a_{${n}} \\):</strong></p>
        <p>\\[ a_{${n}} = \\frac{1}{${n}} = ${val} \\]</p>
        <p>Esta sucesión converge a 0 cuando \\( n \\to \\infty \\).</p>
      `;
      actualizarFormula(formulaCon, nuevoHTML);
      formulaCon.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  const tablaDiv = document.getElementById('tabla-divergente');
  const formulaDiv = document.getElementById('formula-divergente');

  if (tablaDiv && formulaDiv) {
    tablaDiv.addEventListener('click', (e) => {
      let tr = e.target.closest('tr');
      if (!tr || !tr.hasAttribute('data-n')) return;
      const n = tr.getAttribute('data-n');
      const val = tr.cells[1].textContent;

      const nuevoHTML = `
        <p><strong>Fórmula para \\( b_{${n}} \\):</strong></p>
        <p>\\[ b_{${n}} = ${n} = ${val} \\]</p>
        <p>Esta sucesión diverge a infinito conforme \\( n \\to \\infty \\).</p>
      `;
      actualizarFormula(formulaDiv, nuevoHTML);
      formulaDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  const tablaOsc = document.getElementById('tabla-oscilante');
  const formulaOsc = document.getElementById('formula-oscilante');

  if (tablaOsc && formulaOsc) {
    tablaOsc.addEventListener('click', (e) => {
      let tr = e.target.closest('tr');
      if (!tr || !tr.hasAttribute('data-n')) return;
      const n = tr.getAttribute('data-n');
      const val = tr.cells[1].textContent;

      const nuevoHTML = `
        <p><strong>Fórmula para \\( c_{${n}} \\):</strong></p>
        <p>\\[ c_{${n}} = (-1)^{${n}} = ${val} \\]</p>
        <p>Esta sucesión oscila entre 1 y -1 y no converge.</p>
      `;
      actualizarFormula(formulaOsc, nuevoHTML);
      formulaOsc.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
});

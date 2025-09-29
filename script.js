document.addEventListener('DOMContentLoaded', function () {
    const tipoSelect = document.getElementById("TIPO");

    const camposUniformes = document.getElementById('campos-uniformes');
    const camposFerramentas = document.getElementById('campos-ferramentas');
    const camposBrindes = document.getElementById('campos-brindes');
    const camposHigiene = document.getElementById('campos-higiene');
    const camposPapelaria = document.getElementById('campos-papelaria');

    function esconderTodosCampos() {
        camposUniformes.style.display = 'none';
        camposBrindes.style.display = 'none';
        camposFerramentas.style.display = 'none';
        camposHigiene.style.display = 'none';
        camposPapelaria.style.display = 'none';
    }

    tipoSelect.addEventListener('change', function () {
        const tipoSelecionado = tipoSelect.value;
        esconderTodosCampos();

        if (tipoSelecionado === 'U') {
            camposUniformes.style.display = 'block';
        } else if (tipoSelecionado === 'FT') {
            camposFerramentas.style.display = 'block';
        } else if (tipoSelecionado === 'B') {
            camposBrindes.style.display = 'block';
        } else if (tipoSelecionado === 'H') {
            camposHigiene.style.display = 'block';
        } else if (tipoSelecionado === 'P') {
            camposPapelaria.style.display = 'block';
        }
    });

   const form = document.getElementById('Formulario');
   const spanCodigo = document.getElementById('codigo');
   const svgBarcode = document.getElementById('barcode');

   form.addEventListener('submit', function (e) {
    e.preventDefault();

    const tipo = tipoSelect.value;
    let codigo = tipo;

    if (tipo === "U") {

        const modelo = document.getElementById ('MODELO_UNIFORME').value;
        const tamanho = document.getElementById ('TAMANHO_UNIFORME').value;
        const cor = document.getElementById ('COR_UNIFORME').value;
        codigo += `${modelo}${tamanho}${cor}`;

        } else if (tipo === 'FT') {
            const ferramenta = document.getElementById ('FERRAMENTAS').value;
            codigo += `${ferramenta}`;

        } else if (tipo === 'B') {
            const brinde = document.getElementById ('TIPO_DE_BRINDE').value;
            codigo += `${brinde}`;

        } else if (tipo === 'H') {
            const itemHigiene = document.getElementById ('HIGIENE').value;
            codigo += `${itemHigiene}`;

        } else if (tipo === 'P') {
            const itemPapelaria = document.getElementById ('PAPELARIA').value;
            codigo += `${itemPapelaria}`;

        } else {
            codigo += `SEM-INFO`;
        }

        spanCodigo.textContent = codigo;

        JsBarcode(svgBarcode, codigo, {
            format: "CODE128",
            lineColor: "#000000",
            width: 2,
            height: 60,
            displayValue: true,
        });

   });

   });

/**
 * FUNÇÃO: openTab
 * Objetivo: Alternar a visibilidade entre as abas da calculadora.
 */
function openTab(evt, tabName) {
    // 1. Esconder todos os blocos de conteúdo
    const contents = document.querySelectorAll(".content");
    contents.forEach(c => c.classList.remove("active"));

    // 2. Remover a classe 'active' de todos os botões das abas
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(b => b.classList.remove("active"));

    // 3. Mostrar o conteúdo da aba selecionada e marcar o botão como ativo
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

/**
 * FUNÇÃO: calcJuros (Juros Compostos)
 * Fórmula: M = P * (1 + i)^n
 */
function calcJuros() {
    const p_inicial = parseFloat(document.getElementById('jc_cap').value);
    let taxa = parseFloat(document.getElementById('jc_taxa').value) / 100;
    let tempo = parseInt(document.getElementById('jc_tempo').value);

    const tipoTaxa = document.getElementById('jc_tipo_taxa').value;
    const tipoTempo = document.getElementById('jc_tipo_tempo').value;

    if (isNaN(p_inicial) || isNaN(taxa) || isNaN(tempo)) return alert("Preencha todos os campos!");

    // Ajuste de período (converte tudo para a unidade da taxa)
    let n_calculo = tempo;
    if (tipoTaxa === "mensal" && tipoTempo === "anos") n_calculo = tempo * 12;
    if (tipoTaxa === "anual" && tipoTempo === "meses") n_calculo = tempo / 12;

    // Cálculo do Montante Final (Fórmula principal)
    const montanteFinal = p_inicial * Math.pow((1 + taxa), n_calculo);

    // Exibe o resumo
    const res = document.getElementById('res_jc');
    res.style.display = "block";
    res.innerHTML = `Montante Final: <strong>R$ ${montanteFinal.toFixed(2)}</strong>`;

    // GERAÇÃO DA TABELA DE EVOLUÇÃO
    const table = document.getElementById('jc_table');
    const tbody = document.getElementById('jc_body');
    table.style.display = "table";
    tbody.innerHTML = ""; // Limpa a tabela

    let saldoAtual = p_inicial;
    const labelPeriodo = tipoTaxa === "mensal" ? "Mês" : "Ano";

    // Criamos uma linha para cada período (limitado a 360 para não travar o navegador)
    for (let i = 1; i <= Math.min(n_calculo, 360); i++) {
        let jurosDestePeriodo = saldoAtual * taxa;
        let capitalAnterior = saldoAtual;
        saldoAtual += jurosDestePeriodo;

        tbody.innerHTML += `<tr>
            <td>${labelPeriodo} ${i}</td>
            <td>R$ ${capitalAnterior.toFixed(2)}</td>
            <td>R$ ${jurosDestePeriodo.toFixed(2)}</td>
            <td>R$ ${saldoAtual.toFixed(2)}</td>
        </tr>`;
    }
}


/**
 * FUNÇÃO: calcROI (Retorno de Investimento)
 * Payback = Investimento / Ganho Mensal
 */
function calcROI() {
    const invest = parseFloat(document.getElementById('roi_invest').value);
    const ganho = parseFloat(document.getElementById('roi_ganho').value);

    if (isNaN(invest) || isNaN(ganho)) return alert("Preencha os campos!");

    const mesesParaRetorno = invest / ganho;
    const roiAnual = ((ganho * 12) / invest) * 100;

    const res = document.getElementById('res_roi');
    res.style.display = "block";
    res.innerHTML = `Prazo de Retorno: <strong>${mesesParaRetorno.toFixed(1)} meses</strong><br>
                     Retorno Anual Estimado: ${roiAnual.toFixed(2)}%`;
}

/**
 * FUNÇÃO: calcFin (Financiamento Veicular - Tabela Price)
 * PMT = PV * [i(1+i)^n] / [(1+i)^n - 1]
 */
function calcFin() {
    const pv = parseFloat(document.getElementById('fin_valor').value); // Valor do Carro
    const i = parseFloat(document.getElementById('fin_taxa').value) / 100; // Juros
    const n = parseInt(document.getElementById('fin_meses').value); // Parcelas

    if (isNaN(pv) || isNaN(i) || isNaN(n)) return alert("Preencha os campos!");

    // Cálculo do valor da parcela fixa (Fórmula Price)
    const pmt = pv * ((i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1));

    // Exibe o resumo no topo
    const res = document.getElementById('res_fin');
    res.style.display = "block";
    res.innerText = `Valor da Parcela Mensal: R$ ${pmt.toFixed(2)}`;

    // Geração da Tabela de Amortização
    const table = document.getElementById('fin_table');
    const tbody = document.getElementById('fin_body');
    table.style.display = "table";
    tbody.innerHTML = ""; // Limpa a tabela caso já tenha sido usada

    let saldoDevedor = pv;

    // Loop para cada mês do financiamento
    for (let m = 1; m <= n; m++) {
        let jurosMes = saldoDevedor * i;
        let amortizacao = pmt - jurosMes;
        saldoDevedor -= amortizacao;

        // Se for o último mês, forçamos o saldo a zero (ajuste de arredondamento)
        if (m === n) saldoDevedor = 0;

        // Criação da linha da tabela
        const row = `<tr>
            <td>${m}</td>
            <td>R$ ${pmt.toFixed(2)}</td>
            <td>R$ ${jurosMes.toFixed(2)}</td>
            <td>R$ ${amortizacao.toFixed(2)}</td>
            <td>R$ ${Math.abs(saldoDevedor).toFixed(2)}</td>
        </tr>`;

        tbody.innerHTML += row;
    }
}
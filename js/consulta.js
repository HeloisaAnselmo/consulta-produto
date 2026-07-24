const API_URL = "http://192.168.0.138:8000";

document.addEventListener("DOMContentLoaded", function () {

    const btnPesquisar = document.getElementById("btnPesquisar");
    
    
    const conteudo = document.getElementById("conteudoProduto");
    conteudo.style.display = "none";
    const mensagemInicial = document.getElementById("mensagemInicial");
    conteudo.style.display = "none";
    mensagemInicial.style.display = "flex";


    btnPesquisar.addEventListener("click", carregarProduto);


  function pesquisar() {

    const filtros = {
        referencia: document.getElementById("filtroReferencia")?.value.trim() || "",
        descricao: document.getElementById("filtroDescricao")?.value.trim() || "",
        grupo: document.getElementById("filtroGrupo")?.value || "",
        categoria: document.getElementById("filtroCategoria")?.value || "",
        colecao: document.getElementById("filtroColecao")?.value || "",
        revenda: document.getElementById("filtroRevenda")?.value || "",
        permanente: document.getElementById("filtroPermanente")?.value || ""
    };

    const pesquisou =
        filtros.referencia ||
        filtros.descricao ||
        filtros.grupo ||
        filtros.categoria ||
        filtros.colecao ||
        filtros.revenda ||
        filtros.permanente;

    if (!pesquisou) {
        conteudo.style.display = "none";
        alert("Informe pelo menos um filtro para pesquisar.");
        return;
    }

    setTimeout(function () {

        carregarProduto();
        mensagemInicial.style.display = "none";
        conteudo.style.display = "block";

    }, 800);
}

    function carregarProduto() {

        document.getElementById("referencia").value = "220750";

        document.getElementById("descricao").value =
            "CALÇÃO LONGO CONTOUR";

        document.getElementById("grupo").value =
            "BERMUDAS / ADULTO";

        document.getElementById("empresa").value =
            "PENA SURF";

        const tabela = document.getElementById("tabelaCores");

            tabela.innerHTML = `

                <tr>

                    <td>01</td>

                    <td>Branco</td>

                    <td>

                        <div class="corPreview"
                            style="background:#FFFFFF;"></div>

                    </td>

                    <td>01/01/2024</td>

                    <td>31/12/2025</td>

                </tr>

                <tr>

                    <td>02</td>

                    <td>Preto</td>

                    <td>

                        <div class="corPreview"
                            style="background:#000000;"></div>

                    </td>

                    <td>01/01/2024</td>

                    <td>31/12/2025</td>

                </tr>

                <tr>

                    <td>03</td>

                    <td>Azul Marinho</td>

                    <td>

                        <div class="corPreview"
                            style="background:#1E3A8A;"></div>

                    </td>

                    <td>01/01/2024</td>

                    <td>31/12/2025</td>

                </tr>

                <tr>

                    <td>04</td>

                    <td>Vermelho</td>

                    <td>

                        <div class="corPreview"
                            style="background:#D62828;"></div>

                    </td>

                    <td>01/01/2024</td>

                    <td>31/12/2025</td>

                </tr>

`;


        const listaEstoque = [
            { codigo: "220750-01-P", cor: "Branco",       amostra: "#FFFFFF", tamanho: "P", quantidade: 12 },
            { codigo: "220750-01-M", cor: "Branco",       amostra: "#FFFFFF", tamanho: "M", quantidade: 20 },
            { codigo: "220750-02-P", cor: "Preto",        amostra: "#000000", tamanho: "P", quantidade: 8  },
            { codigo: "220750-02-M", cor: "Preto",        amostra: "#000000", tamanho: "M", quantidade: 15 },
            { codigo: "220750-03-M", cor: "Azul Marinho", amostra: "#1E3A8A", tamanho: "M", quantidade: 5  },
            { codigo: "220750-04-G", cor: "Vermelho",     amostra: "#D62828", tamanho: "G", quantidade: 10 }
        ];

        const tabelaEstoque = document.getElementById("tabelaEstoque");

        tabelaEstoque.innerHTML = "";
        listaEstoque.forEach(item => {

            tabelaEstoque.innerHTML += `

                <tr>

                    <td>${item.codigo}</td>

                    <td>${item.cor}</td>

                    <td>
                        <div class="corPreview"
                             style="background:${item.amostra};"></div>
                    </td>

                    <td>${item.tamanho}</td>

                    <td>${item.quantidade}</td>

                </tr>

            `;

        });

       
        document.getElementById("totalEstoque").textContent =
            `${listaEstoque.length} registros`;

        
       const preco = document.getElementById("precoProduto");

        if (preco) {
            preco.value = "R$ 189,90";
        }


        const referencia = "220750";

document.getElementById("fotoFrente").src =
    `img/${referencia}-frente.jpg`;

document.getElementById("fotoCostas").src =
    `img/${referencia}-costas.jpg`;

document.getElementById("fichaTecnica").src =
    `img/${referencia}-ficha.jpg`;
    }



    const tabs = document.querySelectorAll(".tab");

    const conteudos = document.querySelectorAll(".conteudoTab");

    tabs.forEach(tab => {

        tab.addEventListener("click", function () {

            tabs.forEach(t => t.classList.remove("active"));

            conteudos.forEach(c => c.classList.remove("active"));

            this.classList.add("active");

            document
                .getElementById(this.dataset.tab)
                .classList.add("active");

        });

    });


const modal = document.getElementById("modalImagem");

const imagemGrande = document.getElementById("imagemExpandida");

const fechar = document.getElementById("fecharModal");

const imagens = document.querySelectorAll(".imagemProduto");

imagens.forEach(imagem => {

    imagem.addEventListener("click", function () {

        if (this.src === "") return;

        imagemGrande.src = this.src;

        modal.style.display = "flex";

    });

});

fechar.addEventListener("click", function () {

    modal.style.display = "none";

});

modal.addEventListener("click", function (e) {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});

    fechar.addEventListener("click", function () {

        modal.style.display = "none";

    });

    modal.addEventListener("click", function (e) {

        if (e.target === modal) {

            modal.style.display = "none";

        }

    });

    const btnMostrarFiltros = document.getElementById("btnMostrarFiltros");
    const painelFiltros = document.getElementById("painelFiltros");

    btnMostrarFiltros.addEventListener("click", () => {

        painelFiltros.classList.toggle("aberto");

    });

    
    document.getElementById("filtroFilial").addEventListener("change", function () {

        const filialSelecionada = this.value;

        
        console.log("Filial selecionada para consulta de estoque:", filialSelecionada);

    });

});
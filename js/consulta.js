const API_URL = "http://192.168.0.138:8000"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYl91c2VyIjoiaXRhbG8ubGV2aSIsImRiX3Bhc3N3b3JkIjoiSXRhbG9FeHRyZW1lMEAifQ.2zcew1y30lVmeX6JhoDpDRnp7Fr_TWhvPq89eYtFQpU"


document.addEventListener("DOMContentLoaded", function () {

    const btnPesquisar = document.getElementById("btnPesquisar");
    
    
    const conteudo = document.getElementById("conteudoProduto");
    conteudo.style.display = "none";
    const mensagemInicial = document.getElementById("mensagemInicial");
    conteudo.style.display = "none";
    mensagemInicial.style.display = "flex";


    btnPesquisar.addEventListener("click", pesquisar);


  async function pesquisar() {
    produto = document.getElementById("filtroReferencia").value.trim()
    try {
        const response = await fetch(`${API_URL}/consultaproduto/${produto}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        dados = await response.json()
        console.log(dados)
    }
    catch (error) {

    }
    // const filtros = {
    //     referencia: document.getElementById("filtroReferencia")?.value.trim() || "",
    //     descricao: document.getElementById("filtroDescricao")?.value.trim() || "",
    //     grupo: document.getElementById("filtroGrupo")?.value || "",
    //     categoria: document.getElementById("filtroCategoria")?.value || "",
    //     colecao: document.getElementById("filtroColecao")?.value || "",
    //     revenda: document.getElementById("filtroRevenda")?.value || "",
    //     permanente: document.getElementById("filtroPermanente")?.value || ""
    // };

    // const pesquisou =
    //     filtros.referencia ||
    //     filtros.descricao ||
    //     filtros.grupo ||
    //     filtros.categoria ||
    //     filtros.colecao ||
    //     filtros.revenda ||
    //     filtros.permanente;

    // if (!pesquisou) {
    //     conteudo.style.display = "none";
    //     alert("Informe pelo menos um filtro para pesquisar.");
    //     return;
    // }

    carregarProduto(dados);
    carregaroperacoes(dados);
    buscarfotos();
    buscarMateriais();
    mensagemInicial.style.display = "none";
    conteudo.style.display = "block";

}

    function carregarProduto(dados) {

       

        info = dados.informacoes[0]

    

        // PREENCHE O CARD 1
        document.getElementById("referencia").value = info.PRODUTO;

        document.getElementById("descricao").value = info.DESC_PRODUTO

        document.getElementById("grupo").value = info.GRUPO_PRODUTO;

        // PREENCHE O CARD 2
        document.getElementById("permanente").value = info.PERMANENTE;
        
        document.getElementById("subgrupo").value = info.SUBGRUPO_PRODUTO;

        document.getElementById("categoria").value = info.CATEGORIA_PRODUTO;

        document.getElementById("subcategoria").value = info.SUBCATEGORIA_PRODUTO;

        document.getElementById("tipo").value = info.TIPO_PRODUTO;

        document.getElementById("grife").value = info.GRIFFE;

        document.getElementById("linha").value = info.LINHA;

        document.getElementById("materialPrincipal").value = info.MATERIAL;


        // PREENCHE O CARD 2
        document.getElementById("empresa").value = info.FABRICANTE;
        document.getElementById("tamanhos").value = info.GRADE;
        document.getElementById("referenciaFabricante").value = info.REFER_FABRICANTE;
        document.getElementById("revenda").value = info.REVENDA;
        document.getElementById("observacao").value = info.OBS; 
        document.getElementById("periodoEntrega").value = info.PERIODO_PCP;
        
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


// const listaMateriais = [

//     {
//         grupo: "TECIDOS",
//         codigo: "00.04.0097",
//         descricao: "TECNOLOGIC (PERMANENTE)",
//         consumo: "1.000",
//         unidade: "MT",
//         principal: true
//     },

//     {
//         grupo: "TECIDOS",
//         codigo: "00.07.0021",
//         descricao: "ENTRETELA 7224 (POLO/PLANO/FUSIONADA)",
//         consumo: "0.060",
//         unidade: "MT",
//         principal: false
//     },

//     {
//         grupo: "AVIAMENTO",
//         codigo: "10.02.0002",
//         descricao: "VELCRO 20MM (CX750M)",
//         consumo: "0.060",
//         unidade: "MT",
//         principal: false
//     },

//     {
//         grupo: "AVIAMENTO",
//         codigo: "10.03.0012",
//         descricao: "ELÁSTICO 50MM SHORT",
//         consumo: "0.880",
//         unidade: "UN",
//         principal: false
//     },

//     {
//         grupo: "AVIAMENTO",
//         codigo: "10.04.0044",
//         descricao: "CADARÇO 1,55CM P/ CALÇÃO ADULTO",
//         consumo: "1.000",
//         unidade: "UN",
//         principal: false
//     },

//     {
//         grupo: "EMBALAGEM",
//         codigo: "20.01.0002",
//         descricao: "EMBALAGEM TRANSPARENTE",
//         consumo: "1.000",
//         unidade: "UN",
//         principal: false
//     }

// ];

    }
        
async function buscarfotos() {
    produto = document.getElementById("filtroReferencia").value.trim()
     document.getElementById("fotoFrente").src = ''
     document.getElementById("fotoCostas").src = ''
     document.getElementById("fichaTecnica").src = ''

    try {
        const response = await fetch(`${API_URL}/buscarfotos/${produto}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        const dados = await response.json();

        for (const dado of dados) {

            console.log(dado.FOTO, 'teste pra ver se isso é foto')
            if (dado.NUMERO === 1) {
                const resposta = await fetch(`${API_URL}/imagem/${dado.FOTO}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
            console.log(resposta, 'teste pra ver se isso é url')
            document.getElementById("fotoFrente").src = resposta.url;
            }   
            if (dado.NUMERO === 2) {
                const resposta = await fetch(`${API_URL}/imagem/${dado.FOTO}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                
            document.getElementById("fotoCostas").src = resposta.url;
            }   
            if (dado.NUMERO === 3) {
                const resposta = await fetch(`${API_URL}/imagem/${dado.FOTO}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                
            document.getElementById("fichaTecnica").src = resposta.url;
            }   
            
            

        }

        
        



            // document.getElementById("fichaTecnica").src = `img/${referencia}-ficha.jpg`;

        

        

        
     
        
        


    } 
    catch (error) {
        console.error("Erro ao buscar fotos:", error);
    }




}

function carregaroperacoes(dados) {
    operacoes = dados.operacoes

    

    const tbody = document.getElementById("tabelaOperacoes");
    tbody.innerHTML = "";
    operacoes.forEach(operacao => {
        const linha = document.createElement("tr");
    
    linha.innerHTML = `
        <td>${operacao.SEQUENCIA_PRODUTIVA}</td>
        <td>${operacao.DESC_FASE_PRODUCAO}</td>
        <td>${operacao.DESC_SETOR_PRODUCAO}</td>
        <td>${operacao.DESC_RECURSO}</td>
        <td>${operacao.CUSTO_SUGERIDO}</td>
    `;

    tbody.appendChild(linha);


    })}



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

});


async function buscarMateriais() {
    const tabelaMateriais = document.getElementById("tabelaMateriais");
    tabelaMateriais.innerHTML = "";

    try {
        produto = document.getElementById("filtroReferencia").value.trim()
        const response = await fetch(`${API_URL}/materiais/${produto}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        
        const dados = await response.json();
        console.log(dados, 'teste pra ver se isso é materiais')

        dados.forEach(material => {
            separador = material.MATERIAL.split(" - ")
            codigoMaterial = separador[0]
            descricaoMaterial = separador[1]
        
            tabelaMateriais.innerHTML += `
        
                <tr>
        

                    
                    <td>${codigoMaterial}</td>
        
                    <td>${descricaoMaterial}</td>
        

                  
        
                    </tr>
                    
                    `;
                    
                });
                
                // Atualiza a quantidade de materiais
                document.getElementById("totalMateriais").textContent =
            `${listaMateriais.length} materiais`;
        
        
    }
    
    catch {

    }
    


            
            
}


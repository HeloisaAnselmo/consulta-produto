const API_URL = "http://192.168.0.138:8000";

document.addEventListener("DOMContentLoaded", function () {

    const btnPesquisar = document.getElementById("btnPesquisar");
    const codigoProduto = document.getElementById("codigoProduto");
    const conteudo = document.getElementById("conteudoProduto");


    btnPesquisar.addEventListener("click", carregarProduto);

    codigoProduto.addEventListener("keydown", function (e) {

        if (e.key === "Enter") {
            carregarProduto();
        }

    });

  


function carregarProduto() {
        conteudo.style.display = "block";
    
        const produto = document.getElementById("referencia").value.trim()
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYl91c2VyIjoiaXRhbG8ubGV2aSIsImRiX3Bhc3N3b3JkIjoiSXRhbG9FeHRyZW1lMEAifQ.2zcew1y30lVmeX6JhoDpDRnp7Fr_TWhvPq89eYtFQpU'
        try {
            const response = await fetch(`${API_URL}/ficha/${produto}`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });

            const dados = await response.json();
            if (!response.ok) {
            throw new Error(dados.detail || 'Erro ao consultar OP');
        }


        document.getElementById("descricao").value =
            "CALÇÃO LONGO CONTOUR";

        document.getElementById("grupo").value =
            "BERMUDAS / ADULTO";

        document.getElementById("empresa").value =
            "PENA SURF";

        document.getElementById("composicao").value =
            "90% POLIÉSTER\n10% ELASTANO";

        // ------------------------------

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
        }

        catch (error) {

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

});
const listaSelecaoShinigamis = document.querySelectorAll(".shinigami");

listaSelecaoShinigamis.forEach(shinigami => {
	shinigami.addEventListener("click", () => {
		esconderCartaoShinigami();

		const idShinigamiSelecionado = mostrarCartaoShinigamiSelecionado(shinigami);

		desativarShinigamiNaListagem();
		ativarShinigamiSelecionadoNaListagem(idShinigamiSelecionado);

	})
})


function ativarShinigamiSelecionadoNaListagem(idShinigamiSelecionado) {
	const shinigamiSelecionadoNaListagem = document.getElementById(idShinigamiSelecionado);
	shinigamiSelecionadoNaListagem.classList.add("ativo");
}

function desativarShinigamiNaListagem() {
	const shinigamiAtivoNaListagem = document.querySelector(".ativo");
	shinigamiAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoShinigamiSelecionado(shinigami) {
	const idShinigamiSelecionado = shinigami.attributes.id.value;
	const idDoCartaoShinigamiParaAbrir = "cartao-" + idShinigamiSelecionado;
	const cartaoShinigamiParaAbrir = document.getElementById(idDoCartaoShinigamiParaAbrir);
	cartaoShinigamiParaAbrir.classList.add("aberto");
	return idShinigamiSelecionado;
}

function esconderCartaoShinigami() {
	const cartaoShinigamiAberto = document.querySelector(".aberto");
	cartaoShinigamiAberto.classList.remove("aberto");
}


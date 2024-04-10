let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    try {
        const res = await fetch(endpointDaAPI)
        livros = await res.json()
        livros = aplicarDesconto(livros)
        exibirOsLivrosNaTela(livrosComDesconto)
    } catch (error) {
        elementoParaInserirLivros.innerHTML = `Encontramos um erro ao carregar o site. Erro: ${error}`
    }
}
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";



export default function Home() {

  const { 
    cliente, 
    clientes,
    tabelaVisivel,
    exibirTabela,
    selecionarCliente, 
    excluirCliente, 
    salvarCliente, 
    novoCliente,
  } = useClientes()

  return (
    <div className={`flex justify-center items-center h-screen bg-slate-900 text-white`}>

      <Layout titulo="Cadastro simples">
        {tabelaVisivel ? (
          <>
            <div className={` flex justify-end`}>
              <Botao onClick={novoCliente}>
                Novo cliente
              </Botao>
            </div>

            <Tabela clientes={clientes} 
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario 
            cliente={cliente} 
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}

      </Layout>
    </div>
  )
}

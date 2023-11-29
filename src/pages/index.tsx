import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";


export default function Home() {

  const clientes = [
    new Cliente('Vini', 23, '1'),
    new Cliente('Ana', 50, '2'),
    new Cliente('MI', 20, '3'),
    new Cliente('Victor', 44, '4')
  ]

  return (
    <div className={`flex justify-center items-center h-screen bg-slate-900 text-white`}>

      <Layout titulo="Cadastro simples">

        <Tabela clientes={clientes}>

        </Tabela>
      </Layout>
    </div>
  )
}

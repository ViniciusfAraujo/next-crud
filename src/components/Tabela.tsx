import Cliente from "../core/Cliente";
import { IconEdicao, IconLixo } from './Icons'


interface TabelaProps{
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps){

    const exibirAcoes = props.clienteExcluido ||  props.clienteSelecionado     

    function renderizarCabeçalho(){
        return(
            <tr className={` font-mono text-lg`}>
                <th className={` text-left p-3`}>Código</th>
                <th className={` text-left p-3`}>Nome</th>
                <th className={` text-left p-3`}>Idade</th>
                {exibirAcoes ? <th className={` p-3`}>Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados(){
        return props.clientes?.map((cliente, i) => {
            return(
                <tr key={cliente.id} 
                    className={`${i % 2 === 0 ? 'bg-slate-50' : 'bg-slate-300'}`}>
                    <td className={` text-left p-2`}>{cliente.id}</td>
                    <td className={` text-left p-2`}>{cliente.nome}</td>
                    <td className={` text-left p-2`}>{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente){
        return(
            <td className={` flex justify-center`}>
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={` flex justify-center items-center text-green-400 rounded-full p-2 m-1 hover:bg-slate-200`}>
                        { IconEdicao }
                    </button>
                ): false}

                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className={` flex justify-center items-center  text-red-400 rounded-full p-2 m-1 hover:bg-slate-200`}>
                        { IconLixo }
                    </button>
                ): false}
            </td>
        )
    }

    return(
        <table className={`w-full rounded-xl overflow-hidden`}>
            <thead className={` bg-slate-500 text-gray-300`}>
                {renderizarCabeçalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}
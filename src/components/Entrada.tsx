interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps){
    return(
        <div className={`flex flex-col`}>
            <label className={` mb-2 mt-3`}>
                {props.texto}
            </label>
            <input
             type={props.tipo ?? "text"}
             value={props.valor}
             readOnly={props.somenteLeitura}
             onChange={e => props.valorMudou?.(e.target.value)}
             className={`border border-slate-950 rounded-md focus:outline-none px-2 py-1`} />
        </div>
    )
}
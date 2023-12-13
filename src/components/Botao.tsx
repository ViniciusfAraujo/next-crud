interface BotaoProps{
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps){
    return(
        <button onClick={props.onClick} className={` bg-stone-700  text-white px-3 py-2 rounded-md mb-2 ${props.className}`}>
            {props.children}
        </button>
    )
}
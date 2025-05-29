export default function Card(props) {
    return (
        <div
            className="border-l-smooth border-r-smooth border-t-primary border-b-secondary
            border-4 rounded-sm mx-3 text-center p-3"
        >
            <div className="flex items-center justify-center mb-3 pt-5">
                {props.icon}
            </div>
            <div className="px-1">
                <h3 className="text-xl font-bold text-secondary">{props.title}</h3>
                <h5>Preço: R$5,00</h5>
                <p className="text-xl font-medium">{props.description}</p>
            </div>
        </div>
    )
}
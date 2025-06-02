export default function Card(props) {
    return (
        <div
            className="w-full sm:w-[300px] md:w-[280px] lg:w-[250px] border-l-smooth border-r-smooth border-t-primary border-b-secondary
            border-4 rounded-sm text-center p-3 shadow-md"
        >
            <div className="flex items-center justify-center mb-3 pt-5">
                {props.icon}
            </div>
            <div className="px-1">
                <h3 className="text-xl font-bold text-secondary">{props.title}</h3>
                <h5 className="text-lg font-bold">Preço: R$5,00</h5>
            </div>
        </div>
    )
}
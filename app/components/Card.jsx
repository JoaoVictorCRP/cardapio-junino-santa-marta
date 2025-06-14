export default function Card(props) {
    return (
        <div className="h-full flex flex-col justify-between border-4 border-t-primary border-b-secondary border-l-smooth border-r-smooth rounded-sm text-center shadow-md px-3 py-5">
            <div className="flex items-center justify-center mb-3">
                {props.icon}
            </div>

            <div className="flex-grow flex flex-col justify-between">
                <h3 className="text-sm font-bold text-secondary min-h-[3rem] flex items-center justify-center">
                    {props.title}
                </h3>
            </div>

            <div className="mt-3">
                <h5 className="text-lg font-bold">Preço: R${props.price || "5,00"}</h5>
            </div>
        </div>
    );
}
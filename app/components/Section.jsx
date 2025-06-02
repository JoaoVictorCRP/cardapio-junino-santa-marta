export default function Section(props){
    return (
        <div className="flex items-center justify-center">
            <section
                className="mt-10 w-full max-w-7xl bg-white text-black p-5 rounded-lg border-4
        border-t-primary border-b-secondary border-l-smooth border-r-smooth"
            >
                {props.children}
            </section>
        </div>
    )
}
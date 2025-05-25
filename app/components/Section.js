export default function Section(props){
    return (
        <div className="flex items-center justify-center">
            <section className="mt-10 rounded-lg bg-white h-screen w-7xl text-black p-5 border-4 border-t-primary border-b-secondary border-l-smooth border-r-smooth">
                {props.children}
            </section>
        </div>
    )
}
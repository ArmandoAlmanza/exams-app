function App() {
    return (
        <main className="gap-5 flex flex-col justify-center items-center content-center h-screen bg-[#FDFDFD]">
            <h1 className="text-center text-3xl">Examen de Historia</h1>
            <div className="grid grid-cols-menu gap-4 border border-gray-200 rounded-xl p-4 bg-slate-100">
                <div className="text-justify">
                    <h2 className="text-2xl text-center">Pregunta #1</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Enim ratione soluta tenetur impedit esse
                        voluptatem quibusdam id voluptatum reprehenderit
                        obcaecati autem libero, nesciunt voluptatibus possimus
                        dolores! Vero perspiciatis sed molestias? Error nemo
                        similique dignissimos eveniet iusto dolorem eius dolor
                        distinctio incidunt fugit libero, officiis animi!
                        Nesciunt accusantium similique explicabo.
                    </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-2xl">Respuestas</p>
                    <div className="flex flex-col gap-4">
                        <p className="text-emerald-400 underline">a) Sí</p>
                        <p>b) No</p>
                        <p>c) Maybe</p>
                        <p className="text-red-400 underline">
                            d) I don't know
                        </p>
                    </div>
                    <p className="text-2xl">Retro</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Recusandae consequuntur nesciunt nostrum dolor
                        placeat iure. Nobis, perferendis ex dignissimos quis
                        culpa cupiditate ullam. Saepe laudantium ullam,
                        asperiores enim repellendus veniam. Voluptates.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default App;

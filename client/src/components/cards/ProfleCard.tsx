const ProfleCard = () => {
    return (
        <article className="flex items-center gap-3 border p-3 border-black transition-colors duration-300 hover:bg-white cursor-pointer">
            <div className="h-10 w-10">
                <img src="/avatar.jpg" alt="avatar" />
            </div>
            <div className="text-sm">
                <h1 className="font-bold text-lg">Armando Almanza</h1>
                <p className="text-[10px] font-semibold font-second">
                    armando.s.almanza@outlook.com
                </p>
            </div>
        </article>
    );
};

export default ProfleCard;

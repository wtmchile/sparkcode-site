export const Button = () => {
    return (
        <div className="flex items-center justify-center">
        <div className="flex gap-6">
         <a href="https://lu.ma/sparkcode-previa" target="_blank">
                <button  type="button" title="Registrarse para Online"  className="bg-[#6e0584] hover:bg-[#e199f5] font-bold text-white font-kufam  py-2 px-10 rounded shadow-lg shadow-gray-500/50  text-white rounded-lg">
                Online
                </button>
                </a>
                <a href="https://lu.ma/sparkcode" target="_blank">
                    <button type="button" title="Registrarse para Presencial"  className="bg-[#e199f5] hover:bg-[#6e0584] text-violet-950 font-bold  py-2 px-8  font-kufam rounded shadow-lg shadow-gray-500/50  text-white rounded-lg">
                    Presencial
                </button>
                </a>
        </div>
    </div>
    );
  };
  
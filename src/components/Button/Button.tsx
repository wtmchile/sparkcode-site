export const Button = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex gap-6">
        <a href="https://lu.ma/sparkcode-transmision" target="_blank">
          <button
            type="button"
            title="Registrarse para Online"
            className="rounded rounded-lg bg-[#6e0584] px-10 py-2  font-kufam font-bold text-white text-white shadow-lg  shadow-gray-500/50 hover:bg-[#e199f5]"
          >
            Online
          </button>
        </a>
        <a href="https://movistargameclub.cl/spark-code-dream-big-start-small" target="_blank">
          <button
            type="button"
            title="Registrarse para Presencial"
            className="rounded rounded-lg bg-[#e199f5] px-8  py-2 font-kufam  font-bold text-violet-950 text-white shadow-lg  shadow-gray-500/50 hover:bg-[#6e0584]"
          >
            Presencial
          </button>
        </a>
      </div>
    </div>
  );
};

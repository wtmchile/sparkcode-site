export const Button = () => {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="flex gap-6">
        <a href="https://docs.google.com/forms/d/18gk2eIxfZUZqX98dC05oLjzm392BrUVM1kqxAqCbq4A/edit" target="_blank">
          <button
            type="button"
            title="Registrarse para Online"
            className="rounded rounded-lg bg-[#6e0584] px-10 py-2  font-kufam font-bold text-white text-white shadow-lg  shadow-gray-500/50 hover:bg-[#e199f5]"
          >
            Encuesta de satisfacción
          </button>
        </a>
      </div>
    </div>
  );
};

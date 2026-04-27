export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/b8f401e5-8ff9-4552-aef8-b88999f27040/files/b82a8c37-1ea2-4f08-8bd1-3050e87af617.jpg"
          alt="Сочный арбуз в разрезе"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему наши арбузы?</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Каждый арбуз проходит ручной отбор на бахче. Только спелые, только сладкие — без компромиссов. Доставим в день заказа.
        </p>
        <button className="bg-green-800 text-white border border-green-800 px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-green-800 cursor-pointer w-fit uppercase tracking-wide">
          Выбрать арбуз
        </button>
      </div>
    </div>
  );
}
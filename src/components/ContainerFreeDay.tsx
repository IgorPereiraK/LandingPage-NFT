export default function ContainerFreeDay() {
  return (
    <div className="bg-gradient-to-r from-pink to-purple flex h-56 rounded-lg">
      <div className="flex-1 p-16">
        <h3 className="text-black font-bold text-3xl">
          Cadastre-se agora e jogue o jogo Toka cripto por 27 dias gratuitamente
        </h3>
        <p className="text-black mt-4 font-medium">
          Aumente seu poder e crie a equipe perfeita.
        </p>
      </div>
      <div className="flex-1 bg-[url('/src/assets/feature-icon.png')] bg-right bg-[length:400px_450px] bg-no-repeat relative">
        <button className="text-base py-2 px-8 text-gray-50 rounded-md bg-gray-900 absolute top-24 right-16 hover:bg-gradient-to-r hover:to-purple hover:from-pink transition-all duration-300 ease-in-out">
          Começa agora
        </button>
      </div>
    </div>
  );
}

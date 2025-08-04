import UserFundo from "../../../assets/img/User-fundo.jpg";

function Image() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <img 
        src={UserFundo} 
        alt="Descrição da imagem de fundo do usuário" // Adicionado alt text para acessibilidade
        className="w-full h-auto object-cover rounded-lg" 
      />
      
    </div>
  );
}

export default Image;
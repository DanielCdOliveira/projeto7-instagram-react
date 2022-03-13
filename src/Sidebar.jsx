export default function Sidebar() {
  return (
    <div className="sidebar">
      <User />
      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        <Sugestion/>
      </div>
    </div>
  );
}

function User() {
  return (
    <div className="usuario">
      <img src="assets/img/catanacomics.svg" alt="profile" />
      <div className="texto">
        <strong>catanacomics</strong>
        Catana
      </div>
    </div>
  );
}
const follow = [
    { url: "assets/img/bad.vibes.memes.svg", name: "bad.vibes.memes" },
    { url: "assets/img/chibirdart.svg", name: "chibirdart" },
    { url: "assets/img/razoesparaacreditar.svg", name: "razoesparaacreditar" },
    { url: "assets/img/adorable_animals.svg", name: "adorable_animals" },
    { url: "assets/img/smallcutecats.svg", name: "smallcutecats" },
];

function Sugestion() {
  
  return (
    <div className="sugestoes">
      {follow.map((item) => (
        <div className="sugestao">
          <div className="usuario">
            <img src= {item.url} alt={item.name} />
            <div className="texto">
              <div className="nome">{item.name}</div>
              <div className="razao">Segue você</div>
            </div>
          </div>

          <div className="seguir">Seguir</div>
        </div>
      ))}
    </div>
  );
}

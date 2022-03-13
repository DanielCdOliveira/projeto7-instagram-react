export default function Sugestions() {
  const followSuggestions = [
    {
      url: "assets/img/bad.vibes.memes.svg",
      userName: "bad.vibes.memes",
      reason: "Segue você",
    },
    {
      url: "assets/img/chibirdart.svg",
      userName: "chibirdart",
      reason: "Segue você",
    },
    {
      url: "assets/img/razoesparaacreditar.svg",
      userName: "razoesparaacreditar",
      reason: "Novo no Instagram",
    },
    {
      url: "assets/img/adorable_animals.svg",
      userName: "adorable_animals",
      reason: "Segue você",
    },
    {
      url: "assets/img/smallcutecats.svg",
      userName: "smallcutecats",
      reason: "Segue você",
    },
  ];

  return (
    <div className="sugestoes">
      <Title />
      {followSuggestions.map(({ url, userName, reason }, index) => (
        <SugestionCreator
          key={index}
          url={url}
          userName={userName}
          reason={reason}
        />
      ))}
    </div>
  );
}
function Title() {
  return (
    <div className="titulo">
      Sugestões para você
      <div>Ver tudo</div>
    </div>
  );
}
function SugestionCreator(props) {
  const { url, userName, reason } = props;
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={url} alt={userName} />
        <div className="texto">
          <div className="nome">{userName}</div>
          <div className="razao">{reason}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}


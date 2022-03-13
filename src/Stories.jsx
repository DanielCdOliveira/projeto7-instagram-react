export default function Stories() {
  const stories = [
    { url: "assets/img/9gag.svg", title: "9gag" },
    { url: "assets/img/meowed.svg", title: "meowed" },
    { url: "assets/img/barked.svg", title: "barked" },
    {
      url: "assets/img/nathanwpylestrangeplanet.svg",
      title: "nathanwpylestrangeplanet",
    },
    { url: "assets/img/wawawicomics.svg", title: "wawawicomics" },
    { url: "assets/img/respondeai.svg", title: "respondeai" },
    { url: "assets/img/filomoderna.svg", title: "filomoderna" },
    { url: "assets/img/memeriagourmet.svg", title: "memeriagourmet" },
  ];

  return (
    <div className="stories">
      {stories.map(({ url, title }, index) => (
        <CreateStory key={index} url={url} title={title} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function CreateStory(props) {
  const { url, title } = props;
  return (
    <div className="story">
      <div className="imagem">
        <img src={url} alt={title} />
      </div>
      <div className="usuario">{title}</div>
    </div>
  );
}

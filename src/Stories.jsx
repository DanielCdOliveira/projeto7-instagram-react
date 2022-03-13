export default function Stories() {
  const stories = [
    { img: "assets/img/9gag.svg", title: "9gag" },
    { img: "assets/img/meowed.svg", title: "meowed" },
    { img: "assets/img/barked.svg", title: "barked" },
    {
      img: "assets/img/nathanwpylestrangeplanet.svg",
      title: "nathanwpylestrangeplanet",
    },
    { img: "assets/img/wawawicomics.svg", title: "wawawicomics" },
    { img: "assets/img/respondeai.svg", title: "respondeai" },
    { img: "assets/img/filomoderna.svg", title: "filomoderna" },
    { img: "assets/img/memeriagourmet.svg", title: "memeriagourmet" },
  ];

  return (
    <div className="stories">
      {stories.map(({ img, title }, index) => 
        <CreateStory key={index} img={img} title={title} />
      )}

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function CreateStory(props) {
  const { img, title } = props;
  return (
    <div className="story">
      <div className="imagem">
        <img src={img} alt={title} />
      </div>
      <div className="usuario">{title}</div>
    </div>
  );
}

export default function Posts() {
  const posts = [
    {
      icon: "assets/img/meowed.svg",
      nameAuthor: "meowed",
      img: "assets/img/gato-telefone.svg",
      infoPost: {
        iconComment: "assets/img/respondeai.svg",
        user: "respondeai",
        qtd: "101.523",
      },
    },
    {
      icon: "assets/img/barked.svg",
      nameAuthor: "barked",
      img: "assets/img/dog.svg",
      infoPost: {
        iconComment: "assets/img/adorable_animals.svg",
        user: "adorable_animals",
        qtd: "99.159",
      },
    },
    {
      icon: "assets/img/astronomia-logo.jpg",
      nameAuthor: "astronomia",
      img: "assets/img/nebulosa.jpg",
      infoPost: {
        iconComment: "assets/img/respondeai.svg",
        user: "respondeai",
        qtd: "12.157",
      },
    },
  ];
  return (
    <div className="posts">
      {posts.map(({ icon, nameAuthor, img, infoPost }, index) => (
        <Post
          key={index}
          icon={icon}
          nameAuthor={nameAuthor}
          img={img}
          infoPost={infoPost}
        />
      ))}
    </div>
  );
}

function Post(props) {
  const { icon, nameAuthor, img, infoPost } = props;
  const { iconComment, user, qtd } = infoPost;
 
  return (
    <div className="post">
      <PostTop icon={icon} nameAuthor={nameAuthor} />
      <PostMedia img={img} />
      <PostBot iconComment={iconComment} user={user} qtd={qtd} />
    </div>
  );
}
function PostTop(props) {
  const { icon, nameAuthor } = props;
  return (
    <div className="topo">
      <div className="usuario">
        <img src={icon} alt={nameAuthor}/>
        {nameAuthor}
      </div>
      <div className="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}
function PostMedia(props) {
  return (
    <div className="conteudo">
      <img src={props.img} alt="media"/>
    </div>
  );
}
function PostBot(props) {
  const { iconComment, user, qtd } = props;
  return (
    <div className="fundo">
      <div className="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div className="curtidas">
        <img src={iconComment} alt={user}/>
        <div className="texto">
          Curtido por <strong>{user}</strong> e{" "}
          <strong>outras {qtd} pessoas</strong>
        </div>
      </div>
    </div>
  );
}

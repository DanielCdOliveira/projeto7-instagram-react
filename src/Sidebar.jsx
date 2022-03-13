import Sugestions from "./Sugestions";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <User />
      <Sugestions />
      <Links />
      <Copyright />
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
function Links() {
  return (
    <div className="links">
      Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
      Localizações • Contas mais relevantes • Hashtags • Idioma
    </div>
  );
}
function Copyright (){
    return (
        <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    )
}

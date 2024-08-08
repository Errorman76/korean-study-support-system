//import "./home.css";
import style from "./home.module.css";

export default function page() {
  return (
    //<div className="container">
    //  <section className="nav"></section>
    //  <section className="main"></section>
    //  <section className="buttons"></section>
    //  <section className="title"></section>
    //  <section className="header"></section>
    //  <section className="footer"></section>
    //</div>

    <div className={style.container}>
      <section className={style.nav}></section>
      <section className={style.main}></section>
      <section className={style.title}></section>
      <section className={style.buttons}></section>
      <section className={style.header}></section>
      <section className={style.footer}></section>
    </div>
  );
}

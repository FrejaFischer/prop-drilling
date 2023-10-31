import style from "./Footer.module.css";
function Footer(props) {
  return (
    <footer className={style.footer}>
      <p>Her er en meget standard footer hvor jeg gerne vil vise ({props.contactInfo})</p>
    </footer>
  );
}

export default Footer;

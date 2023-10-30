import Button from "./Button";
function Article(props) {
  return (
    <article>
      <h3>{props.header}</h3>
      <p>{props.content}</p>
      <Button>Read more</Button>
    </article>
  );
}

export default Article;

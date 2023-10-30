import Article from "./Article";
function ArticleList({ articles }) {
  return (
    <div>
      <h2>Vores artikler</h2>
      <div className="grid">
        <Article header={articles[0].header} content={articles[0].content} />
        <Article header={articles[1].header} content={articles[1].content} />
        <Article header={articles[2].header} content={articles[2].content} />
      </div>
    </div>
  );
}

export default ArticleList;

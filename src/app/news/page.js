import NewsBlock from "../../components/NewsBlock";
export default async function NewsPage() {
  const response = await fetch("...");
  console.log(response);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">News</h1>
      <div className="space-y-4">
        {articles.map((article) => (
          <NewsBlock article={article} />
        ))}
      </div>
    </div>
  );
}

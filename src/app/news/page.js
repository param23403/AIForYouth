import NewsBlock from "../../components/NewsBlock";

export const dynamic = "force-dynamic";

export default async function NewsPage() {
  const response = await fetch(
    "https://us-west-2.cdn.hygraph.com/content/cm2lmw2a5004t07ur8bs6x4lk/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        {
          articles {
            id
            title
            date
            description
          }
        }
      `,
      }),
    }
  );

  const { data } = await response.json();
  const articles = data.articles || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">News</h1>
      <div className="space-y-4">
        {articles.map((article) => (
          <NewsBlock key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

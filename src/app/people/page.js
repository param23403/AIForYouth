import PeopleBlock from "../../components/PeopleBlock";

export const dynamic = "force-dynamic";
export default async function PeoplePage() {
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
          peoples {
            id
            name
            designation
            description
            image{url}
          }
        }
      `,
      }),
    }
  );

  const { data } = await response.json();
  const people = data.peoples || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {people.map((person) => (
          <PeopleBlock key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}

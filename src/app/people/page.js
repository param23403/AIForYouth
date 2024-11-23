import PeopleBlock from "../../components/PeopleBlock";

export const dynamic = "force-dynamic";
export default async function PeoplePage() {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
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
  });

  const { data } = await response.json();
  const people = data.peoples || [];
  const categorizedPeople = {
    professor: [],
    employer: [],
    advocate: [],
  };

  people.forEach((person) => {
    if (categorizedPeople.hasOwnProperty(person.designation)) {
      categorizedPeople[person.designation].push(person);
    }
  });

  const sections = Object.entries(categorizedPeople)
    .filter(([_, peopleList]) => peopleList.length > 0)
    .map(([designation, peopleList]) => ({ designation, people: peopleList }));

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Our Team</h1>
      {sections.map(({ designation, people }) => (
        <div key={designation} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 capitalize">
            {designation}s
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {people.map((person) => (
              <PeopleBlock key={person.id} person={person} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

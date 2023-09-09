export default async function Home() {
  const response = await fetch(`https://challenge.solarpipe.com.br/addresses`, {
    method: "GET",
  });

  const addresses = await response.json();
  return (
    <main className="min-h-screen flex flex-row bg-slate-50">
      <aside className=" min-w-[340px] max-w-[350px] bg-slate-50">
        {addresses.map((item: any) => (
          <h1 key={item.uuid}>{item.streetName}</h1>
        ))}
      </aside>
      <article className="w-full bg-slate-200 m-3 rounded-2xl flex items-center justify-center">
        MAPA
      </article>
    </main>
  );
}

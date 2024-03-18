export default async function Home() {
  const res = await fetch(`https://${process.env.VERCEL_URL}/api/message`);
  const message = await res.text();
  return (
    <main>
      <h6>{process.env.VERCEL_URL}</h6>
    </main>
  );
}

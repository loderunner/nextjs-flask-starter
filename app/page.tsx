export default async function Home() {
  const res = await fetch(`${process.env.API_URL}/message`);
  const message = await res.text();
  return <main>{message}</main>;
}

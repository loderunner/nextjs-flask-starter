export default async function Home() {
  const res = await fetch(`${process.env.VERCEL_URL}/api/message`);
  const message = await res.text();
  return <main>{message}</main>;
}

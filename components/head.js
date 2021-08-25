import Head from "next/head";
export default function Heads({ title, description }) {
  title = title || "Swap";
  description = description || "Swap ...... TBD";
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />
    </Head>
  );
}

import Link from "next/link";

const Index = () => {
  return (
    <>
      <h1>Index</h1>
      <Link href={"/about"}>About</Link>
      <Link href={"/posts"}>Posts</Link>
    </>
  );
};
export default Index;

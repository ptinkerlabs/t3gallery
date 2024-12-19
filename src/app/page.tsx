import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/bJgyn7frBGcQYeA0Z7MW1FLfYZU2uRbH0pDPaEtKxvqlGwdz",
  "https://utfs.io/f/bJgyn7frBGcQIJ3cru47XCJKQ3m9vAecLba1G5RZzH0TFDwn",
  "https://utfs.io/f/bJgyn7frBGcQXNh4IJkzESAq8f7ekGaPNZtK4xHdr69RuIyQ",
  "https://utfs.io/f/bJgyn7frBGcQhgxdsIuPU9ipIR0zxaMWAkv268QtOrHebwyT",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}

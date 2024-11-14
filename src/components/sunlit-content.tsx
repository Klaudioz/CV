export function SunlitContent() {
  return (
    <article className="mx-auto max-w-[800px] py-[40vh] px-4">
      <h1 className="text-2xl mb-4">sunlit</h1>
      <p className="mb-4">
        inspired by{" "}
        <a href="https://daylightcomputer.com/" className="hover:underline">
          daylight computer
        </a>{" "}
        and{" "}
        <a href="https://www.chloeyan.me/" className="hover:underline">
          chloe yan&apos;s
        </a>{" "}
        <a href="https://www.sunlit.place/" className="hover:underline">
          sunlit place
        </a>
      </p>
      <pre className="font-mono text-sm">[press <code>space</code> to toggle the sun]</pre>
    </article>
  );
} 
import Button from "./components/Button/Button";

export default function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-7xl items-center justify-between text-sm">
        <header className="w-full flex items-center flex-col gap-2">
          <h1 className="font-heading text-5xl text-white drop-shadow-lg">
            Stock Bro&apos;s
          </h1>
          <h3 className="font-subheading text-2xl text-primary">
            A fun game of reckless capitalism! 😉
          </h3>
        </header>
        <main className="flex flex-col gap-2 items-start">
          <div className="preview border-base-300 bg-base-100 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 undefined">
            <Button size="lg">neutral</Button>
            <Button size="md">neutral</Button>
            <Button size="sm">neutral</Button>
            <Button size="xs">neutral</Button>
          </div>

          <div className="preview border-base-300 bg-base-100 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 undefined">
            <Button>Button</Button>
            <Button variant="neutral">neutral</Button>
            <Button variant="primary">primary</Button>
            <Button variant="secondary">secondary</Button>
            <Button variant="accent">accent</Button>
            <Button variant="ghost">ghost</Button>
            <Button variant="link">link</Button>
          </div>
        </main>
      </div>
    </>
  );
}

import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
          <img
            src="/img/beams.jpg"
            alt=""
            className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
            width="1308"
          />
          <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        <header>
          <div>
            <div>
              <Image
                src="/assets/logo.svg"
                alt="Brand-logo"
                width={200}
                height={200}
                className="w-20 h-20"
              />
            </div>
          </div>
        </header>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <svg
          className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="11" />
          <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
        </svg>
      </main>
      <footer className="flex">
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}

import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gray-50">
      <Head>
        <title>Create Next App</title>
      </Head>

      {/* <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
          <img
            src="/assets/img/beams.jpg"
            alt=""
            className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
            width="1308"
          />
          <div className="absolute inset-0 bg-[url(/assets/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
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
        </svg> */}

      <div className="absolute inset-0 bg-[url(/assets/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,.5))]"></div>
      {/* HEADER-OPEN */}
      <header className="relative pb-8">
        {/* TOP-BAR-OPEN */}
        <div className="flex h-14 w-full bg-slate-100">
          {/* MESSAGE-BOX-OPEN */}
          <div className="w-full self-center bg-slate-300">
            <h4 className="text-center text-xs uppercase">
              Be the first to know.
            </h4>
          </div>
          {/* MESSAGE-BOX-CLOSE */}
        </div>
        {/* TOP-BAR-CLOSE */}
        {/* NAVBAR-OPEN  */}
        <div className="navbar flex flex-row justify-between px-8 align-middle">
          {/* BRAND-OPEN  */}
          <div className="brand relative">
            <div className="h-8 w-20 rounded bg-slate-200 opacity-75 bg-blend-multiply">
              <Image
                src="/assets/logo.svg"
                alt="Brand-logo"
                width={200}
                height={200}
                className="w-full h-full px-2"
              />
            </div>
          </div>
          {/* BRAND-CLOSE  */}
          {/* NAV-OPEN  */}
          <nav className="nav flex flex-row self-center">
            <ul className="list flex list-none space-x-8">
              <li className="nav-list-item h-2 w-12 bg-slate-200">
                <a className="nav-link" href=""></a>
              </li>
              <li className="nav-list-item h-2 w-12 bg-slate-200">
                <a className="nav-link" href=""></a>
              </li>
              <li className="nav-list-item h-2 w-12 bg-slate-200">
                <a className="nav-link" href=""></a>
              </li>
              <li className="nav-list-item h-2 w-12 bg-slate-200">
                <a className="nav-link" href=""></a>
              </li>
            </ul>
          </nav>
          {/* NAV-CLOSE  */}
        </div>
        {/* NAVBAR-CLOSE */}
      </header>
      {/* HEADER-CLOSE */}

      <main className="relative px-8">
        <div className="relative mx-auto space-x-8">
          <div className="flex space-x-8">
            <div className="relative h-20 w-20 rounded bg-slate-400 opacity-25 bg-blend-multiply">
              <div className="flex min-h-full space-x-2">
                <div className="h-8 w-8 rounded bg-slate-500">A1</div>
                <div className="min-h-full w-full rounded bg-slate-500">A2</div>
              </div>
            </div>

            <div className="h-20 w-20 rounded bg-slate-400 opacity-25 bg-blend-multiply">
              <div className="flex min-h-full space-x-2">
                <div className="min-h-full w-full rounded bg-slate-500">B1</div>
                <div className="h-8 w-8 rounded bg-slate-500">B2</div>
              </div>
            </div>

            <div className="h-20 w-20 rounded bg-slate-400 opacity-25 bg-blend-multiply">
              <div className="flex min-h-full justify-between">
                <div className="min-h-full w-1/2 rounded bg-slate-500">C1</div>
                <div className="h-8 w-8 self-center rounded bg-slate-500">
                  C2
                </div>
              </div>
            </div>

            <div className="h-20 w-20 rounded bg-slate-400 opacity-25 bg-blend-multiply">
              <div className="flex h-full flex-col justify-between">
                <div className="h-1/2 w-full rounded bg-slate-800 text-center text-white">
                  D1
                </div>
                <div className="h-8 w-8 self-center rounded bg-gray-50 text-center">
                  D2
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex">
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}

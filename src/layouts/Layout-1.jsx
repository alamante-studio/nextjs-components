export default function LayoutOne() {
  return (
    <div className="section my-8 h-[320px] rounded bg-slate-300 p-4">
      <div className="relative w-64 rounded-lg bg-slate-200 p-4">
        <div className="h-8 w-8">
          <div className="relative h-full w-full rounded-full bg-slate-500 ring-2 ring-white">
            <div className="absolute -right-2 -top-2">
              <div className="flex h-4 w-4 justify-center rounded-full bg-red-400">
                <span className="self-center text-[6px] font-bold text-white">
                  2
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h4 className="font-bold">Emilia Watson</h4>
        </div>
        <div className="text-[12px]">HR Manager</div>
        <div className="text-[8px]">
          Now @ <span>Global Ltd</span>
        </div>

        <button className="mt-2 h-8 w-24 rounded bg-white opacity-75">
          <span className="text-xs font-medium uppercase">open</span>
        </button>
        <button className="mt-2 h-8 w-24 rounded bg-white opacity-75">
          <span className="text-xs font-medium uppercase">close</span>
        </button>

        <div className="absolute -right-4 -top-4">
          <div className="flex h-16 w-16 justify-center rounded-full bg-slate-400">
            <span className="self-center text-[16px] font-bold text-white">
              2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

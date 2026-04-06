export default function AvatarZone({ step, total }) {

  return (

    <div className="bg-slate-800 border-l border-slate-700 flex flex-col items-center p-4">

      <div className="text-xs text-slate-400">
        Bug Hunter
      </div>

      <div className="text-3xl mt-2">
        🐛
      </div>

      <div className="mt-auto text-center text-xs text-slate-400">

        Paso

        <div className="text-blue-400 text-lg font-bold">
          {step}/{total}
        </div>

      </div>

    </div>

  );
}

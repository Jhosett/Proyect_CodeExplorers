import { FaBug } from "react-icons/fa";

export default function AvatarZone({ step, total }) {

  return (

    <div
      className="bg-slate-800 border-t md:border-t-0 md:border-l border-slate-700
                 flex md:flex-col items-center justify-between md:justify-start
                 p-3 md:p-4 gap-3"
    >

      <div className="text-xs text-slate-400">
        Bug Hunter
      </div>

      <div className="text-3xl md:mt-2 text-emerald-400">
        <FaBug />
      </div>

      <div className="md:mt-auto text-center text-xs text-slate-400">

        Paso

        <div className="text-blue-400 text-lg font-bold">
          {step}/{total}
        </div>

      </div>

    </div>

  );
}

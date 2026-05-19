import { useEffect } from "react";
import { AnimatePresence, motion as M } from "framer-motion";
import { IoClose } from "react-icons/io5";
import congratulationsGif from "../assets/animations/CONGRATULATIONSanimation.gif";
import errorGif from "../assets/animations/ERRORanimation.gif";

const animationMap = {
  success: {
    src: congratulationsGif,
    title: "¡Perfecto!",
    caption: "Has acertado el paso correctamente.",
  },
  error: {
    src: errorGif,
    title: "¡Error detectado!",
    caption: "Revisa tu elección y vuelve a intentarlo.",
  },
};

export default function ShowAnimations({ status, onClose }) {
  useEffect(() => {
    if (!status) return;
    const timer = setTimeout(() => {
      onClose?.();
    }, 2400);
    return () => clearTimeout(timer);
  }, [status, onClose]);

  if (!status) return null;

  const animation = animationMap[status] ?? animationMap.error;

  return (
    <AnimatePresence>
      <M.div
        className="fixed inset-0 z-50 grid place-items-center bg-slate-950/90 backdrop-blur-sm px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <M.div
          initial={{ y: 24, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 12, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-md rounded-[32px] border border-slate-700 bg-slate-900/95 p-4 shadow-2xl shadow-slate-950/40"
        >
          <button
            onClick={() => onClose?.()}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-slate-500 hover:text-white"
            aria-label="Cerrar animación"
          >
            <IoClose className="h-5 w-5" />
          </button>

          <div className="flex flex-col items-center gap-4 pt-4 text-center">
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300 font-semibold">
              {animation.title}
            </div>
            <div className="w-full overflow-hidden rounded-[24px] border border-slate-700 bg-slate-950">
              <img
                src={animation.src}
                alt={animation.title}
                className="h-64 w-full object-cover"
              />
            </div>
            <p className="max-w-xs text-sm leading-6 text-slate-300">
              {animation.caption}
            </p>
          </div>
        </M.div>
      </M.div>
    </AnimatePresence>
  );
}

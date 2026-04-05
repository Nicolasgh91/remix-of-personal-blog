import { ExternalLink } from "lucide-react";

const PoweredBy = () => {
  return (
    <a
      href="https://escalatunegocioconia.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 text-xs font-medium transition-colors duration-300"
    >
      <ExternalLink
        className="h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-orange-500 dark:text-slate-400 dark:group-hover:text-orange-500"
        aria-hidden
      />
      <span className="text-slate-500 transition-colors group-hover:text-orange-500 dark:text-slate-400 dark:group-hover:text-orange-500">
        Desarrollado por{" "}
        <span className="font-semibold">Escala tu negocio con IA</span>
      </span>
      <span className="sr-only">(abre en nueva pestaña)</span>
    </a>
  );
};

export default PoweredBy;

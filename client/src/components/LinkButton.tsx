import { motion } from "framer-motion";
import { ExternalLink, FileText, Globe, Ticket, Download, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LinkButtonProps {
  title: string;
  url: string;
  icon?: string;
  className?: string;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  "Ticket": Ticket,
  "FileText": FileText,
  "Globe": Globe,
  "Download": Download,
};

export function LinkButton({ title, url, icon = "Globe", className, index }: LinkButtonProps) {
  const IconComponent = iconMap[icon] || ExternalLink;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
      className={cn(
        "group relative flex items-center w-full max-w-md mx-auto p-4 mb-4",
        "bg-primary border-2 border-primary hover:bg-primary/90",
        "rounded-xl shadow-md hover:shadow-xl hover:shadow-primary/20",
        "transition-all duration-300 ease-out transform hover:-translate-y-1 active:scale-[0.99]",
        "text-left overflow-hidden",
        className
      )}
    >
      {/* Decorative accent bar on left */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-white/20 group-hover:bg-white/40 transition-colors duration-300" />

      {/* Icon Circle */}
      <div className="flex-shrink-0 mr-4 ml-2 w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
        <IconComponent className="w-5 h-5 text-white" />
      </div>

      {/* Content */}
      <div className="flex-grow min-w-0 pr-2">
        <h3 className="font-display font-semibold text-lg text-white truncate">
          {title}
        </h3>
        <p className="text-sm text-white/80 group-hover:text-white truncate flex items-center gap-1">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-2 group-hover:ml-0">
            Open Link
          </span>
          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </p>
      </div>
      
      {/* Subtle chevron purely for decoration */}
      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 text-white/60">
        →
      </div>
    </motion.a>
  );
}

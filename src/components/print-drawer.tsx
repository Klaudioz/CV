"use client";

import { Button } from "./ui/button";
import { PrinterIcon } from "lucide-react";

export const PrintDrawer = () => {
  const handlePrint = () => {
    // Force print dialog and optimize for direct printing
    const printOptions = {
      destination: 'printer',
      suppressDefaultTitle: true,
      margins: 'default'
    };

    // Use a more direct approach
    if (window.matchMedia && window.matchMedia('print').matches) {
      // Already in print mode
      return;
    }

    // Trigger print with a small delay to ensure styles are applied
    setTimeout(() => {
      window.print();
    }, 100);
  };

  return (
    <Button
      onClick={handlePrint}
      className="fixed bottom-4 right-4 h-16 w-16 rounded-full shadow-2xl print:hidden backdrop-blur-sm hover:scale-105 transition-transform"
      title="Print CV"
    >
      <PrinterIcon />
    </Button>
  );
};

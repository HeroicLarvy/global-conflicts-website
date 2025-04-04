// components/handbook_components/handbook_layout.tsx
import HandbookSidebar from "./handbook_sidebar";
import { ReactNode } from "react";

type HandbookLayoutProps = {
  children: ReactNode;
};

export default function HandbookLayout({ children }: HandbookLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white">
      {/* Main content area with sidebar */}
      <div className="flex w-[calc(100%-192px)] mx-24 flex-1">
        <HandbookSidebar />
        <div className="flex-1">
          <main>
            <div className="mt-12 ml-4 space-y-2">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
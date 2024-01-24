import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { AuthProvider, QueryProvider } from "@/providers";
import {
  CreateClinicModal,
  HydrationHandler,
  UpdateClinicModal,
} from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Telinga Kecilku",
  description:
    "Telinga Kecilku merupakan aplikasi untuk mendeteksi dini adanya suspeksi gangguan pendengaran.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <QueryProvider>
          <AuthProvider>
            <HydrationHandler>
              <CreateClinicModal />
              <UpdateClinicModal />
              <Toaster />
            </HydrationHandler>
            {children}
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

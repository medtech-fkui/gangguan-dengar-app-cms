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
  title: "Telinga Kecilku | CMS",
  description: "Telinga Kecilku Content Management System Panel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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

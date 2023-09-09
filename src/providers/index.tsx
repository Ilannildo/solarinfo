"use client";

import { AddressProvider } from "@/contexts/address-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export const RootProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <AddressProvider>{children}</AddressProvider>
    </QueryClientProvider>
  );
};

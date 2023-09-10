import { googleApiUrl } from "@/services/api";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import {
  createUseAddressBuildingInsightsKey
} from "./key";
import { IAddress, IBuildingInsightsResponse } from "./type";

export const useAddressBuildingInsights = (
  { address }: { address?: IAddress },
  options?: UseQueryOptions<IBuildingInsightsResponse>
) => {
  return useQuery(
    createUseAddressBuildingInsightsKey({
      address_id: address?.uuid,
    }),
    async () => {
      let params = "";
      if (address) {
        params = `?location.latitude=${address.latitude}&location.longitude=${address.longitude}&requiredQuality=HIGH`;

        const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
        if (API_KEY) {
          params += `&key=${API_KEY}`;
        }
      }

      const response = await fetch(`${googleApiUrl}/${params}`, {
        method: "GET",
      });
      if (response.ok) {
        return await response.json();
      }

      return null;
      // return await apiGoogleService.get(params).then((res) => res.data);
    },
    { ...options, refetchOnWindowFocus: false, staleTime: 1000 * 10 * 60 }
  );
};

"use client";

import { useAddressBuildingInsights } from "@/stores/addresses";
import { IAddress } from "@/stores/addresses/type";

interface MarkerInfoWindowProps {
  currentAddress: IAddress;
}

export function MarkerInfoWindow({ currentAddress }: MarkerInfoWindowProps) {
  const { data: currentAddressBuildingInsightsResponse, isLoading } =
    useAddressBuildingInsights(
      {
        address: currentAddress ? currentAddress : undefined,
      },
      {
        enabled: !!currentAddress,
      }
    );

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full">
        <h1 className="text-base font-bold text-slate-700">
          {currentAddress.description}
        </h1>
        <span className="text-xs font-normal text-start text-slate-500">
          {`${currentAddress.streetName}, ${currentAddress.streetNumber}, ${currentAddress.neighbourhood}, ${currentAddress.city} - ${currentAddress.state}`}
        </span>
      </div>

      {isLoading ? (
        <div className="w-full bg-slate-200/30 py-4 px-4 text-center gap-1 flex flex-col rounded-lg">
          <span className="text-xs font-normal text-slate-600 animate-pulse">
            Buscando mais informações
          </span>
        </div>
      ) : (
        <>
          {!currentAddressBuildingInsightsResponse && (
            <div className="w-full bg-slate-200/30 py-4 px-4 text-center gap-1 flex flex-col rounded-lg">
              <span className="text-xs font-normal text-yellow-600">
                Este endereço não possui informações sobre Painéis Solares
              </span>
            </div>
          )}

          {currentAddressBuildingInsightsResponse && (
            <ul className="w-full flex flex-col space-y-2">
              <li>
                <div className="w-full bg-slate-200/30 py-4 px-4 text-center gap-1 flex flex-col rounded-lg">
                  <span className="text-xs font-normal text-slate-500">
                    Capacidade máxima de painéis
                  </span>
                  <h1 className="text-base font-bold text-slate-800">
                    {
                      currentAddressBuildingInsightsResponse.solarPotential
                        .maxArrayPanelsCount
                    }
                    un
                  </h1>
                </div>
              </li>
              <li>
                <div className="w-full bg-slate-200/30 py-4 px-4 text-center gap-1 flex flex-col rounded-lg">
                  <span className="text-xs font-normal text-slate-500">
                    Potencial de geração
                  </span>
                  <h1 className="text-base font-bold text-slate-800">
                    {
                      currentAddressBuildingInsightsResponse.solarPotential
                        .panelCapacityWatts
                    }
                  </h1>
                </div>
              </li>
              <li>
                <div className="w-full bg-slate-200/30 py-4 px-4 text-center gap-1 flex flex-col rounded-lg">
                  <span className="text-xs font-normal text-slate-500">
                    Economia esperada
                  </span>
                  <h1 className="text-base font-bold text-slate-800">
                    R$ 10.000,50/year
                  </h1>
                </div>
              </li>
            </ul>
          )}
        </>
      )}
    </div>
  );
}

"use client";

import { useAddress } from "@/hooks/use-address";
import { IAddress } from "@/stores/addresses/type";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useMemo } from "react";
import { MapLoading } from "../map-loading";

interface MapProps {
  addresses: IAddress[];
}

export function Map({ addresses }: MapProps) {
  const { currentAddress, onChangeAddress, zoom } = useAddress();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
  });
  const center = useMemo(
    () =>
      currentAddress
        ? {
            lat: Number(currentAddress.latitude),
            lng: Number(currentAddress.longitude),
          }
        : {
            lat: -22.224402780617687,
            lng: -54.78081860349796,
          },
    [currentAddress]
  );

  if (!isLoaded) return <MapLoading />;


  return (
    <GoogleMap
      mapContainerStyle={{
        height: "100%",
        width: "100%",
      }}
      center={center}
      zoom={zoom}
      options={{
        fullscreenControl: false,
        isFractionalZoomEnabled: true
      }}
    >
      {addresses.map((address) => (
        <Marker
          key={address.uuid}
          draggable={false}
          animation={google.maps.Animation.BOUNCE}
          clickable={true}
          onClick={() => onChangeAddress(address)}
          position={{
            lat: Number(address.latitude),
            lng: Number(address.longitude),
          }}
        >
          {currentAddress && currentAddress.uuid === address.uuid ? (
            <InfoWindow onCloseClick={() => onChangeAddress(null)}>
              <div className="w-full flex flex-col gap-4">
                <div className="w-full">
                  <h1 className="text-base font-bold text-slate-700">
                    {currentAddress.description}
                  </h1>
                  <span className="text-xs font-normal text-start text-slate-500">
                    {`${currentAddress.streetName}, ${currentAddress.streetNumber}, ${currentAddress.neighbourhood}, ${currentAddress.city} - ${currentAddress.state}`}
                  </span>
                </div>

                <ul className="w-full flex flex-col space-y-2">
                  <li>
                    <div className="w-full bg-slate-200/30 py-4 px-4 text-center gap-1 flex flex-col rounded-lg">
                      <span className="text-xs font-normal text-slate-500">Capacidade máxima de painéis</span>
                      <h1 className="text-base font-bold text-slate-800">12000un</h1>
                    </div>
                  </li>
                  <li>
                    <div className="w-full bg-slate-200/30 py-4 px-4 text-center gap-1 flex flex-col rounded-lg">
                      <span className="text-xs font-normal text-slate-500">Potencial de geração</span>
                      <h1 className="text-base font-bold text-slate-800">10kwp</h1>
                    </div>
                  </li>
                  <li>
                    <div className="w-full bg-slate-200/30 py-4 px-4 text-center gap-1 flex flex-col rounded-lg">
                      <span className="text-xs font-normal text-slate-500">Economia esperada</span>
                      <h1 className="text-base font-bold text-slate-800">R$ 10.000,50/year</h1>
                    </div>
                  </li>
                </ul>
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  );
}

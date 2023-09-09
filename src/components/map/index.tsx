"use client";

import { useAddress } from "@/hooks/use-address";
import { IAddress } from "@/stores/addresses/type";
import {
  GoogleMap,
  useJsApiLoader
} from "@react-google-maps/api";
import { useMemo } from "react";
import { MapLoading } from "../map-loading";
import { MarkersList } from "../markers-list";

interface MapProps {
  addresses: IAddress[];
}

export function Map({ addresses }: MapProps) {
  const { currentAddress, zoom } = useAddress();
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
            lat: -22.2159848,
            lng: -54.8054409,
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
      <MarkersList addresses={addresses} />
    </GoogleMap>
  );
}

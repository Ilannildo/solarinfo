'use client';

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { MapLoading } from "../map-loading";

export function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
  });

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        height: "100%",
        width: "100%",
      }}
      center={center}
      zoom={10}
    >
      <></>
    </GoogleMap>
  ) : (
    <MapLoading />
  );
}

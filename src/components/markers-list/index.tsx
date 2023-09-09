"use client";

import { useAddress } from "@/hooks/use-address";
import { IAddress } from "@/stores/addresses/type";
import { InfoWindow, Marker } from "@react-google-maps/api";
import { MarkerInfoWindow } from "../marker-info-window";

interface MarkersListProps {
  addresses: IAddress[];
}

export function MarkersList({ addresses }: MarkersListProps) {
  const { currentAddress, onChangeAddress } = useAddress();


  return (
    <>
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
              <MarkerInfoWindow currentAddress={currentAddress} />
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </>
  );
}

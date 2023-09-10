import { QueryKey } from "@tanstack/react-query";

export const createUseAddressBuildingInsightsKey = ({
  address_id,
}: {
  address_id?: string;
}): QueryKey => ["useAddressBuildingInsightsKey", address_id];

export const createUseAddressInfoKey = ({
  address_id,
}: {
  address_id?: string;
}): QueryKey => ["useAddressInfoKey", address_id];

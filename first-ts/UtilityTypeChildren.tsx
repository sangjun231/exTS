// UtilityTypeChildren.tsx
import { PropsWithChildren, ReactNode } from "react";
import { PersonProps } from "./UtilityType";

export const PersonChildComponent = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

type OmitType = Omit<PersonProps, "id">;

export const ProfileComponent = ({
  description,
  address,
  age,
  profile,
}: OmitType) => {
  return <></>;
};

type PickType = Pick<PersonProps, "address">;

export const AddressComponent = ({ address }: PickType) => {
  return <></>;
};

// UtilityType.tsx
import {
  AddressComponent,
  PersonChildComponent,
  ProfileComponent,
} from "./UtilityTypeChildren";

export type PersonProps = {
  id: string;
  description: string;
  address: string;
  age: number;
  profile: string;
};

export const PersonComponent = ({
  id,
  description,
  address,
  age,
  profile,
}: PersonProps) => {
  return (
    <>
      <PersonChildComponent>
        <div>{id}</div>
      </PersonChildComponent>
      <ProfileComponent
        description={description}
        address={address}
        age={age}
        profile={profile}
      />
      <AddressComponent address={address} />
    </>
  );
};

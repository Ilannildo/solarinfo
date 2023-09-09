import LogoImg from "@/assets/logo.svg";
import Image from "next/image";

export function LogoContent () {
  return (
    <Image src={LogoImg} alt="Logo SolarApp" priority />
  )
}
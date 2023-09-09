import LogoImg from "@/assets/logo.svg";
import Image from "next/image";

export function LogoContent () {
  return (
    <Image className="h-14 lg:h-16" src={LogoImg} alt="Logo SolarApp" priority />
  )
}
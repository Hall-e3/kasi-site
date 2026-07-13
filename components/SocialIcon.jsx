import Image from "next/image";

const assets = {
  whatsapp: "/whatsapp.png",
  mail: "/mail.png",
  linkedin: "/linkedin.png",
};

export default function SocialIcon({ platform, size = 20, className = "" }) {
  return (
    <Image
      src={assets[platform]}
      alt={platform}
      width={size}
      height={size}
      className={className}
    />
  );
}

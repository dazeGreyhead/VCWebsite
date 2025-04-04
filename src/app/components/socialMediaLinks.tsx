import React from "react";
import { IconType } from "react-icons";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

type SocialMedia = {
  name: string;
  link: string;
  icon: IconType;
  address?: string;
};

type SocialMediaLinksProps = {
  color?: string;
  size?: string;
  showEmailIcon?: boolean;
  className?: string;
};

// Arrays of the social medias. Add another social media object to add social media links.
const socialMediaIcons: SocialMedia[] = [
  {
    name: "email",
    link: "mailto:connect@volunteercorpsnepal.org",
    icon: MdEmail,
    address: "connect@volunteercorpsnepal.org",
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/VCNepal1/",
    icon: AiFillFacebook,
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/volunteercorpsnepal/",
    icon: AiOutlineInstagram,
  },
  {
    name: "linkedIn",
    link: "https://www.linkedin.com/company/vcnepal1/",
    icon: AiFillLinkedin,
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/@volunteercorpsnepal2754",
    icon: AiFillYoutube,
  },
  {
    name: "x",
    link: "https://www.x.com/nepalcorps/",
    icon: RiTwitterXFill,
  },
];

// Gives the icons and links for social media.
export default function SocialMediaLinks({
  color,
  size,
  showEmailIcon = true,
  className,
}: SocialMediaLinksProps) {
  return (
    <>
      {socialMediaIcons &&
        socialMediaIcons.length &&
        socialMediaIcons.map((icons) => {
          // If given a text version of email, render the text instead of the email.
          if (!showEmailIcon && icons.address) {
            return (
              <Link href={icons.link} key={icons.name} className={className}>
                <p
                  style={{
                    color: color,
                    fontSize: `calc((1.13/1.31) * ${size})`,
                    fontWeight: `200`,
                  }}
                  key={icons.name}
                >
                  {icons.address}
                </p>
              </Link>
            );
          }

          const IconComponent = icons.icon;
          return IconComponent ? (
            <Link href={icons.link} key={icons.name} className={className}>
              <IconComponent size={size} color={color} />
            </Link>
          ) : null;
        })}
    </>
  );
}

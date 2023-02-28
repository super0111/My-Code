
import { Box, Link } from "@mui/material"

import { FaTwitter, FaTelegram, FaReddit, FaInstagramSquare, FaGithub, FaDiscord } from "react-icons/fa";
import { BsMedium, BsYoutube } from "react-icons/bs";

const socialIcons = [
  { icon: <FaTwitter />, href: 'https://twitter.com/pancakeswap' },
  { icon: <FaTelegram />, href: '#' },
  { icon: <FaReddit />, href: 'https://reddit.com/r/pancakeswap' },
  { icon: <FaInstagramSquare />, href: 'https://instagram.com/pancakeswap_official' },
  { icon: <FaGithub />, href: 'https://github.com/pancakeswap/' },
  { icon: <FaDiscord />, href: 'https://discord.gg/pancakeswap' },
  { icon: <BsMedium />, href: 'https://medium.com/pancakeswap' },
  { icon: <BsYoutube />, href: 'https://www.youtube.com/@pancakeswap_official' },
]

export const Socialbar = () => {
  return (
    <Box display={'flex'} alignItems={'center'} gap={6} my={6}>
    {
      socialIcons.map((item, i) => (
        <Link key={i} href={item.href} target='_blank' sx={{
          fontSize: 25,
          color: '#b8add2',
          '&:hover': {
            color: '#b0adb8',
          }
        }}>
          {item.icon}
        </Link>
      ))
    }
  </Box>
  )
}
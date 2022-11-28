import { Social } from "../typings";

export const fetchSocials = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocails`);

  const data= await res.json()
  const socials: Social[] = data.skills;

  console.log('fetching socials', socials)
  return socials
}
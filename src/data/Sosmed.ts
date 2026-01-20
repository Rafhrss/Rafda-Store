import facebook from "../assets/SosMed/fc1.jpeg";
import facebook2 from "../assets/SosMed/fc2.jpeg";
import instagram from "../assets/SosMed/ig.jpeg";
import tiktok from "../assets/SosMed/tiktok.jpeg";


export interface SocialFeedItem {
  id: number;
  img: string;
  type: 'instagram' | 'facebook' | 'tiktok';
}

export const socialFeed: SocialFeedItem[] = [
  { id: 1, img: facebook, type: "facebook" },
  { id: 2, img: instagram, type: "instagram" },
  { id: 3, img: facebook2, type: "facebook" },
  { id: 4, img: tiktok, type: "tiktok" },
];
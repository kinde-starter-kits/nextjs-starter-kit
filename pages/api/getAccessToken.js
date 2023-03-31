import { getAccessToken } from "@kinde-oss/kinde-auth-nextjs";

export default function handler(req, res) {
  const token = getAccessToken(req, res);
  res.status(200).json({ token });
}

import { LanyardResponse } from "./lanyard";

export const lanyardUserEndpoint = "https://api.lanyard.rest/v1/users/";
export const discordEndpoint = "https://cdn.discordapp.com/avatars/";

export async function getDiscordProfileUrl(discordId: string): Promise<string> {
  const avatarEndpoint = discordEndpoint + discordId + "/";

  const resp = await fetch(lanyardUserEndpoint + discordId);
  const json = (await resp.json()) as LanyardResponse;
  const avtr = json.data.discord_user.avatar;
  const extn = avtr.startsWith("a_") ? ".gif" : ".png";

  return avatarEndpoint + avtr + extn;
}

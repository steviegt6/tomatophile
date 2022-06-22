/* Incomplete lanyard type definitions, not intended to be complete. */

export type LanyardResponse = {
    data: LanyardData;
}

export type LanyardData = {
    discord_user: LanyardDiscordUser;
}

export type LanyardDiscordUser = {
    avatar: string;
}
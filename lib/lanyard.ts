/* These are not complete types, just raw data required to get what I want. */

export type LanyardResponse = {
    data: LanyardData;
}

export type LanyardData = {
    discord_user: LanyardDiscordUser;
}

export type LanyardDiscordUser = {
    avatar: string;
}
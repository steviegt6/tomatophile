/* Temporary until I get around to setting up a DB. */

const views: Map<string, number> = new Map();

export function pushView(url: string) {
    var count = views.get(url);

    if (count === undefined)
        count = 0;

    views.set(url, ++count);
    return count;;
}

import { reposEventUrl, eventsQuantity} from "../variables.js";

async function getUserEvents(userName) {
    const response = await fetch(`${reposEventUrl}/${userName}/events?per_page=${eventsQuantity}`);
    return await response.json()
}

export { getUserEvents } 
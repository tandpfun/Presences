const presence = new Presence({
    clientId: "735314055861895288"
});

const browsingStamp = Math.floor(Date.now() / 1000); // Time Ratelimited
const path = document.location; // Website URL

/* When Website Updates */
presence.on("UpdateData", async () => {
    const presenceData: PresenceData = {
        largeImageKey: "icon"
    };

    /* Update Presence */
    if (path.hostname === "takeb1nzyto.space") {
        const song = document.querySelector(
            "#song"
        ).textContent;
        const ratelimited = document.querySelector(
            "#ratelimited-time"
        ).textContent;

        presenceData.startTimestamp = browsingStamp;
        presenceData.details = "Playing " + song;
        presenceData.state = "Ratelimited for " + ratelimited + "s";
        presence.setActivity(presenceData);
    }
});
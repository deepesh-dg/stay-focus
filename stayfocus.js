const blockedSites = [
    "youtube.com/short",
    "instagram",
    "facebook.com",
    "twitter.com",
    "prime.com",
    "netflix.com",
];

function block() {
    const overlay = `
        <div style="display: flex; width: 100%; height: 100vh; justify-content: center; align-items: center; z-index: 9999999999999">
            <img src="https://res.cloudinary.com/deepeshgupta/image/upload/v1646238532/images/study-hard_v5aooz.jpg" alt="Kya Kar Raha Hai Bhai Tu" style="max-width: 100%; height: auto" />
        </div>
    `;
    blockedSites.forEach((site) => {
        if (window.location.href.indexOf(site) !== -1) {
            const body = document.querySelector("body");
            body.innerHTML = overlay;
        }
    });
    observeHref();
}

docReady(block);

function docReady(fn, ...args) {
    // see if DOM is already available
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        // call on next available tick
        setTimeout(fn, 1, ...args);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

function observeHref(type, oldvalue) {
    undefined === oldvalue && (oldvalue = window.location.href);
    let clearcheck = setInterval(repeatcheck, 500, oldvalue);
    function repeatcheck(oldvalue) {
        if (window.location.href !== oldvalue) {
            // do something
            clearInterval(clearcheck);
            block();
        }
    }
}

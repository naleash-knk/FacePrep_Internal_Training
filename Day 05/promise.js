async function initBadge() {
    const response = await fetch(
        "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json"
    );

    const data = await response.json();
	console.log(data);
    document.getElementById("badge-count").textContent = data.count;
}

initBadge();
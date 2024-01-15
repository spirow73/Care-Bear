<script>
    function requestNotificationPermission() {
        if ("Notification" in window) {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    console.log("Notification permission granted.");
                    // Additional logic when permission is granted
                } else {
                    console.log("Notification permission denied.");
                    // Handle the case where the user denies permission
                }
            });
        }
    }
</script>

<button on:click={requestNotificationPermission}>
    Enable Task Reminders
</button>

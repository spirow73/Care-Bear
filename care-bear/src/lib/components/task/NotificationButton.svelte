<script>
    function requestNotificationPermission() {
        if ("Notification" in window) {
            Notification.requestPermission().then(permission => {
                // Handle the permission response
            });
        }
    }
</script>

<button on:click={requestNotificationPermission}>
    Enable Task Reminders
</button>

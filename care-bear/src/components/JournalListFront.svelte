<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Journal Home</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            line-height: 1.6;
        }

        .container {
            width: 80%;
            margin: auto;
            padding: 20px;
        }

        h1, h2 {
            text-align: center;
        }

        button {
            display: block;
            width: max-content;
            margin: 20px auto;
            background-color: #4a90e2;
            color: #fff;
            border: none;
            cursor: pointer;
            padding: 10px 20px;
        }

        button:hover {
            background-color: #357abd;
        }

        #recent-entries .entry {
            border-bottom: 1px solid #ddd;
            padding: 10px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Your Journal</h1>
        <p>Reflect on your past entries or create a new one.</p>

        <button id="new-entry-button" onclick="location.href='journal-entry.html';">New Journal Entry</button>

        <h2>Recent Entries</h2>
        <div id="recent-entries">
            <!-- Previous entries will be loaded here dynamically -->
            <div class="entry">
                <h3>Entry Date: 2023-11-18</h3>
                <p>Today was a challenging day, but I managed to get through it with some meditation and a long walk...</p>
            </div>
            <!-- More entries can be added here -->
        </div>
    </div>

    <script>
        // JavaScript for dynamic loading and interaction (if necessary)
    </script>
</body>
</html>

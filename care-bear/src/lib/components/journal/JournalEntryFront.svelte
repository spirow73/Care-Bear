<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Journal</title>
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
            overflow: hidden;
            padding: 20px;
        }

        h1 {
            text-align: center;
            color: #333;
        }

        label, select, textarea, button, input[type="date"] {
            display: block;
            width: 100%;
            margin-bottom: 20px;
            padding: 10px;
        }

        textarea {
            height: 300px;
            resize: none;
        }

        button {
            background-color: #5cb85c;
            color: #fff;
            border: none;
            cursor: pointer;
            padding: 10px 20px;
        }

        button:hover {
            background-color: #4cae4c;
        }

        #date-picker {
            margin: 20px 0;
        }

        .hidden {
            display: none;
        }

        #previous-entries {
            margin-top: 20px;
            border-top: 1px solid #ccc;
            padding-top: 20px;
        }
    </style>
    <script src="script.js" defer></script>
</head>
<body>
    <div class="container">
        <h1>Student Journal</h1>
        <p>Reflect on your day and unwind.</p>

        <div id="date-picker">
            <label for="journal-date">Select Date:</label>
            <input type="date" id="journal-date">
        </div>

        <textarea id="journal-entry" placeholder="Write about your day..."></textarea>
        <button type="button" id="save-button">Save Entry</button>
        <button type="button" id="view-entries-button">View Previous Entries</button>

        <div id="previous-entries" class="hidden">
            <!-- Previous entries will be loaded here -->
        </div>
    </div>
</body>
</html>

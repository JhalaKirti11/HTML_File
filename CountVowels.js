<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <p>Enter the word</p>
    <input type="text" placceholder="Enter the word" id="word">
    <button type="button" onclick="countVowels()">Click</button>
    <p id="result"></p>

    <script>
        function countVowels() {
            let word = document.getElementById("word").value
            const lower = word.toLowerCase();
            console.log("word : " + lower)
            let count = 0;
            for (let i = 0; i < lower.length; i++) {
                let l = lower.charAt(i)
                switch (l) {
                    case 'a':
                    case 'e':
                    case 'i':
                    case 'o':
                    case 'u':
                        count++;
                }
            }
            document.getElementById("result").innerHTML = `total vowels ${count}`
        }
    </script>

</body>

</html>

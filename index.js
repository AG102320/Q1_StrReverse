document.addEventListener("DOMContentLoaded", function () {
    const inputString = document.getElementById("inputString");
    const reverseButton = document.getElementById("reverseButton");
    const result = document.getElementById("result");

    reverseButton.addEventListener("click", function () {
        const text = inputString.value;
        const reversedText = reverseString(text);
        result.textContent = reversedText;
    });

    function reverseString(str) {
        let reversedStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i];
        }
        return reversedStr;
    }
});

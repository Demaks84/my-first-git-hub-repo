 let num1;
        let num2;
        let sum;
        let divide;
        let product;
        let difference;

        // Function to validate input
        function validateInput() {
            num1 = parseFloat(document.getElementById('num1').value);
            num2 = parseFloat(document.getElementById('num2').value);

            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById('results').textContent = "Please enter both numbers!";
                return false;
            }
            return true;
        }

        function addition() {
            if (!validateInput()) return;
            sum = num1 + num2;
            document.getElementById('results').textContent = `Your answer is: ${sum}`;
            console.log(sum);
        }

        function subtraction() {
            if (!validateInput()) return;
            difference = num1 - num2;
            document.getElementById('results').textContent = `Your answer is: ${difference}`;
            console.log(difference);
        }

        function multiplication() {
            if (!validateInput()) return;
            product = num1 * num2;
            document.getElementById('results').textContent = `Your answer is: ${product}`;
            console.log(product);
        }

        function division() {
            if (!validateInput()) return;

            if (num2 === 0) {
                document.getElementById('results').textContent = "Cannot divide by zero!";
                return;
            }

            divide = num1 / num2;
            document.getElementById('results').textContent = `Your answer is: ${divide}`;
            console.log(divide);
console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1: Ignore Even\n==========\n");
for (let i = 1; i <= 100; i++)
{
    if (i % 2 != 0)
    {
        console.log(i);
    }
    else
    {
        continue;
    }
}

// Exercise 2 Section
console.log("EXERCISE 2: FIZZBUZZ\n==========\n");

// for loop
console.log("FIZZBUZZ: for loop");
for (let i = 1; i <= 100; i++)
{
    if (i % 3 == 0 && i % 5 == 0)
    {
        console.log(i, "FIZZBUZZ");
    }
    else
    {
        if (i % 3 == 0)
        {
            console.log(i, "FIZZ");
        }
        else if (i % 5 == 0)
        {
            console.log(i, "BUZZ");
        }
        else
        {
            console.log(i);
        }
    }
}

// Exercise 3 Section
console.log("EXERCISE 3: Repeat with While and Do/While\n==========\n");

// while loop
console.log("FIZZBUZZ: while loop");

let i = 1;
while (i <= 100)
{
    if (i % 3 == 0 && i % 5 == 0)
    {
        console.log(i, "FIZZBUZZ");
    }
    else
    {
        if (i % 3 == 0)
        {
            console.log(i, "FIZZ");
        }
        else if (i % 5 == 0)
        {
            console.log(i, "BUZZ");
        }
        else
        {
            console.log(i);
        }
    }

    i++;
}

// do/while loop
console.log("FIZZBUZZ: do/while loop");

let j = 1;
do
{
    if (j % 3 == 0 && j % 5 == 0)
    {
        console.log(j, "FIZZBUZZ");
    }
    else
    {
        if (j % 3 == 0)
        {
            console.log(j, "FIZZ");
        }
        else if (j % 5 == 0)
        {
            console.log(j, "BUZZ");
        }
        else
        {
            console.log(j);
        }
    }

    j++;
} while (j <= 100);

// Exercise 4 Section
console.log("EXERCISE 4: Find Value\n==========\n");

// creates a random number between 0 and 500
let numberToFind = Math.round((Math.random() * 500));

// creates a random number between 100 and 500
let n = Math.round(Math.random() * (500 - 100) + 100);

for (let i = 1; i <= n; i++)
{
    if (i == numberToFind)
    {
        console.log(`Found ${numberToFind}!`);
        break;
    }

    if (i == n)
    {
        console.log(`Did not find ${numberToFind} within 1-${n}.`);
    }
}

// Exercise 5 Section
console.log("EXERCISE 5: Customized FIZZBUZZ\n==========\n");

// Math.round() => 5.56 => 6
// Math.random() => 0-0.9999...
// Math.random() * 10 => 0-9.9999...
// Math.random() * 10 + 2 => 2-11.9999...
// Math.random() * (max - min) + min => gives a value within a min and max range
// Math.random() * (10 - 5) + 5 => 5-9.9999... then with Math.round() => 5-10

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(start, end);

for (let i = start; i <= end; i++)
{
    let output = "";

    if (i % fizzDivisor == 0)
    {
        output += "FIZZ";
    }

    if (i % buzzDivisor == 0)
    {
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);
}

console.log(fizzDivisor, buzzDivisor);
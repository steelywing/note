---
date: 2024-02-26
tags: [Math, Programming]
---

# Calculate Pi

Calculating Pi with code

$\pi = 4 \cdot {(1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + ...)}$

<!--truncate-->

## Digits of Pi

> [22TB Digits of Pi](https://pi2e.ch/blog/2017/03/10/pi-digits-download/)

1K digits of Pi

```text
3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989
```

## JavaScript

Taylor series

> Ref: [Taylor series - Wikipedia](https://en.wikipedia.org/wiki/Taylor_series#Trigonometric_functions)

> Ref: [A Million Digits of Pi in 9 Lines of Javascript](http://ajennings.net/blog/a-million-digits-of-pi-in-9-lines-of-javascript.html)

```js
// 1,000,000 digits validated

// 1n == BigInt(1)

const digits = 100000n;

// http://ajennings.net/blog/a-million-digits-of-pi-in-9-lines-of-javascript.html

function pi(digits) {
    let i = 1n;
    let x = 3n * (10n ** (digits + 20n));
    let pi = x;
    while (x > 0) {
        x = x * i / ((i + 1n) * 4n);
        pi += x / (i + 2n);
        i += 2n;
    }
    return pi / (10n ** 20n);
};

console.time('pi');
let piInt = pi(digits);
console.timeEnd('pi');

let piDigits = piInt.toString();
piDigits = piDigits.slice(0, 1) + '.' + piDigits.slice(1);
// console.log(piDigits);
```

Validate

```js
import { open } from 'node:fs/promises';

const file = await open('./pi.txt');
const correctPi = await file.readFile({ encoding: 'utf-8' });

let i;

for (i = 0; i < digits; i++) {
    if (piDigits[i] != correctPi[i]) {
        console.log(`Digit ${i} is wrong: ${piDigits[i]}, correct digit is ${correctPi[i]}`);
        break;
    }
}

if (i == digits) {
    console.log('Pi is correct');
}
```

Spigot Algorithm

> Ref: [Pi - Rosetta Code](https://rosettacode.org/wiki/Pi#Spigot_Algorithm)

```js
// 100,000 digits validated

// 1n == BigInt(1)

const digits = 10000;

// https://rosettacode.org/wiki/Pi#Spigot_Algorithm

function pi() {
    let q = 1n;
    let r = 180n;
    let t = 60n;
    let i = 2n;
    return () => {
        let y = (q * (27n * i - 12n) + 5n * r) / (5n * t);
        let u = 3n * (3n * i + 1n) * (3n * i + 2n);
        r = 10n * u * (q * (5n * i - 2n) + r - y * t);
        q = 10n * q * i * (2n * i - 1n);
        t = t * u;
        i = i + 1n;
        return y;
    };
};

let piDigit = pi();
let piDigits = [piDigit(), '.'];

console.time('pi');
for (let i = 1; i < digits; i++) {
    piDigits.push(piDigit());
}
console.timeEnd('pi');

// console.log(piDigits.join(''));
```

Validate

```js
import { open } from 'node:fs/promises';

const file = await open('./pi.txt');
const correctPi = await file.readFile({ encoding: 'utf-8' });

let i;

for (i = 0; i < digits; i++) {
    if (piDigits[i] != correctPi[i]) {
        console.log(`Digit ${i} is wrong: ${piDigits[i]}, correct digit is ${correctPi[i]}`);
        break;
    }
}

if (i == digits) {
    console.log('Pi is correct');
}
```

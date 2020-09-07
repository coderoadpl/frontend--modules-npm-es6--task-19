const add = (numbers) => {
    // const a = numbers[0]
    // const b = numbers[1]
    const [a, b] = numbers

    return  a + b
}

const numbers = [1, 3]

console.log(add(numbers))
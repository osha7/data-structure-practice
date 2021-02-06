
const hash = (key, size) => {
    let hashedKey = 0
    for (let i = 0; i < key.length; i++) {
        hashedKey = key.charCodeAt(i)
    }
    return hashedKey % size
}

console.log(hash("hello", 100))

// ~/Development/algorithm-folder/data-structures (master ✘)✖✹✭ ᐅ node src/data-structures/hash-tables.js
//=>  11
// ~/Development/algorithm-folder/data-structures (master ✘)✖✹✭ ᐅ node src/data-structures/hash-tables.js
//=>  11

const hash = (key, size) => {
    let hashedKey = 0
    for (let i = 0; i < key.length; i++) {
        hashedKey = key.charCodeAt(i)
    }
    return hashedKey % size
}

console.log(hash("hello", 5))

// ~/Development/algorithm-folder/data-structures (master ✘)✖✹✭ ᐅ node src/data-structures/hash-tables.js
//=>  1
// ~/Development/algorithm-folder/data-structures (master ✘)✖✹✭ ᐅ node src/data-structures/hash-tables.js
//=>  1
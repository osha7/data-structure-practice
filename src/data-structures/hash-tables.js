
const hash = (key, size) => {
    let hashedKey = 0
    for (let i = 0; i < key.length; i++) {
        hashedKey += key.charCodeAt(i)
    }
    return hashedKey % size
}

class HashTable {
    constructor() {
        this.size = 25
        this.buckets = Array(this.size)

        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new Map()
        }
    }

    insert(key, value) {
        let index = hash(key, this.size)
        this.buckets[index].set(key, value)
    }

    search(key) {
        let index = hash(key, this.size)
        return this.buckets[index].get(key)
    }

    remove(key) {
        let index = hash(key, this.size)
        let deleted = this.buckets[index].get(key)
        this.buckets[index].delete(key)
        return deleted
    }
}

// const hashTable = new HashTable()

// hashTable.insert('broccoli', 'green')
// hashTable.insert('tomatoes', 'red')
// hashTable.insert('squash', 'yellow')
// hashTable.insert('kale', 'green')

// hashTable

// hashTable.search('tomatoes')

// hashTable.remove('squash')
// hashTable




// ~/Development/algorithm-folder/data-structures (master ✘)✖✹✭ ᐅ node src/data-structures/hash-tables.js
//=>  2
// ~/Development/algorithm-folder/data-structures (master ✘)✖✹✭ ᐅ node src/data-structures/hash-tables.js
//=>  2

// const hash = (key, size) => {
//     let hashedKey = 0
//     for (let i = 0; i < key.length; i++) {
//         hashedKey += key.charCodeAt(i)
//     }
//     return hashedKey % size
// }

// console.log(hash("hello", 100))

// ~/Development/algorithm-folder/data-structures (master ✘)✖✹✭ ᐅ node src/data-structures/hash-tables.js
//=>  32
// ~/Development/algorithm-folder/data-structures (master ✘)✖✹✭ ᐅ node src/data-structures/hash-tables.js
//=>  32


const { fakerRU, fa } = require('@faker-js/faker')

function getRandomMessage() {
    const clock = new Date()
    const hour = clock.getHours() > 9 ? clock.getHours() : '0' + clock.getHours()
    const minute = clock.getMinutes() > 9 ? clock.getMinutes() : '0' + clock.getMinutes()
    const second = clock.getSeconds() > 9 ? clock.getSeconds() : '0' + clock.getSeconds()
    const day = clock.getDate() > 9 ? clock.getDate() : '0' + clock.getDate()
    const month = clock.getMonth() > 9 ? clock.getMonth() : '0' + clock.getMonth()
    return {
        "id": fakerRU.string.uuid(),
        "title": fakerRU.lorem.sentence({ min: 3, max: 5 }),
        "img": fakerRU.image.avatar(),
        "text": fakerRU.lorem.text(),
        "posted": `${hour + 3}:${minute}:${second} ${day}.${month}.${clock.getFullYear()}`
      }
}

// function getRandomMessages(count) {
//     const result = []
//     const randomCount = Math.random() * count
//     for (let index = 0; index < randomCount; index++) {
//         const msg = getRadnomMessage()
//         result.push(msg.next().value)
//     }
//     return result
// }

module.exports = {
    getRandomMessage
}

function printURLParts(urlString) {
    const urlObj = new URL(urlString)
    console.log(urlObj.protocol)
    console.log(urlObj.username)
    console.log(urlObj.password)
    console.log(urlObj.hostname)
    console.log(urlObj.port)
    console.log(urlObj.pathname)
    console.log(urlObj.search)
    console.log(urlObj.hash)
}

// don't touch below this line

const fantasyQuestURL = 'http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id'
printURLParts(fantasyQuestURL)


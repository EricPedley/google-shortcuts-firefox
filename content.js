const elements = Array.from(document.querySelector("#rso").children)
const links = []
for(const e of elements) {
    const link = e.querySelector("a")?.href
    if(link !== undefined)
        links.push(link)
}
window.onkeydown = (keyEvent) => {
    if(49 <= keyEvent.keyCode && keyEvent.keyCode <= 57) { // 49 = "1", 57 = "9"
        // window.open(links[keyEvent.keyCode-49],"_blank")
        console.log(links[keyEvent.keyCode-49])
        browser.runtime.sendMessage({url: links[keyEvent.keyCode-49]})
    }
}
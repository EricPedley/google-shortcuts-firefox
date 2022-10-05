browser.runtime.onMessage.addListener(({url, index}, sender, sendResponse) => {
    console.log(url, index)
    browser.tabs.query({currentWindow: true, active: true}).then(queryInfo=>{
        browser.tabs.create({
            url: url,
            index: queryInfo[0].index +1
        })
    })
})
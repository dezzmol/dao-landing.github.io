document.querySelectorAll(".app-showcase__button").forEach((function (button) {
    button.addEventListener("mouseover", changeContent)

    // button.addEventListener("click", function() {
    //     console.log("click" + button.id)
    // })
}))

let activeButton = null

function changeContent() {
    if (activeButton) {
        activeButton.classList.remove("active");
        let title = document.querySelector(".app-showcase__title")
        title.remove()
        let descContainer = document.querySelector(".app-showcase__desc-container")
        descContainer.innerHTML = ""
        let svg = activeButton.querySelector(".icon");
        svg.classList.remove("active");
        let subTitle = document.querySelector(".app-showcase__sub-title")
        if (subTitle) {
            subTitle.remove()
        }
        let image = document.querySelector(".app-showcase__main-image")
        if (image) {
            image.remove()
        }

    }
    this.className += " active"
    activeButton = this
    let svg = this.querySelector(".icon")
    svg.className += " active"


    changeTitle(this.id)
    changeDesc(this.id)
    changeImage(this.id)
}

function changeTitle(id) {
    let titleHolder = document.querySelector(".app-showcase__right-block-container")
    let title = document.createElement("h2")
    let subTitle = null

    let span
    switch (id) {
        case "project-and-communities":
            title.innerHTML = "PROJECTS & COMMUNITIES"
            title.className += " app-showcase__title"
            subTitle = document.createElement("span")
            subTitle.innerHTML = "Technology overview"
            subTitle.className = "app-showcase__sub-title"
            break
        case "events":
            span = document.createElement("span")
            span.innerHTML = "<br>INTERACTIVE MAP"
            title.innerHTML = "EVENTS &"
            title.className += " app-showcase__title"
            title.className += " app-showcase__title-with-span"
            title.append(span)
            break
        case "do-and-earn":
            title.innerHTML = "D&E"
            title.className += " app-showcase__title"
            subTitle = document.createElement("span")
            subTitle.innerHTML = "Do and earn"
            subTitle.className = "app-showcase__sub-title"
            break
        case "daopeople-nft":
            title.innerHTML = "DAOPEOPLE NFT"
            title.className += " app-showcase__title"
            subTitle = document.createElement("span")
            subTitle.innerHTML = "Our NFT collection"
            subTitle.className = "app-showcase__sub-title"
            break
        case "nft-marketplace":
            title.innerHTML = "NFT MARKETPLACE"
            title.className += " app-showcase__title"
            subTitle = document.createElement("span")
            subTitle.innerHTML = "And trust wallet integration"
            subTitle.className = "app-showcase__sub-title"
            title.append(subTitle)
            break
        case "business-matching":
            span = document.createElement("span")
            span.innerHTML = "MATCHING"
            title.innerHTML = "BUSINESS "
            title.className += " app-showcase__title"
            title.append(span)
            break
    }

    titleHolder.append(title)
    if (subTitle) {
        titleHolder.append(subTitle)
    }
}


// Добавление описания слева
function changeDesc(id) {
    let descHolder = document.querySelector(".app-showcase__desc-container")
    let desc = document.createElement("div")

    switch (id) {
        case "project-and-communities":
            desc.className = "project-and-communities__desc"
            desc.innerHTML = "Pages of various communities and crypto projects. <br>Complete information about the project, its team and partners, <br>community management tools, roles and channels in one place."
            let tags = document.createElement("div")
            tags.className = "tags"
            tags.innerHTML = "<div class='tag-element'>Communities</div><div class='tag-element'>Projects</div><div class='tag-element'>Teams</div>"

            descHolder.append(tags)

            let platypus = document.createElement("img")
            platypus.src = "./assets/third-block/project-and-communities/platypus.png"
            platypus.className = "platypus"
            let leftBlock = document.querySelector(".app-showcase__desc-container")
            leftBlock.append(platypus)

            let circle = document.createElement("img")
            circle.src = "./assets/third-block/project-and-communities/Circle.png"
            circle.className = "circle"
            leftBlock.append(circle)

            break
        case "events":
            desc.innerHTML = "Find information about upcoming events, both real and online. Interactive live map of users and events will allow you to always stay at the crypto party."
            desc.className = "project-and-communities__desc"
            let eventTags = document.createElement("div")
            eventTags.innerHTML = "<div class='tag-element'>Events</div><div class='tag-element'>Meetings</div><div class='tag-element'>Gatherings</div>"
            eventTags.className = "tags"
            descHolder.append(eventTags)

            let globe = document.createElement("img")
            globe.src = "./assets/third-block/events/globe.svg"
            globe.className = "globe"
            descHolder.append(globe)
            break
        case "do-and-earn":
            desc.innerHTML = "Find ways to earn money in Web 3 or tools for doing business.<br>" +
                "The system of reviews, rating and verification will protect you from scammers.<br>" +
                "Get paid in crypto after your job is done, track your workers progress through API or reports!<br>" +
                "<br>" +
                "In order to get access to D&E user needs to hold at least Tier 1 NFT for more than 7 days, with D&E he will be able to generate additional income stream by providing genuine social engagement over multiple platforms."

            desc.className = "do-and-earn__desc"

            break
        case "daopeople-nft":
            desc.innerHTML = "Our own NFT collection, created to provide additional benefits to our users and supporters.<br>" +
                "There will be several “Tiers” for NFTs - the higher the level, the higher the amount of your benefits!<br>" +
                "Also, while user keeps his NFTs in the Mining Pool, he will recieve additional Token Rewards and % booster in D&E section. "

            desc.className = "daopeople-nft__desc"
            let daopeopleTags = document.createElement("div")
            daopeopleTags.innerHTML = "<div class='tag-element'>Uncommon</div><div class='tag-element'>Epic</div><div class='tag-element'>Legendary</div>"
            daopeopleTags.className = "tags"
            descHolder.append(daopeopleTags)

            let sinusoid = document.createElement("img")
            sinusoid.src = "./assets/third-block/daopeople-nft/sinusoid.svg"
            sinusoid.className = "daopeople-nft__sinusoid"
            descHolder.append(sinusoid)

            break
        case "nft-marketplace":
            desc.innerHTML = "Safely sell or buy NFTs through DAOPEOPLE app."
            desc.className = "nft-marketplace__first-desc"

            let daoSubtitle = document.createElement("img")
            daoSubtitle.src = "./assets/third-block/nft-marketplace/dao-subtitle.png"
            descHolder.append(daoSubtitle)

            let secondDesc = document.createElement("div")
            secondDesc.innerHTML = "Fully integrated with Trust Wallet technology for smooth and secure experience"
            secondDesc.className = "nft-marketplace__second-desc"

            descHolder.append(secondDesc)

            let nftMarketplaceTags = document.createElement("div")
            nftMarketplaceTags.innerHTML = "<div class='tag-element'>Marketplace</div><div class='tag-element'>Trust wallet</div><div class='tag-element'>Safe transactions</div>"
            nftMarketplaceTags.className = "tags"
            descHolder.append(nftMarketplaceTags)
            break
        case "business-matching":
            desc.innerHTML = "Find interesting people from the crypto world. Are you at an event and want to get to know its participants better? Or do you just want to find a new team member or partner? Look for new connections with a lot of filters:<br>" +
                "location, projects, roles, statuses, <br>" +
                "work experience, gender, interests, communities, and much more"
            desc.className = "business-matching__desc"
            let businessMatchingSubtitle = document.createElement("img")
            businessMatchingSubtitle.src = "./assets/third-block/nft-marketplace/dao-subtitle.png"
            businessMatchingSubtitle.style.marginTop = "50px"
            descHolder.append(businessMatchingSubtitle)
            break
    }

    descHolder.insertBefore(desc, descHolder.children[0])
}

function changeImage(id) {
    let imageHolder = document.querySelector(".app-showcase__right-block-container")
    let image = document.createElement("img")

    switch (id) {
        case "project-and-communities":
            image.src = "./assets/third-block/project-and-communities/main-img.png"
            break
        case "events":
            image.src = "./assets/third-block/events/main-img.png"
            break
        case "do-and-earn":
            image.src = "./assets/third-block/do-and-earn/main-img.png"
            break
        case "daopeople-nft":
            image.src = "./assets/third-block/daopeople-nft/main-img.png"
            break
        case "nft-marketplace":
            image.src = "./assets/third-block/nft-marketplace/main-img.png"
            break
        case "business-matching":
            image.src = "./assets/third-block/business-matching/main-img.png"
            break
    }

    let imageContainer = document.createElement("div")
    imageContainer.className = "app-showcase__main-image"
    if (id === "nft-marketplace") {
        imageContainer.className += " nft-marketplace-image"
    }

    imageContainer.append(image)
    imageHolder.append(imageContainer)
}

let boundFunc = changeContent.bind(document.getElementById("project-and-communities"))
boundFunc()
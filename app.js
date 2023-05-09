



const titles = gsap.utils.toArray('p')

const tl = gsap.timeline()
// gsap.registerPlugin(SplitText);

titles.forEach(title => {
    // do something with each title

    const splitTitle = new SplitTextJS(title)
    // console.log(splitTitle)

    tl
    .from(splitTitle.chars, {
        opacity:0,
        y:80,
        rotateX: -90,
        stagger: .02
    }, '<')
    
    .to(splitTitle.chars, {
        opacity:0,
        y:-80,
        rotateX: 90,
        stagger: .02
    }, "<1")
    
})


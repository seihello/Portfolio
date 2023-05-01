$(() => {    
    $(window).on("scroll", () => {
        showSkillRate()
    })
})

function showSkillRate() {
    $(".skill-rate").each((index, skillRateElement) => {
        let elemPos = $(skillRateElement).offset().top - 50
        let scroll = $(window).scrollTop()
        let windowHeight = $(window).height()
        
        if (scroll >= elemPos - windowHeight){ 
            for(let i = 20; i <= 100; i+= 20) {
                // Check the class name and add an animation name that matches the skill rate
                // e.g. If the class name is "rate60", add "rateUntil60" as an animation name
                if(skillRateElement.classList[1].includes(String(i))) {
                    $(skillRateElement).css("animation-name", `rateUntil${i}`)
                }
            }
        }
    })
}
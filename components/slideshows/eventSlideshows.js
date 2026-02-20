function initHomePageSlideshows(){
    showEventSlideshow();
    showEhxibitionSlideshow();
}

function showEventSlideshow(){
   const eventCards =  events.map((element, index) => /*HTML*/`
        <div class="event-container event-img-${element.id} bottom-inset-top-shadow">
            <article class="background-shadow btn-side-padding placement bottom-shadow">
                <h2 class="h3 color-orange">${element.title}</h2>
                <p class="med-paragraph color-white">${element.description}</p>
            </article>
        </div>               
    `).join("")

    document.getElementById('eventSlider').innerHTML = /*HTML*/`
        ${getEventInputs(events, "event-slider", "event-slide")}
        <div class="event-slides">${eventCards}</div>
        <div class="nav-circles hidden-on-desktop">${getEventLabels(events, "event-slide")}</div>
        <div class="arrows hidden-on-mobile">
            <label for="event-slide3" class="arrow prev" aria-label="Previous slide">&#10094;</label>
            <label for="event-slide2" class="arrow next" aria-label="Next slide">&#10095;</label>
            <label for="event-slide1" class="arrow prev" aria-label="Previous slide">&#10094;</label>
            <label for="event-slide3" class="arrow next" aria-label="Next slide">&#10095;</label>
            <label for="event-slide2" class="arrow prev" aria-label="Previous slide">&#10094;</label>
            <label for="event-slide1" class="arrow next" aria-label="Next slide">&#10095;</label>
        </div>
    `;
}

function getEventInputs(list, name, idName){
    let inputs = '';
    for(let i = 0; i < list.length; i++){
        inputs += /*HTML*/`
        <input class="hidden" type="radio" name=${name} id="${idName}${list[i].id}" ${i == 0 ? "checked" : ""}>
        `;
    }
    return inputs;
}

function getEventLabels(list, idName){
    let labels = "";
    for(let i = 0; i < list.length; i++){
        labels += /*HTML*/`
            <label for="${idName}${list[i].id}" class="circle" aria-label="No. ${list[i].id} slide">
                <span></span>
            </label>
            `;
    }
    return labels;           
}

function showEhxibitionSlideshow(){
    const eventCards =  ehxibitionSlideshow.map((element, index) => /*HTML*/`
        <div class="event-container exhibition-slideshow-${element.id} bottom-inset-top-shadow">
            <article class="background-shadow btn-side-padding placement bottom-shadow">
                <h3 class="color-white paragraph italic light">Exhibition tour</h3>
                <h4 class="color-white btn-size remove-margin">${element.title.toUpperCase()}</h4>
            </article>
        </div>              
    `).join("")

    document.getElementById('ehxibition-slideshow').innerHTML = /*HTML*/`
        ${getEventInputs(ehxibitionSlideshow, "exhibition-slider", "exh-slide")}
        <div class="event-slides ehxibition-slideshow">${eventCards}</div>
        <div class="nav-circles">${getEventLabels(ehxibitionSlideshow, "exh-slide")}</div>
    `;
}

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
        ${getEventInputs()}
        <div class="event-slides">${eventCards}</div>
        <div class="nav-circles hidden-on-desktop">${getEventLabels()}</div>
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

function getEventInputs(){
    let inputs = '';
    for(let i = 0; i < events.length; i++){
        inputs += /*HTML*/`
        <input class="hidden" type="radio" name="event-slider" id="event-slide${events[i].id}" checked=${events[i].id == 1 ? "checked" : ""}>
        `;
    }
    return inputs;
}

function getEventLabels(){
    let labels = "";
    for(let i = 0; i < events.length; i++){
        labels += /*HTML*/`
            <label for="event-slide${events[i].id}" class="circle" aria-label="No. ${events[i].id} slide">
                <span></span>
            </label>
            `;
    }
    return labels;           
}
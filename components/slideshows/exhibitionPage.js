function initExhibitionPage() {
  document.getElementById("exhibition-desktop").innerHTML =
    exhibitionsDesktop();
}
initExhibitionPage();

function getExhibitionInputs() {
  let inputs = "";
  for (let i = 0; i < ehxibitionSlideshow.length; i++) {
    inputs += /*HTML*/ `
        <input type="radio" id="${ehxibitionSlideshow[i].init}2" name="exhibitions2" class="hidden exhibition-input" ${i == 0 ? "checked" : ""}>
        `;
  }
  return inputs;
}

function getEventLabels() {
  let labels = "";
  for (let i = 0; i < ehxibitionSlideshow.length; i++) {
    labels += /*HTML*/ `
            <label for="${ehxibitionSlideshow[i].init}2" class="center">
                <span class="btn-size txt-align-center remove-margin">${ehxibitionSlideshow[i].title}</span>
            </label>
            `;
  }
  return labels;
}

function printEventInformation(eventId, list) {
  return /*HTML*/ `
    <div class="side-margin-20">
             ${list
               .map(
                 (item) => /*HTML*/ `
                    <p>${item}</p>
                `,
               )
               .join("")}
            ${upcomingEvent(eventId)}
            ${eventId == null ? `</div>` : ``}
    `;
}

function upcomingEvent(eventId) {
  const findEvent = events.filter((element) => element.id == eventId);
  const event = findEvent[0];
  if (event) {
    return /*HTML*/ `
        <h2 class="h1 color-purple">Upcoming Events</h2>
        </div>
            <div class="event-container event-img-${event.id} bottom-inset-top-shadow side-margin-20">
                <article class="background-shadow btn-side-padding placement bottom-shadow">
                    <h3 class="color-orange">${event.title}</h3>
                    <p class="med-paragraph color-white">${event.description}</p>
                </article>
            </div>
        `;
  }
}

function getEventInputsForExhibition(list, name, idName) {
  let inputs = "";
  for (let i = 0; i < list.length; i++) {
    inputs += /*HTML*/ `
        <input class="hidden" type="radio" name="${name}-slider2" id="${idName}2-slide${i + 1}" ${i == 0 ? "checked" : ""}>
        `;
  }
  return inputs;
}
function createExhibitionCart() {
  return exhibitionData
    .map(
      (element, index) => /*HTML*/ `
       <div class="information-section">
           <article class="exhibition-info flex col gap-1rem-0">
           ${printEventInformation(element.eventId, element.description)}
            <section class="slideshow-container" role="region" aria-label="Cosmology Image Slideshow">
            ${getEventInputsForExhibition(element.slideImg, element.init, element.inputId)}
            <div class="slides" aria-live="polite">  
            ${element.slideImg
              .map(
                (item, index) => /*HTML*/ `
                    <div class="slider-img" role="group" aria-roledescription="slide" aria-label="Slide ${index + 1} of ${element.slideImg.length}">
                        <img src=${item.src} alt=${item.alt} loading="lazy">
                    </div>
                `,
              )
              .join("")}
                </div>                
                <div class="arrows">
                    <label for="${element.inputId}2-slide3" class="arrow prev" aria-label="Previous slide">&#10094;</label>
                    <label for="${element.inputId}2-slide2" class="arrow next" aria-label="Next slide">&#10095;</label>
                    <label for="${element.inputId}2-slide1" class="arrow prev" aria-label="Previous slide">&#10094;</label>
                    <label for="${element.inputId}2-slide3" class="arrow next" aria-label="Next slide">&#10095;</label>
                    <label for="${element.inputId}2-slide2" class="arrow prev" aria-label="Previous slide">&#10094;</label>
                    <label for="${element.inputId}2-slide1" class="arrow next" aria-label="Next slide">&#10095;</label>
                </div>
            </section>
        </article>
    </div>       
    `,
    )
    .join("");
}

function exhibitionsDesktop() {
  return /*HTML*/ `
        <fieldset class="exhibition-layout">
            <legend class="hidden">Explore Our Exhibitions</legend>
            <div class="exhibition-container-desktop">
                ${getExhibitionInputs()}
            <div class="banner-container"><div>${getEventLabels()}</div></div>
            <section class="exhibition-content">${createExhibitionCart()}</section>
        </fieldset>
       
    `;
}

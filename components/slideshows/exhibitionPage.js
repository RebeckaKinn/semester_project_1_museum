function initExhibitionPage() {
    document.getElementById('exhibition-desktop').innerHTML = exhibitionsDesktop();
}
initExhibitionPage();

function getExhibitionInputs() {
    let inputs = '';
    for (let i = 0; i < ehxibitionSlideshow.length; i++) {
        inputs += /*HTML*/`
        <input type="radio" id="${ehxibitionSlideshow[i].init}2" name="exhibitions2" class="hidden exhibition-input" ${i == 0 ? "checked" : ""}>
        `;
    }
    return inputs;
}

function getEventLabels() {
    let labels = "";
    for (let i = 0; i < ehxibitionSlideshow.length; i++) {
        labels += /*HTML*/`
            <label for="${ehxibitionSlideshow[i].init}2" class="center">
                <span class="btn-size txt-align-center remove-margin">${ehxibitionSlideshow[i].title}</span>
            </label>
            `;
    }
    return labels;
}

function exhibitionsDesktop() {
    return /*HTML*/`
    <section id="exhibition-desktop" class="hidden-exhibition-mobile">
                <fieldset class="exhibition-layout">
                    <legend class="hidden">Explore Our Exhibitions</legend>


                    <div class="exhibition-container-desktop">
                        <input type="radio" id="cosmology2" name="exhibitions2" class="hidden exhibition-input" checked="checked">
                        <input type="radio" id="evolution2" name="exhibitions2" class="hidden exhibition-input">
                        <input type="radio" id="biology2" name="exhibitions2" class="hidden exhibition-input">
                        <input type="radio" id="ecology2" name="exhibitions2" class="hidden exhibition-input">
                        <input type="radio" id="robotics2" name="exhibitions2" class="hidden exhibition-input">

                        <div class="banner-container">
                            <div>
                                <label for="cosmology2" class="center">
                                    <span class="btn-size txt-align-center remove-margin">COSMOLOGY</span>
                                </label>

                                <label for="evolution2" class="center">
                                    <span class="btn-size txt-align-center remove-margin">EVOLUTION</span>
                                </label>
    
                                <label for="biology2" class="center">
                                    <span class="btn-size txt-align-center remove-margin">BIOLOGY AND MEDICINE</span>
                                </label>
    

                                <label for="ecology2" class="center">
                                    <span class="btn-size txt-align-center remove-margin">ECOLOGY</span>
                                </label>

    

                                <label for="robotics2" class="center">
                                    <span class="btn-size txt-align-center remove-margin">ROBOTICS AND AI</span>
                                </label>

                            </div>

                        </div>


                        <section class="exhibition-content">

                            <div class="information-section">
                                <article class="exhibition-info flex col gap-1rem-0">

                                    <div class="side-margin-20">
                                        <p>Explore the wonders of our cosmos. Our fantastic exhibition, ‘The Sky Above Us’, explores the night sky and what we can see and know about the universe around us. We’ll locate the various constellations and galaxies that can be seen and learn a bit about the early navigators who used the stars to travel by.</p>
                                        <p>Follow the journey of our solar exploration: from early Arab traders, to Galileo’s telescope, to the latest exploration of the planets in our solar system.</p>
                                        <h2 class="h1 color-purple">Upcoming Events</h2>
                                    </div>
                                    <div class="event-container event-img-1 bottom-inset-top-shadow side-margin-20">
                                        <article class="background-shadow btn-side-padding placement bottom-shadow">
                                            <h3 class="color-orange">Visiting Professor of Aeronautics</h3>
                                            <p class="med-paragraph color-white">It is our pleasure to announce that Prof Sheila Widnall from the Massachusetts Institute of Technology will be delivering 3 lectures on the development of aeronautics and where the future lies in this exciting ‘space’.</p>
                                        </article>
                                    </div>
        
                                    <section class="slideshow-container" role="region" aria-label="Cosmology Image Slideshow">
                                        <input class="hidden" type="radio" name="cosmology-slider2" id="cos2-slide1" aria-hidden="true" checked>
                                        <input class="hidden" type="radio" name="cosmology-slider2" id="cos2-slide2" aria-hidden="true">
                                        <input class="hidden" type="radio" name="cosmology-slider2" id="cos2-slide3" aria-hidden="true">
                                    
                                        <div class="slides" aria-live="polite">
                                            <div class="slider-img" role="group" aria-roledescription="slide" aria-label="Slide 1 of 3">
                                                <img src="img/andrew-ruiz-348421.jpg" alt="A close up image of a statue with an astronaut suit." loading="lazy">
                                            </div>
                                            <div class="slider-img" role="group" aria-roledescription="slide" aria-label="Slide 2 of 3">
                                                <img src="img/planet.jpg" alt="An image of planet earth with the sun shining behind it." loading="lazy">
                                            </div>
                                            <div class="slider-img" role="group" aria-roledescription="slide" aria-label="Slide 3 of 3">
                                                <img src="img/library-1132573_1920.jpg" alt="Area view of the staircase in the library section in the museum." loading="lazy">
                                            </div>
                                        </div>
                                    
                                        <div class="arrows">
                                            <label for="cos2-slide3" class="arrow prev" aria-label="Previous slide">&#10094;</label>
                                            <label for="cos2-slide2" class="arrow next" aria-label="Next slide">&#10095;</label>
                                            <label for="cos2-slide1" class="arrow prev" aria-label="Previous slide">&#10094;</label>
                                            <label for="cos2-slide3" class="arrow next" aria-label="Next slide">&#10095;</label>
                                            <label for="cos2-slide2" class="arrow prev" aria-label="Previous slide">&#10094;</label>
                                            <label for="cos2-slide1" class="arrow next" aria-label="Next slide">&#10095;</label>
                                        </div>
                                    </section>
                                </article>
                            </div>

                            <div class="information-section">
                                <article class="exhibition-info flex col gap-1rem-0">

                                    <div class="side-margin-20">
                                        <p>For centuries, philosophers and scientists have wrestled with the question of our origins. Where do we come from and how did we get here? Since Darwin proposed his theory of evolution we have had a framework for exploring and understanding our place in this world</p>
                                        <p>Discover the origins of life on this planet and how the species we know today have evolved our time. You can also take some time to meet a few of the creatures who didn’t survive, including our Woolly Mammoth, the Dodos, and a number of dinosaurs too.</p>
                                        <h2 class="h1 color-purple">Upcoming Events</h2>
                                    </div>
                                    <div class="event-container event-img-2 bottom-inset-top-shadow side-margin-20">
                                        <article class="background-shadow btn-side-padding placement bottom-shadow">
                                            <h3 class="color-orange">Night in the Museum</h3>
                                            <p class="med-paragraph color-white">Get your family together for an exciting night in the museum as you sleep over beside dinosaurs and science displays. Bring your own sleeping bag and get ready to rough it as we go exploring the wonders of science.</p>
                                        </article>
                                    </div>
        
                                    <section class="slideshow-container">
                                        <input class="hidden" type="radio" name="evolution-slider2" id="evo2-slide1" aria-hidden="true" checked>
                                        <input class="hidden" type="radio" name="evolution-slider2" id="evo2-slide2" aria-hidden="true">
                                        <input class="hidden" type="radio" name="evolution-slider2" id="evo2-slide3" aria-hidden="true">
                                    
                                        <div class="slides" aria-live="polite">
                                            <div class="slider-img" role="group" aria-roledescription="slide" aria-label="Slide 1 of 3">
                                                <img src="img/mammoth-1257288_1920.jpg" alt="An image of a mammoth sceleton inside the museum." loading="lazy">
                                            </div>
                                            <div class="slider-img" role="group" aria-roledescription="slide" aria-label="Slide 2 of 3">
                                                <img src="img/evolution.jpg" alt="Drawn representation of the evolution of man, from ape to human." loading="lazy">
                                            </div>
                                            <div class="slider-img" role="group" aria-roledescription="slide" aria-label="Slide 3 of 3">
                                                <img src="img/toa-heftiba-412579.jpg" alt="An image of a huge whale-skeleton haning from the roof of the main area of the museum." loading="lazy">
                                            </div>
                                        </div>
                                    
                                        <div class="arrows">
                                            <label for="evo2-slide3" class="arrow prev" aria-label="Previous slide">&#10094;</label>
                                            <label for="evo2-slide2" class="arrow next" aria-label="Next slide">&#10095;</label>
                                            <label for="evo2-slide1" class="arrow prev" aria-label="Previous slide">&#10094;</label>
                                            <label for="evo2-slide3" class="arrow next" aria-label="Next slide">&#10095;</label>
                                            <label for="evo2-slide2" class="arrow prev" aria-label="Previous slide">&#10094;</label>
                                            <label for="evo2-slide1" class="arrow next" aria-label="Next slide">&#10095;</label>
                                        </div>
                                    </section>
                                </article>
                            </div>

                            <div class="information-section">
                                <article class="exhibition-info flex col gap-1rem-0">

                                    <div class="side-margin-20">
                                        <p>From micro-organisms to the human body, major breakthroughs in biology are offering us unique insights into the great wonders of the tiny world.</p>
                                        <p>For many people their life expectancy is much longer and their quality of life much improved, thanks to the growth of our understanding of medicine. Over a series of exhibits we explore the history of medicine and take a look at some major breakthroughs including the discovery of penicillin and the first heart transplant.</p>
                                        <p>Many of our great medicinal discoveries have come not only from the lab, but also from observing animals in the wild. Often our fellow creatures have beat us to it.</p>
                                    </div>
                                    <section class="slideshow-container">
                                        <input class="hidden" type="radio" name="biology-slider2" id="bio2-slide1" aria-hidden="true" checked>
                                        <input class="hidden" type="radio" name="biology-slider2" id="bio2-slide2" aria-hidden="true">
                                        <input class="hidden" type="radio" name="biology-slider2" id="bio2-slide3" aria-hidden="true">
                                    
                                        <div class="slides" aria-live="polite">
                                            <div class="slider-img" role="group" aria-roledescription="slide" aria-label="Slide 1 of 3">
                                                <img src="img/heart-2607178_1920.jpg" alt="A close up image of a human heart sculpture." loading="lazy">
                                            </div>
                                            <div class="slider-img" role="group" aria-roledescription="slide" aria-label="Slide 2 of 3">
                                                <img src="img/jesse-orrico-60373.jpg" alt="A close up image of a human head sculpture where the nerves are highlighted." loading="lazy">
                                            </div>
                                            <div class="slider-img" role="group" aria-roledescription="slide" aria-label="Slide 3 of 3">
                                                <img src="img/samuel-zeller-113381.jpg" alt="A statue of a man showing the placements of the intestens." loading="lazy">
                                            </div>
                                        </div>
                                    
                                        <div class="arrows">
                                            <label for="bio2-slide3" class="arrow prev" aria-label="Previous slide">&#10094;</label>
                                            <label for="bio2-slide2" class="arrow next" aria-label="Next slide">&#10095;</label>
                                            <label for="bio2-slide1" class="arrow prev" aria-label="Previous slide">&#10094;</label>
                                            <label for="bio2-slide3" class="arrow next" aria-label="Next slide">&#10095;</label>
                                            <label for="bio2-slide2" class="arrow prev" aria-label="Previous slide">&#10094;</label>
                                            <label for="bio2-slide1" class="arrow next" aria-label="Next slide">&#10095;</label>
                                        </div>
                                    </section>
                                </article>
                            </div>

                            <div class="information-section">
                                <article class="exhibition-info flex col gap-1rem-0">

                                    <div class="side-margin-20">
                                        <p>As we learn more and more of the impact humans are having on the planet, the more important it becomes that scientists explore how to create a sustainable future not just for humans but for the whole planet. In our ecology section of the museum, we unpack the dangers we currently face including global warming, extinction of species, and pollution. But we also focus on the positive ways we can all contribute to a brighter future.</p>
                                        <h2 class="h1 color-purple">Upcoming Events</h2>
                                    </div>
                                    <div class="event-container event-img-3 bottom-inset-top-shadow side-margin-20">
                                        <article class="background-shadow btn-side-padding placement bottom-shadow">
                                            <h3 class="color-orange">Energetica Exhibition on Loan</h3>
                                            <p class="med-paragraph color-white">On loan from the NEMO Science Museum in Amsterdam, the Energetica exhibition is coming to the Community Science Museum. It’s a series of installations that allow visitors to experience the power of the elements as we harness them. From solar energy powering lighting, to ‘Wind Island’ that shows how turbines are able to use and control wind to create power.</p>
                                        </article>
                                    </div>
        
                                    <section class="slideshow-container">
                                        <input class="hidden" type="radio" name="ecology-slider2" id="eco2-slide1" aria-hidden="true" checked>
                                        <input class="hidden" type="radio" name="ecology-slider2" id="eco2-slide2" aria-hidden="true">
                                        <input class="hidden" type="radio" name="ecology-slider2" id="eco2-slide3" aria-hidden="true">
                                    
                                        <div class="slides" aria-live="polite">
                                            <div class="slider-img" role="group" aria-roledescription="slide" aria-label="Slide 1 of 3">
                                                <img src="img/genoa-956405_1920.jpg" alt="Big statue of ants placed by the children exhibition." loading="lazy">
                                            </div>
                                            <div class="slider-img" role="group" aria-roledescription="slide" aria-label="Slide 2 of 3">
                                                <img src="img/planet2.jpg" alt="An illustration of planet earth with windmills, mountains, feilds of grass and glaciers." loading="lazy">
                                            </div>
                                            <div class="slider-img" role="group" aria-roledescription="slide" aria-label="Slide 3 of 3">
                                                <img src="img/people-219985_1280.jpg" alt="A close up image of a man looking into a microscope." loading="lazy">
                                            </div>
                                        </div>
                                    
                                        <div class="arrows">
                                            <label for="eco2-slide3" class="arrow prev" aria-label="Previous slide">&#10094;</label>
                                            <label for="eco2-slide2" class="arrow next" aria-label="Next slide">&#10095;</label>
                                            <label for="eco2-slide1" class="arrow prev" aria-label="Previous slide">&#10094;</label>
                                            <label for="eco2-slide3" class="arrow next" aria-label="Next slide">&#10095;</label>
                                            <label for="eco2-slide2" class="arrow prev" aria-label="Previous slide">&#10094;</label>
                                            <label for="eco2-slide1" class="arrow next" aria-label="Next slide">&#10095;</label>
                                        </div>
                                    </section>
                                </article>
                            </div>

                            <div class="information-section">
                                <article class="exhibition-info flex col gap-1rem-0">

                                    <div class="side-margin-20">
                                        <p>The information revolution is here and robotics and artificial intelligence are the science of the future. From useful home applications of AI to industrial uses of robotics, the future is here. You can even say hello and shake the hand of Rob the Robot.</p>
                                    </div>
                                    <section class="slideshow-container">
                                        <input class="hidden" type="radio" name="robotics-slider2" id="rob2-slide1" aria-hidden="true" checked>
                                        <input class="hidden" type="radio" name="robotics-slider2" id="rob2-slide2" aria-hidden="true">
                                        <input class="hidden" type="radio" name="robotics-slider2" id="rob2-slide3" aria-hidden="true">
                                    
                                        <div class="slides" aria-live="polite">
                                            <div class="slider-img" role="group" aria-roledescription="slide" aria-label="Slide 1 of 3">
                                                <img src="img/bigrobot.jpg" alt="Image of a big robot incased at the museum." loading="lazy">
                                            </div>
                                            <div class="slider-img" role="group" aria-roledescription="slide" aria-label="Slide 2 of 3">
                                                <img src="img/robot.jpg" alt="A close up image of a small robot." loading="lazy">
                                            </div>
                            
                                            <div class="slider-img" role="group" aria-roledescription="slide" aria-label="Slide 3 of 3">
                                                <img src="img/samuel-zeller-158996.jpg" alt="A close up image of a young girl wearning VR-glasses." loading="lazy">
                                            </div>
                                        </div>
                        
                                        <div class="arrows">
                                            <label for="rob2-slide3" class="arrow prev" aria-label="Previous slide">&#10094;</label>
                                            <label for="rob2-slide2" class="arrow next" aria-label="Next slide">&#10095;</label>
                                            <label for="rob2-slide1" class="arrow prev" aria-label="Previous slide">&#10094;</label>
                                            <label for="rob2-slide3" class="arrow next" aria-label="Next slide">&#10095;</label>
                                            <label for="rob2-slide2" class="arrow prev" aria-label="Previous slide">&#10094;</label>
                                            <label for="rob2-slide1" class="arrow next" aria-label="Next slide">&#10095;</label>
                                        </div>
                                    </section>
                                </article>
                            </div>

                        </section>
                    </fieldset>
       
    `;
}


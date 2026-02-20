function header(){
    return /*HTML*/`
     <a href="index.html" class="flex">
                <picture class="logo margin-1rem">
                    <source srcset="img/logo/color-light-logo.svg" media="(min-width: 900px)">
                    <img src="img/logo/light-color-small-logo.svg" alt="Site Logo" loading="lazy">
                  </picture>
            </a>

      
            <nav id="menu" aria-label="Primary navigation">
                <input id="burger-menu" type="checkbox" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="menu-list"/>
                <label for="burger-menu" class="hidden-on-desktop" aria-label="Open menu">
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
      
                <ul class="menu flex col gap-1rem-0 menu-background-svg">
                    <li class="logo hidden-on-desktop">
                        <img 
                            src="img/logo/color-light-logo.svg" 
                            alt=""
                            loading="lazy">
                    </li>
                    <li class="txt-align-right"><a href="index.html">Home</a></li>
                    <li class="txt-align-right"><a href="exhibitions.html">Exhibitions</a></li>
                    <li class="txt-align-right"><a href="contribution.html">Contribution</a></li>
                    <li class="txt-align-right"><a href="contact.html">Contact</a></li>

                    <li class="flex col gap-1rem-0 margin-auto hidden-on-desktop">
                        <a href="document.html"
                            class="button white-btn med-paragraph">Privacy Policy</a>
                        <a href="document.html"
                            class="button white-btn med-paragraph">Terms and Conditions</a>
                            <div class="flex row gap-0-2rem">
                                <a href="https://www.tiktok.com/" target="_blank" class="some-img color-orange" aria-label="Visit TikTok">
                                    <svg aria-hidden="true" width="52" height="58" viewBox="0 0 52 58" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 41.1287V16.7269C0 15.111 0.863332 13.6164 2.26295 12.8076L23.3961 0.606619C24.7958 -0.202206 26.5224 -0.202206 27.922 0.606619L49.0552 12.8076C50.4549 13.6146 51.3182 15.1092 51.3182 16.7269V41.1287C51.3182 42.7446 50.4566 44.2392 49.0552 45.048L27.922 57.249C26.5224 58.0578 24.7958 58.0578 23.3961 57.249L2.26295 45.048C0.863332 44.241 0 42.7464 0 41.1287ZM37.0987 26.8547V22.3868H37.0969C36.3971 22.2673 35.4072 22.0106 34.3557 21.4145C33.2304 20.7762 32.4321 19.9762 31.8888 19.2887C31.4281 18.7032 31.1626 17.9875 31.1327 17.2438L31.0852 16.1061H26.6191V33.6559C26.6262 33.735 26.6262 33.8159 26.6262 33.895C26.6262 36.0191 24.896 37.7492 22.7719 37.7492C20.6479 37.7492 18.9177 36.0208 18.9177 33.895C18.9177 31.7692 20.6479 30.0408 22.7719 30.0408C23.2238 30.0408 23.6581 30.1182 24.0625 30.2641V25.8613C23.6423 25.7945 23.2098 25.7593 22.7719 25.7593C18.2847 25.7593 14.6362 29.4113 14.6362 33.8968C14.6362 38.3822 18.2847 42.0325 22.7719 42.0325C27.2592 42.0325 30.9077 38.3822 30.9077 33.8968C30.9077 33.7121 30.9024 33.531 30.8901 33.3517L30.9077 33.3798V24.3491C31.6233 24.9188 32.7135 25.652 34.1799 26.1901C35.3035 26.6015 36.3162 26.7791 37.0987 26.8547Z" fill="currentColor"/>
                                        </svg>
                                        
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" class="some-img color-orange" aria-label="Visit Instagram">
                                    <svg width="52" height="58" viewBox="0 0 52 58" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 41.1287V16.7269C0 15.111 0.863332 13.6164 2.26295 12.8076L23.3961 0.606619C24.7958 -0.202206 26.5224 -0.202206 27.922 0.606619L49.0552 12.8076C50.4549 13.6146 51.3182 15.1092 51.3182 16.7269V41.1287C51.3182 42.7446 50.4549 44.2392 49.0552 45.048L27.922 57.249C26.5224 58.0578 24.7958 58.0578 23.3961 57.249L2.26295 45.048C0.863332 44.241 0 42.7464 0 41.1287ZM18.0051 14.2564H33.313C37.54 14.2564 40.9811 17.6957 40.9811 21.9244V35.9294C40.9811 40.1564 37.5418 43.5975 33.313 43.5975H18.0051C13.7764 43.5975 10.3354 40.1582 10.3354 35.9294V21.9244C10.3354 17.6975 13.7764 14.2564 18.0051 14.2564ZM18.0051 16.9607C15.2675 16.9607 13.0414 19.1868 13.0414 21.9244V35.9294C13.0414 38.6671 15.2675 40.8932 18.0051 40.8932H33.313C36.0507 40.8932 38.2768 38.6671 38.2768 35.9294V21.9244C38.2768 19.1868 36.0507 16.9607 33.313 16.9607H18.0051ZM25.6591 36.0613C29.5925 36.0613 32.7926 32.8611 32.7926 28.9278C32.7926 24.9944 29.5925 21.7943 25.6591 21.7943C21.7258 21.7943 18.5256 24.9944 18.5256 28.9278C18.5256 32.8611 21.7258 36.0613 25.6591 36.0613ZM25.6591 24.5004C28.1014 24.5004 30.0865 26.4872 30.0865 28.9278C30.0865 31.3683 28.0997 33.3552 25.6591 33.3552C23.2186 33.3552 21.2317 31.3683 21.2317 28.9278C21.2317 26.4872 23.2186 24.5004 25.6591 24.5004ZM35.3773 21.0242C35.3773 22.0845 34.5157 22.946 33.4555 22.946C32.3952 22.946 31.5336 22.0845 31.5336 21.0242C31.5336 19.9639 32.3952 19.1024 33.4555 19.1024C34.5157 19.1024 35.3773 19.9639 35.3773 21.0242Z" fill="currentColor"/>
                                        </svg>
                                        
                                </a>
                                <a href="https://www.facebook.com/" target="_blank" class="some-img color-orange" aria-label="Visit Facebook">
                                    <svg aria-hidden="true" width="52" height="58" viewBox="0 0 52 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.3182 41.1811V16.7018V16.7C51.3182 15.1052 50.4689 13.6318 49.0887 12.8353L27.8904 0.597388C26.5084 -0.199129 24.8081 -0.199129 23.4296 0.597388L2.22954 12.8353C0.851025 13.6335 0 15.1052 0 16.7V41.1793C0 42.7724 0.851025 44.2458 2.22954 45.0423L21.2932 56.0476L23.4296 57.282C24.8098 58.0785 26.5101 58.0785 27.8904 57.282L29.4553 56.3799L49.0887 45.0441C50.4689 44.2458 51.3182 42.7741 51.3182 41.1811ZM29.4553 31.8796V25.9417C29.4553 24.5228 30.6052 23.3711 32.026 23.3711H36.7998V16.4538H29.4922C29.4861 16.4538 29.4795 16.4552 29.4729 16.4565C29.4663 16.4578 29.4597 16.4591 29.4535 16.4591V16.4538C24.947 16.4538 21.2932 20.1076 21.2932 24.6159V31.8796H14.5184V39.8781H21.2932V56.0458L23.4296 57.2802C24.8098 58.0767 26.5101 58.0767 27.8904 57.2802L29.4553 56.3782V39.8781H35.6375L36.7998 31.8796H29.4553Z" fill="currentColor"/>
                                        </svg>
                                        
                                </a>
                            </div>
                    </li>
                </ul>
            </nav>

    `;
}

function setActiveMenu(){
    const links = document.querySelectorAll("#menu a");
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    links.forEach(link => {
        const linkPage = link.getAttribute("href");

        if(linkPage === currentPage){
            link.parentElement.classList.add("color-orange");
        }
    });
}
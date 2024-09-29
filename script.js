document.addEventListener("DOMContentLoaded", function() {
    const togglemenu = document.getElementById("togglemenu");
    const menu = document.getElementById("menu");
    const mainContent = document.getElementById("main-content");
    const videosContainer = document.querySelector(".videos-container");

    // Toggle menu visibility on button click
    togglemenu.addEventListener("click", function() {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    // Hide menu on mouse leave with a delay
    togglemenu.addEventListener("mouseleave", function() {
        setTimeout(function() {
            if (!menu.matches(':hover')) {
                menu.style.display = "none";
            }
        }, 200);
    });

    // Keep menu visible on mouse enter
    menu.addEventListener("mouseenter", function() {
        menu.style.display = "block";
    });

    // Hide menu on mouse leave
    menu.addEventListener("mouseleave", function() {
        menu.style.display = "none";
    });

    // Update main content on menu item click
    menu.addEventListener("click", function(event) {
        event.preventDefault();
        const target = event.target.closest('a[data-category]');
        if (target) {
            const category = target.getAttribute('data-category');
            updateMainContent(category);
            menu.style.display = "none"; // Hide menu after selection
            videosContainer.classList.add('hidden'); // Hide videos on category selection
        }
    });

    function updateMainContent(category) {
        let content = "";
        switch (category) {
            case "lingeries":
                content = "<h2>Lingeries</h2><img class='centraldp' src='Lingeries/começo.jpeg'></br><img class='semidp' src='Lingeries/img1.jpeg'><img class='semidp' src='Lingeries/img2.jpeg'><img class='semidp'src='Lingeries/img3.jpeg'></br></br><img class='centraldp' src='Lingeries/img4.jpeg'></br><img class='semidp'src='Lingeries/img5.jpeg'><img class='semidp'src='Lingeries/img6.jpeg'><img class='semidp'src='Lingeries/img7.jpeg'></br><img class='centraldp' src='Lingeries/img8.jpeg'></br><img class='semidp'src='Lingeries/img9.jpeg'><img class='semidp'src='Lingeries/img10.jpeg'><img class='semidp'src='Lingeries/img11.jpeg'></br><img class='centraldp' src='Lingeries/img12.jpeg'></br><img class='semidp' src='Lingeries/img13.jpeg'><img class='semidp' src='Lingeries/img14.jpeg'><img class='semidp' src='Lingeries/img15.jpeg'></br><img class='centraldp' src='Lingeries/img16.jpeg'></br><img class='semidp' src='Lingeries/img17.jpeg'><img class='semidp' src='Lingeries/img18.jpeg'><img class='semidp' src='Lingeries/img19.jpeg'><img class='semidp' src='Lingeries/img20.jpeg'></br><img 'centraldp' src='Lingeries/img21.jpeg'></br><img class='semidp'src='Lingeries/img22.jpeg'><img class='semidp'src='Lingeries/img23.jpeg'><img class='semidp' src='Lingeries/img24.jpeg'></br><img 'centraldp' src='Lingeries/img25.jpeg'></br><img class='semidp' src='Lingeries/img26.jpeg'><img class='semidp'src='Lingeries/img27.jpeg'><img class='semidp'src='Lingeries/img28.jpeg'></br><img class='centraldp' src='Lingeries/img29.jpeg'></br><img class='semidp' src='Lingeries/img30.jpeg'><img class='semidp'src='Lingeries/img31.jpeg'><img class='semidp'src='Lingeries/img32.jpeg'></br><img class='centraldp' src='Lingeries/img33.jpeg'></br><img class='semidp'src='Lingeries/img34.jpeg'><img class='semidp'src='Lingeries/img35.jpeg'><img class='semidp'src='Lingeries/img36.jpeg'></br><img class='centraldp' src='Lingeries/img37.jpeg'></br><img class='semidp'src='Lingeries/img38.jpeg'><img class='semidp'src='Lingeries/img39.jpeg'><img class='semidp'src='Lingeries/img40.jpeg'></br><img 'centraldp' src='Lingeries/img41.jpeg'></br><img class='semidp'src='Lingeries/img42.jpeg'><img class='semidp'src='Lingeries/img43.jpeg'>";
                break;
            case "Baby Dolls":
                content = "<h2>Baby Dolls</h2><img src='Baby/começo.jpeg'><img src='Baby/1.jpeg'><img src='Baby/2.jpeg'><img src='Baby/3.jpeg'><img src='Baby/4.jpeg'><img src='Baby/5.jpeg'><img src='Baby/6.jpeg'><img src='Baby/7.jpeg'><img src='Baby/8.jpeg'><img src='Baby/9.jpeg'><img src='Baby/10.jpeg'><img src='Baby/11.jpeg'><img src='Baby/12.jpeg'><img src='Baby/13.jpeg'><img src='Baby/14.jpeg'><img src='Baby/15.jpeg'><img src='Baby/16.jpeg'><img src='Baby/17.jpeg'><img src='Baby/18.jpeg'><img src='Baby/19.jpeg'><img src='Baby/20.jpeg'><img src='Baby/21.jpeg'><img src='Baby/22.jpeg'><img src='Baby/23.jpeg'><img src='Baby/24.jpeg'><img src='Baby/25.jpeg'><img src='Baby/26.jpeg'><img src='Baby/27.jpeg'><img src='Baby/28.jpeg'><img src='Baby/29.jpeg'><img src='Baby/30.jpeg'>";
                break;
            case "cremes-lubrificantes":
                content = "<h2>Cremes & Lubrificantes</h2><img src='Cremes/1.jpeg'><img src='Cremes/2.jpeg'><img src='Cremes/3.jpeg'><img src='Cremes/4.jpeg'><img src='Cremes/5.jpeg'><img src='Cremes/6.jpeg'><img src='Cremes/7.jpeg'><img src='Cremes/8.jpeg'><img src='Cremes/9.jpeg'><img src='Cremes/10.jpeg'><img src='Cremes/11.jpeg'><img src='Cremes/12.jpeg'><img src='Cremes/13.jpeg'><img src='Cremes/14.jpeg'><img src='Cremes/15.jpeg'><img src='Cremes/16.jpeg'><img src='Cremes/17.jpeg'><img src='Cremes/18.jpeg'>";
                break;
            case "menuprincipalxd":
                content = "<img src='tst.jpeg' class='imagemloop'>";
                break;
            default:
                content = "<img src='tst.jpeg' class='imagemloop'>";
        }
        mainContent.innerHTML = content;

        // Adicionar classe 'show' à imagem 'lingap' para efeito de fade-in
        if (category === "lingeries") {
            setTimeout(function() {
                const img = document.getElementById('imagem');
                img.classList.add('show');
            }, 100); // Adiciona um pequeno delay para que a imagem apareça suavemente
        }
    }

    // Exibir os vídeos apenas na página inicial
    if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
        videosContainer.classList.remove('hidden');
    } else {
        videosContainer.classList.add('hidden');
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('myVideo');

    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('myvideo');

    // Adiciona um evento de clique ao vídeo
    video.addEventListener('click', function() {
        // Verifica se o vídeo está pausado
        if (video.paused) {
            video.play(); // Reproduz o vídeo se estiver pausado
        } else {
            video.pause(); // Pausa o vídeo se estiver reproduzindo
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('myvideo1');

    // Adiciona um evento de clique ao vídeo
    video.addEventListener('click', function() {
        // Verifica se o vídeo está pausado
        if (video.paused) {
            video.play(); // Reproduz o vídeo se estiver pausado
        } else {
            video.pause(); // Pausa o vídeo se estiver reproduzindo
        }
    });
});
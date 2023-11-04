document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("menu-button").addEventListener("click", function () {
        var menu = document.getElementById("mobile-menu");
        menu.classList.toggle("menu-active");
    });

    // Tambahkan event listener untuk mengarahkan ke halaman "tugas.html"
    document.getElementById("mobile-menu").addEventListener("click", function (e) {
        if (e.target.classList.contains("header-button")) {
            // Dapatkan href dari tombol menu yang diklik
            var href = e.target.getAttribute("href");
            
            // Lakukan pengalihan ke halaman yang sesuai
            window.location.href = href;
        }
    });
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;


    if (name === "") {

        alert("Nama harus diisi.");

        return;

    }


    if (email === "") {

        alert("Email harus diisi.");

        return;

    }


    if (message === "") {

        alert("Pesan harus diisi.");

        return;

    }


    alert("Terima kasih! Pesan Anda berhasil dikirim.");

    contactForm.reset();


});

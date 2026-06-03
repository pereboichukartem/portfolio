// --- МОБІЛЬНЕ МЕНЮ (Гамбургер) ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// --- ФОРМА В ТЕЛЕГРАМ ---
const tgForm = document.getElementById('tg-form');

if (tgForm) {
    const TOKEN = "8893397141:AAG8-tN8GZVy5vmJ-tFUOMbyhLHgf7WlWkU"; 
    const CHAT_ID = "1367650899"; 
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    tgForm.addEventListener('submit', function(e) {
        e.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        let text = `<b>Нове замовлення з сайту!</b>\n\n`;
        text += `<b>Ім'я:</b> ${name}\n`;
        text += `<b>Email:</b> ${email}\n`;
        text += `<b>Повідомлення:</b> ${message}`;

        fetch(URI_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: text,
                parse_mode: 'html'
            })
        })
        .then(res => {
            if(res.ok) {
                alert("Повідомлення успішно відправлено!");
                this.reset();
            } else {
                alert("Сталася помилка. Спробуйте пізніше.");
            }
        })
        .catch(err => {
            console.error(err);
            alert("Помилка відправки.");
        });
    });
}

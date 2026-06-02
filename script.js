const TOKEN = "8893397141:AAG8-tN8GZVy5vmJ-tFUOMbyhLHgf7WlWkU"; 

const CHAT_ID = "1367650899"; 

const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById('tg-form').addEventListener('submit', function(e) {
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

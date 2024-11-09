let userEmail = '';
let msg = '';

function handleSubmit(e) {
    e.preventDefault();

    fetch("https://shragepy.pythonanywhere.com/sendmail/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            my_email: 'contact.me.rohansingh@gmail.com',
            my_password: 'qgnk jhxv zgko uqqe',
            user_email: userEmail,
            msg: msg
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert("Error sending email: " + data.error);
        } else {
            alert("Your response has been recorded!");
        }
    })
    .catch(error => {
        alert("Error sending email: " + error.message);
    });
}
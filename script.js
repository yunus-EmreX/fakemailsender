document.getElementById("email-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const recipientEmail = document.getElementById("recipient-email").value;
    const recipientName = document.getElementById("recipient-name").value;
    const senderEmail = document.getElementById("sender-email").value;
    const senderName = document.getElementById("sender-name").value;
    const emailSubject = document.getElementById("email-subject").value;
    const emailContent = document.getElementById("email-content").value;
    const emailTemplate = document.getElementById("email-template").value;

    // E-posta gönderme işlemleri burada gerçekleştirilebilir

    alert("E-posta başarıyla gönderildi!");
});

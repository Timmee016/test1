/**document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const userName = form.user_name.value;
      const userEmail = form.user_email.value;
      const message = form.message.value;
  
      // Add your EmailJS service, template, and user ID
      const serviceID = "service_c8074xa";
      const templateID = "template_gwbjkvl";
      const userID = "7xwDnmc1ZNWmtG3rx";
  
      // Send email using EmailJS
      emailjs.send(serviceID, templateID, {
        from_name: userName,
        from_email: userEmail,
        message: message,
        to_email: "itacsolution001@gmail.com", // The email you want to send to
      }, userID)
        .then(function(response) {
          console.log("Email sent successfully:", response);
          alert("Your message has been sent successfully!");
          form.reset(); // Reset the form after submission
        })
        .catch(function(error) {
          console.error("Email sending error:", error);
          alert("Oops! Something went wrong. Please try again later.");
        });
    });
  });
  **/

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const userName = form.user_name.value;
      const userEmail = form.user_email.value;
      const message = form.message.value;
  
      const serviceID = "service_c8074xa";
      const templateID = "template_gwbjkvl";
  
      emailjs.send(serviceID, templateID, {
        from_name: userName,
        from_email: userEmail,
        message: message,
        to_email: "itacsolution001@gmail.com",
      })
      .then(function(response) {
        console.log("Email sent successfully:", response);
        alert("Your message has been sent successfully!");
        form.reset();
      })
      .catch(function(error) {
        console.error("Email sending error:", error);
        alert("Oops! Something went wrong. Please try again later.");
      });
    });
  });
  

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
  
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        document.getElementById("response-msg").innerText = "✅ Message envoyé avec succès !";
        form.reset();
      } else {
        document.getElementById("response-msg").innerText = "❌ Une erreur est survenue.";
      }
    });
  });
  
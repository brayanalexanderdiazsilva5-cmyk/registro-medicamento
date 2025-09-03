// Inicializar EmailJS
emailjs.init("GwdThUNaTF87aMoxD");  // ← Tu Public Key

// Función para enviar el medicamento
document.getElementById("form-medicamento").addEventListener("submit", function(e) {
    e.preventDefault();

    const datos = {
        nombre: document.getElementById("medicamento").value,
        cantidad: document.getElementById("cantidad").value,
        lote: document.getElementById("lote").value
    };

    // Enviar email → ¡CON TUS CLAVES REALES!
    emailjs.send(
        "servicio_medicamento",  // ← Tu Service ID ✅
        "template_c8auenq",      // ← Tu Template ID ✅
        {
            medicamento: datos.nombre,
            cantidad: datos.cantidad,
            lote: datos.lote
        }
    )
    .then(() => {
        alert("✅ Medicamento registrado y notificación enviada");
        document.getElementById("form-medicamento").reset();
    })
    .catch(error => {
        alert("❌ Error: " + error);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('curriculoForm');
    const btEnter = document.getElementById('btEnter');
    const btClear = document.getElementById('btClear');
    
    btEnter.addEventListener('click', function(event) {
        event.preventDefault();
        if (validateForm()) {
            submitForm();
        }
    });

    btClear.addEventListener('click', function() {
        clearForm();
    });

    // Função de validação
    function validateForm() {
        let isValid = true;
        const requiredFields = document.querySelectorAll('input[required], textarea[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('invalid');
                isValid = false;
            } else {
                field.classList.remove('invalid');
            }
        });

        if (!isValid) {
            displayMessage('Preencha todos os campos obrigatórios!', 'error');
        }
        return isValid;
    }

    function submitForm() {
        const formData = new FormData(form);

        fetch('/cadastrar_curriculo/', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRFToken': getCSRFToken()
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ao enviar formulário');
            }
        })
        .then(data => {
            displayMessage('Formulário enviado com sucesso!', 'success');
            form.reset();
        })
        .catch(error => {
            displayMessage('Erro: ' + error.message, 'error');
        });
    }

    function clearForm() {
        form.reset();
        displayMessage('Formulário limpo!', 'info');
    }

    function displayMessage(message, type) {
        const messageBox = document.getElementById('messageBox');
        messageBox.textContent = message;
        messageBox.className = type;
        messageBox.style.display = 'block';

        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 3000);
    }

    function getCSRFToken() {
        let csrfToken = null;
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
            const [name, value] = cookie.trim().split('=');
            if (name === 'csrftoken') {
                csrfToken = value;
            }
        });
        return csrfToken;
    }
});

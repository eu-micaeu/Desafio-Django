const csrftoken = document.querySelector('[name=csrf-token]').content;

const clearFields = () => {
    const fields = [
        'nome', 'sobrenome', 'dataDeNascimento', 'email', 'telefone', 'endereco',
        'cargo', 'empresa', 'dataDeInicio', 'dataDeTermino', 'descricao',
        'instituicao', 'curso', 'dataDeInicioCurso', 'dataDeTerminoCurso'
    ];
    fields.forEach(fieldId => {
        document.getElementById(fieldId).value = '';
        removeError(fieldId);
    });
};

const removeError = (fieldId) => {
    const field = document.getElementById(fieldId);
    field.classList.remove('error');
    const errorElement = field.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.remove();
    }
};

const addError = (fieldId, message) => {
    const field = document.getElementById(fieldId);
    field.classList.add('error');

    if (!field.nextElementSibling || !field.nextElementSibling.classList.contains('error-message')) {
        const errorMessage = document.createElement('span');
        errorMessage.textContent = message;
        errorMessage.classList.add('error-message');
        field.parentElement.appendChild(errorMessage);
    }
};

const validateFields = (data) => {
    let isValid = true;
    Object.keys(data).forEach(key => {
        if (data[key].trim() === '') {
            addError(key, 'Este campo é obrigatório');
            isValid = false;
        } else {
            removeError(key);
        }
    });
    return isValid;
};

const postData = (url, data) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
};

document.getElementById("btEnter").addEventListener("click", () => {
    const dataPessoais = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        dataDeNascimento: document.getElementById('dataDeNascimento').value
    };

    const contato = {
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        endereco: document.getElementById('endereco').value
    };

    const experienciaProfissional = {
        cargo: document.getElementById('cargo').value,
        empresa: document.getElementById('empresa').value,
        dataDeInicio: document.getElementById('dataDeInicio').value,
        dataDeTermino: document.getElementById('dataDeTermino').value,
        descricao: document.getElementById('descricao').value
    };

    const formacaoAcademica = {
        instituicao: document.getElementById('instituicao').value,
        curso: document.getElementById('curso').value,
        dataDeInicioCurso: document.getElementById('dataDeInicioCurso').value,
        dataDeTerminoCurso: document.getElementById('dataDeTerminoCurso').value
    };

    if (
        validateFields(dataPessoais) &&
        validateFields(contato) &&
        validateFields(experienciaProfissional) &&
        validateFields(formacaoAcademica)
    ) {
        Promise.all([
            postData('http://127.0.0.1:8000/api/dados-pessoais/', dataPessoais),
            postData('http://127.0.0.1:8000/api/contato/', contato),
            postData('http://127.0.0.1:8000/api/experiencia-profissional/', experienciaProfissional),
            postData('http://127.0.0.1:8000/api/formacao-academica/', formacaoAcademica)
        ]).then(responses => {
            console.log('Success:', responses);
            alert('Currículo cadastrado com sucesso!');
            clearFields();
        }).catch(error => console.error('Error:', error));
    } else {
        alert('Por favor, preencha todos os campos wobrigatórios.');
    }
});

document.getElementById("btClear").addEventListener("click", clearFields);

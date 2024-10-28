const csrftoken = document.querySelector('[name=csrf-token]').content;

const clearFields = () => {
    const fields = [
        'nome', 'sobrenome', 'dataDeNascimento', 'email', 'telefone', 'endereco',
        'cargo', 'empresa', 'dataDeInicio', 'dataDeTermino', 'descricao',
        'instituicao', 'curso', 'dataDeInicioCurso', 'dataDeTerminoCurso'
    ];
    fields.forEach(fieldId => document.getElementById(fieldId).value = '');
};

const validateFields = (data) => {
    return Object.values(data).every(value => value.trim() !== '');
};

const postData = (url, data) => {
    if (validateFields(data)) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify(data)
        }).then(response => response.json());
    } else {
        console.error('Todos os campos devem estar preenchidos');
        return Promise.reject('Campos em branco');
    }
};

document.getElementById("btEnter").addEventListener("click", () => {
    const dataPessoais = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        data_de_nascimento: document.getElementById('dataDeNascimento').value
    };

    const contato = {
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        endereco: document.getElementById('endereco').value
    };

    const experienciaProfissional = {
        cargo: document.getElementById('cargo').value,
        empresa: document.getElementById('empresa').value,
        data_inicio: document.getElementById('dataDeInicio').value,
        data_fim: document.getElementById('dataDeTermino').value,
        descricao: document.getElementById('descricao').value
    };

    const formacaoAcademica = {
        instituicao: document.getElementById('instituicao').value,
        curso: document.getElementById('curso').value,
        data_inicio: document.getElementById('dataDeInicioCurso').value,
        data_fim: document.getElementById('dataDeTerminoCurso').value
    };

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
});

document.getElementById("btClear").addEventListener("click", clearFields);

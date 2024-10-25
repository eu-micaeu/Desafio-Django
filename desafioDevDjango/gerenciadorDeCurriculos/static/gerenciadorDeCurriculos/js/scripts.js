const csrftoken = document.querySelector('[name=csrf-token]').content;

document.getElementById("btEnter").addEventListener("click", function(){

    var nome = document.getElementById('nome');
    var sobrenome = document.getElementById('sobrenome');
    var dataDeNascimento = document.getElementById('dataDeNascimento');

    fetch('http://127.0.0.1:8000/api/dados-pessoais/', {

        method: 'POST',

        headers: {

            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },

        body: JSON.stringify({

            nome: nome.value,

            sobrenome: sobrenome.value,

            data_de_nascimento: dataDeNascimento.value

        })

    })

    .then(response => response.json())

    .then(data => {

        console.log('Success:', data);

    });

    var email = document.getElementById('email');
    var telefone = document.getElementById('telefone');
    var endereco = document.getElementById('endereco');

    fetch('http://127.0.0.1:8000/api/contato/', {

        method: 'POST',

        headers: {

            'Content-Type': 'application/json',

            'X-CSRFToken': csrftoken

        },

        body: JSON.stringify({

            email: email.value,

            telefone: telefone.value,

            endereco: endereco.value

        })

    })

    .then(response => response.json())

    .then(data => {

        console.log('Success:', data);
        
    });

    var cargo = document.getElementById('cargo');
    var empresa = document.getElementById('empresa');
    var dataDeInicio = document.getElementById('dataDeInicio');
    var dataDeTermino = document.getElementById('dataDeTermino');
    var descricao = document.getElementById('descricao');

    fetch('http://127.0.0.1:8000/api/experiencia-profissional/', {

        method: 'POST',

        headers: {

            'Content-Type': 'application/json',

            'X-CSRFToken': csrftoken

        },

        body: JSON.stringify({

            cargo: cargo.value,

            empresa: empresa.value,

            data_inicio: dataDeInicio.value,

            data_fim: dataDeTermino.value,

            descricao: descricao.value

        })

    })

    .then(response => response.json())

    .then(data => {

        console.log('Success:', data);
        
    });

    var instituicao = document.getElementById('instituicao');
    var curso = document.getElementById('curso');
    var dataDeInicioCurso = document.getElementById('dataDeInicioCurso');
    var dataDeTerminoCurso = document.getElementById('dataDeTerminoCurso');

    fetch('http://127.0.0.1:8000/api/formacao-academica/', {

        method: 'POST',

        headers: {

            'Content-Type': 'application/json',

            'X-CSRFToken': csrftoken

        },

        body: JSON.stringify({

            instituicao: instituicao.value,

            curso: curso.value,

            data_inicio: dataDeInicioCurso.value,

            data_fim: dataDeTerminoCurso.value

        })

    })

    .then(response => response.json())

    .then(data => {

        console.log('Success:', data);
        
    });

    alert('Currículo cadastrado com sucesso!');

    nome.value = '';
    sobrenome.value = '';
    dataDeNascimento.value = '';
    email.value = '';
    telefone.value = '';
    endereco.value = '';
    cargo.value = '';
    empresa.value = '';
    dataDeInicio.value = '';
    dataDeTermino.value = '';
    descricao.value = '';
    instituicao.value = '';
    curso.value = '';
    dataDeInicioCurso.value = '';
    dataDeTerminoCurso.value = '';

});


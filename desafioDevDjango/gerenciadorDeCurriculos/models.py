from django.db import models
from django.core.validators import RegexValidator, EmailValidator

# Create your models here.
class DadosPessoais(models.Model):
    # Dados pessoais
    nome = models.CharField(max_length=100)
    sobrenome = models.CharField(max_length=100)
    data_de_nascimento = models.DateField()

    def __str__(self):
        return f"{self.nome} {self.sobrenome}"

class Contato(models.Model):
    # Contato
    email = models.EmailField(validators=[EmailValidator()])
    telefone = models.CharField(
        max_length=15,
        validators=[RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Digite um número de telefone válido.")]
    )
    endereco = models.CharField(max_length=255)
    dados_pessoais = models.OneToOneField(DadosPessoais, on_delete=models.CASCADE, related_name='contato')

    def __str__(self):
        return f"Contato de {self.dados_pessoais.nome}"

class ExperienciaProfissional(models.Model):
    # Experiência profissional
    cargo = models.CharField(max_length=100)
    empresa = models.CharField(max_length=100)
    data_inicio = models.DateField()
    data_fim = models.DateField(null=True, blank=True)
    descricao = models.TextField()
    dados_pessoais = models.ForeignKey(DadosPessoais, on_delete=models.CASCADE, related_name='experiencias')

    def __str__(self):
        return f"{self.cargo} na {self.empresa}"

class FormacaoAcademica(models.Model):
    # Formação acadêmica
    instituicao = models.CharField(max_length=100)
    curso = models.CharField(max_length=100)
    data_inicio = models.DateField()
    data_fim = models.DateField(null=True, blank=True)
    dados_pessoais = models.ForeignKey(DadosPessoais, on_delete=models.CASCADE, related_name='formacao')

    def __str__(self):
        return f"{self.curso} - {self.instituicao}"

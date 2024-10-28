from django.test import TestCase
from datetime import datetime, date
from .models import DadosPessoais, ExperienciaProfissional, FormacaoAcademica

class DadosPessoaisModelTest(TestCase):
    
    def setUp(self):
        # Configuração inicial do teste, criando um objeto de DadosPessoais
        self.dados_pessoais = DadosPessoais.objects.create(
            nome="João", sobrenome="Silva", data_de_nascimento="1990-01-01"
        )

    def test_dados_pessoais_criados_corretamente(self):
        # Testa se a data de nascimento foi criada corretamente
        data_nascimento = datetime.strptime(self.dados_pessoais.data_de_nascimento, "%Y-%m-%d").date()
        self.assertEqual(data_nascimento, date(1990, 1, 1))

    def test_representacao_em_string(self):
        # Testa a representação em string do objeto DadosPessoais
        self.assertEqual(str(self.dados_pessoais), "João Silva")


class ExperienciaProfissionalModelTest(TestCase):

    def setUp(self):
        # Configuração inicial do teste, criando um objeto de ExperienciaProfissional
        self.experiencia_profissional = ExperienciaProfissional.objects.create(
            cargo="Desenvolvedor", 
            empresa="Tech Corp", 
            data_inicio="2020-01-01", 
            data_fim="2022-01-01", 
            descricao="Desenvolvimento de sistemas web"
        )

    def test_experiencia_profissional_criada_corretamente(self):
        # Testa se as datas de início e fim foram criadas corretamente
        data_inicio = datetime.strptime(self.experiencia_profissional.data_inicio, "%Y-%m-%d").date()
        data_fim = datetime.strptime(self.experiencia_profissional.data_fim, "%Y-%m-%d").date()
        self.assertEqual(data_inicio, date(2020, 1, 1))
        self.assertEqual(data_fim, date(2022, 1, 1))

    def test_representacao_em_string(self):
        # Testa a representação em string do objeto ExperienciaProfissional
        self.assertEqual(str(self.experiencia_profissional), "Desenvolvedor na Tech Corp")


class FormacaoAcademicaModelTest(TestCase):

    def setUp(self):
        # Configuração inicial do teste, criando um objeto de FormacaoAcademica
        self.formacao_academica = FormacaoAcademica.objects.create(
            instituicao="Universidade X", 
            curso="Engenharia de Software", 
            data_inicio="2015-01-01", 
            data_fim="2019-12-31"
        )

    def test_formacao_academica_criada_corretamente(self):
        # Testa se as datas de início e fim foram criadas corretamente
        data_inicio = datetime.strptime(self.formacao_academica.data_inicio, "%Y-%m-%d").date()
        data_fim = datetime.strptime(self.formacao_academica.data_fim, "%Y-%m-%d").date()
        self.assertEqual(data_inicio, date(2015, 1, 1))
        self.assertEqual(data_fim, date(2019, 12, 31))

    def test_representacao_em_string(self):
        # Testa a representação em string do objeto FormacaoAcademica
        self.assertEqual(str(self.formacao_academica), "Engenharia de Software - Universidade X")

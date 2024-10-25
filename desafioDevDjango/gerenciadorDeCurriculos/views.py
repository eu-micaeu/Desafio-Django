from rest_framework import viewsets
from .models import DadosPessoais, Contato, ExperienciaProfissional, FormacaoAcademica
from .serializers import DadosPessoaisSerializer, ContatoSerializer, ExperienciaProfissionalSerializer, FormacaoAcademicaSerializer

class DadosPessoaisViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gerenciar os dados pessoais.
    """
    queryset = DadosPessoais.objects.all()
    serializer_class = DadosPessoaisSerializer

class ContatoViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gerenciar os contatos.
    """
    queryset = Contato.objects.all()
    serializer_class = ContatoSerializer

class ExperienciaProfissionalViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gerenciar as experiências profissionais.
    """
    queryset = ExperienciaProfissional.objects.all()
    serializer_class = ExperienciaProfissionalSerializer

class FormacaoAcademicaViewSet(viewsets.ModelViewSet):
    """
    ViewSet para gerenciar as formações acadêmicas.
    """
    queryset = FormacaoAcademica.objects.all()
    serializer_class = FormacaoAcademicaSerializer

# Páginas de visualização

from django.shortcuts import render

def index(request):
    return render(request, 'gerenciadorDeCurriculos/index.html')
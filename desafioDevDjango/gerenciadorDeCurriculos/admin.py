from django.contrib import admin
from .models import DadosPessoais, Contato, ExperienciaProfissional, FormacaoAcademica

admin.site.register(DadosPessoais)
admin.site.register(Contato)
admin.site.register(ExperienciaProfissional)
admin.site.register(FormacaoAcademica)
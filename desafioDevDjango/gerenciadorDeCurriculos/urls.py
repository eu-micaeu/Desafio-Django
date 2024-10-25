from rest_framework.routers import DefaultRouter
from .views import DadosPessoaisViewSet, ContatoViewSet, ExperienciaProfissionalViewSet, FormacaoAcademicaViewSet

router = DefaultRouter()
router.register(r'dados-pessoais', DadosPessoaisViewSet)
router.register(r'contato', ContatoViewSet)
router.register(r'experiencia-profissional', ExperienciaProfissionalViewSet)
router.register(r'formacao-academica', FormacaoAcademicaViewSet)

urlpatterns = router.urls

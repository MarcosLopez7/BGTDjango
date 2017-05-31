from django.conf.urls import url, include

from .views import enviar_contacto, enviado

urlpatterns = [
    url(r'^enviado/$', enviado, name='enviado'),
    url(r'^$', enviar_contacto, name='index'),
]
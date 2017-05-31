from django.db import models

# Create your models here.
class Contacto(models.Model):
    nombre = models.CharField(max_length=35)
    apellido = models.CharField(max_length=35)
    email = models.CharField(max_length=80)
    comentario = models.TextField()

    def __str__(self):
        return self.nombre + " " + self.apellido
from django import forms

from .models import Contacto

class ContactoForm(forms.ModelForm):
    nombre = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Nombre'}))
    apellido = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Apellido'}))
    email = forms.CharField(widget=forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Email'}))
    comentario = forms.CharField(widget=forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Comentario'}))

    class Meta:
        model = Contacto
        fields = ['nombre', 'apellido', 'email', 'comentario']

from django.conf import settings
from django.core.mail import send_mail
from django.shortcuts import render, redirect

from .forms import ContactoForm


def enviado(request):

    context = {
        'title': 'Contacto enviado',
        'message': 'Gracias por contactarnos, en pronto le enviaremos nuestra respuesta'
    }

    return render(request, 'contacto/letrero.html', context=context)

def enviar_contacto(request):

    if request.method == 'POST':
        form = ContactoForm(request.POST or None)

        if form.is_valid():
            instance = form.save(commit=False)
            instance.save()

            subject = 'Contacto de ' + instance.nombre + ' ' + instance.apellido
            message = instance.nombre + ' ' + instance.apellido + ' con email: ' + instance.email + '\n\n' \
                        + instance.comentario

            from_email = settings.EMAIL_HOST_USER
            to_list = ['marcos.lopez@bytesandgears.com', 'isaac.gonzalez@bytesandgears.com']

            send_mail(subject, message, from_email, to_list)

            return redirect('/contacto/enviado/')

        else:
            return render(request, 'contacto/index.html', {'form': form})

    form = ContactoForm()
    return render(request, 'contacto/index.html', {'form': form})

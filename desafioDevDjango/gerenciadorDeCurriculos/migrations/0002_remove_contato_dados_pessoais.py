# Generated by Django 5.1.2 on 2024-10-25 06:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gerenciadorDeCurriculos', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contato',
            name='dados_pessoais',
        ),
    ]

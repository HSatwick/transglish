# Generated by Django 2.1.3 on 2018-11-16 23:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sentences', '0002_auto_20181116_1832'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sentences',
            name='language',
            field=models.CharField(max_length=100),
        ),
    ]

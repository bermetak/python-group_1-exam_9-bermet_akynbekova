# Generated by Django 2.2 on 2019-04-06 10:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='itemimage',
            name='image',
            field=models.ImageField(default='/images/default.jpg', upload_to='images'),
        ),
    ]

from django.db import models
from django.contrib.auth.models import User


class SoftDeleteManager(models.Manager):
    def active(self):
        return self.filter(is_deleted=False)

    def deleted(self):
        return self.filter(is_deleted=True)


class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=2000, null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'

class Item(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=2000, null=True, blank=True)
    arrive_date = models.DateField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    categories = models.ManyToManyField('Category', related_name='items', blank=True)
    is_deleted = models.BooleanField(default=False)

    objects = SoftDeleteManager()

    def __str__(self):
        return self.name

class ItemImage(models.Model):
    item = models.ForeignKey('Item', related_name='images', on_delete=models.PROTECT)
    image = models.ImageField(upload_to='images', default='/images/default.img')

class Order(models.Model):
    user = models.ForeignKey(User, related_name='orders', on_delete=models.PROTECT)
    items = models.ForeignKey('Item', related_name='order', on_delete=models.PROTECT)
    phone = models.CharField(max_length=255)
    address = models.CharField(max_length=500, null=True, blank=True)
    comment = models.TextField(max_length=2000, null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    is_deleted = models.BooleanField(default=False)

    objects = SoftDeleteManager()

    def __str__(self):
        return 'Order for: %s, Items: %s' % (self.user, self.items)
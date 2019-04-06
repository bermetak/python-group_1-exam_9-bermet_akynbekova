from django.contrib import admin
from webapp.models import Category, Item, ItemImage, Order


class ItemAdmin(admin.ModelAdmin):
    list_display = ['pk', 'name', 'arrive_date']
    ordering = ['pk']
    search_fields = ['name', 'id']

admin.site.register(Item, ItemAdmin)


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['pk', 'name']
    ordering = ['name']
    search_fields = ['name', 'id']

admin.site.register(Category, CategoryAdmin)


class ItemImageAdmin(admin.ModelAdmin):
    list_display = ['pk', 'item']
    ordering = ['pk']
    search_fields = ['item', 'id']

admin.site.register(ItemImage, ItemImageAdmin)

class OrderAdmin(admin.ModelAdmin):
    list_display = ['pk', 'user', 'phone', 'date']
    ordering = ['-date']
    search_fields = ['user', 'id']

admin.site.register(Order, OrderAdmin)
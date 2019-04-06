from webapp.models import Category, Item, ItemImage, Order
from rest_framework import serializers
from django.contrib.auth.models import User


class CategorySerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:category-detail')

    class Meta:
        model = Category
        fields = ('url', 'id', 'name', 'description')


class InlineCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')


class InlineItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id', 'name')


class ItemImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemImage
        fields = ('id', 'image', 'item')


class ItemSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:item-detail')
    categories = InlineCategorySerializer(many=True, read_only=True)
    images = ItemImageSerializer(many=True, read_only=True)

    class Meta:
        model = Item
        fields = ('url', 'id', 'name', 'description', 'images', 'arrive_date', 'price', 'categories')


class OrderSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:order-detail')
    # items = InlineItemsSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = ('url', 'id', 'user', 'phone', 'items', 'address', 'comment', 'date')


from webapp.models import Item, ItemImage, Category, Order
from rest_framework import viewsets
from api_v1.serializers import ItemSerializer, CategorySerializer, OrderSerializer, ItemImageSerializer


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all().order_by('arrive_date')
    serializer_class = ItemSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('name')
    serializer_class = CategorySerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all().order_by('id')
    serializer_class = OrderSerializer

class ItemImageViewSet(viewsets.ModelViewSet):
    queryset = ItemImage.objects.all().order_by('id')
    serializer_class = ItemImageSerializer

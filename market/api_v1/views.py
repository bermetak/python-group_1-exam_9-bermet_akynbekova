from webapp.models import Item, ItemImage, Category, Order
from rest_framework import viewsets
from api_v1.serializers import ItemSerializer, CategorySerializer, OrderSerializer, ItemImageSerializer, \
    AuthTokenSerializer
from rest_framework.authtoken.views import ObtainAuthToken, APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token


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

class TokenLoginView(APIView):
    serializer_class = AuthTokenSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        token = serializer.validated_data['token']
        user = token.user
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'username': user.username,
            'is_admin': user.is_superuser,
            'is_staff': user.is_staff
        })

class LoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'username': user.username,
            'user_id': user.id,
            'is_admin': user.is_superuser,
            'is_staff': user.is_staff
        })
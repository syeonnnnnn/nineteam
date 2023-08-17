from django.urls import path
from . import views
from .views import ebooks, product

app_name = 'ebooksapp'

urlpatterns = [
    path('main/', ebooks, name='ebooks'),
    path('product/', product, name='product'),
]

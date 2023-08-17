from django.shortcuts import render

# Create your views here.

def ebooks(request):
    return render(request, 'ebooksapp/index.html')

def product(request):
    return render(request, 'ebooksapp/product.html')
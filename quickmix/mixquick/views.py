from django.shortcuts import render

def index(request):
    return render(request, 'mixquick/index.html')

def random(request):
    return render(request, 'mixquick/randomDrink.html')
from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.contrib import auth
from django.contrib.auth import authenticate, login

def index(request):
    return render(request, 'mixquick/index.html')

def random(request):
    return render(request, 'mixquick/randomDrink.html')

def searchDrink(request):
    return render(request, 'mixquick/Search.html')

def profile(request):
    return render(request, 'mixquick/profile.html')

def fullList(request):
    return render(request, 'mixquick/List of drinks.html')

def loginV(request):
    if request.user.is_authenticated():
        return redirect('home')
    
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
    return render(request, 'registration/login.html')


def logout(request):
    if request.user.is_authenticated():
        auth.logout(request)
        return redirect('home')
    
    if not request.user.is_authenticated():
        return redirect('home')
    return render(request, 'registration/login.html')


def register(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(username=username, password=password)
            login(request, user)
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(request, 'registration/register.html', {'form': form})

    
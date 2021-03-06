from django.urls import path
from django.conf.urls import url, include
from django.contrib import admin
from . import views 
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('', views.index, name='home'),
    path('random/', views.random, name='random'),
    path('search/', views.searchDrink, name='search'),
    path('login/', views.loginV, name='login'),
    path('logout/', views.logout, name='logout'),
    path('register/', views.register, name='register'),
    path('fullList/', views.fullDrink, name='fullList'),
    path('profile/', views.profile, name='profile'),
]

urlpatterns += staticfiles_urlpatterns()


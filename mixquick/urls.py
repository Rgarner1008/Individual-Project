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
    path('profile/', views.profile, name='profile'),
    path('fulllist/', views.fullList, name='fullList'),
]


urlpatterns += staticfiles_urlpatterns()


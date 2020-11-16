from django.urls import path
from django.conf.urls import url, include
from django.contrib import admin
from . import views 
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('', views.index),
    path('random/', views.random),
]

urlpatterns += staticfiles_urlpatterns()


from django.contrib import admin
from django.urls import include, path
from neighbourSwapApp import views

urlpatterns = [
    path('', views.index ),
    # path('signup/', views.signup_view, name='signup'),
    # path('login/', views.login_view, name='login'),
    # path('logout/', views.logout_view, name='logout'),
]
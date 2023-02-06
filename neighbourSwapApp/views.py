# from django.shortcuts import render, redirect
from django.shortcuts import get_object_or_404
from django.http import HttpRequest, HttpResponse, HttpResponseRedirect, JsonResponse, Http404, HttpResponseBadRequest
from django.contrib import auth
from django.contrib.auth.decorators import login_required
# from .forms import LoginForm, SignupForm
from .models import User, Request, NegotiatedMonetaryValue, NegotiatedStringValue
# from django.db.models import Q
# from django.core.mail import BadHeaderError, send_mail
from datetime import datetime
import json

app_name = 'neighbourSwapApp'

def index(request: HttpRequest) -> HttpResponse:
    return HttpResponse("Hello world")

# def signup_view(request: HttpRequest) -> HttpResponse:
#     '''
#     Signup function
#     Users creating an account
#     '''

#     form = SignupForm()

#     if request.method == 'POST':
#         form = SignupForm(request.POST)
#         if form.is_valid():
#             # username validation
#             username = form.cleaned_data['username']

#             if not username:
#                 form.add_error('username', 'Please choose a username')
#                 return render(request, 'auctionApp/auth/signup.html', {'form': form})

#             if User.objects.filter(username=username).exists():
#                 form.add_error('username', 'Username already exists')
#                 return render(request, 'auctionApp/auth/signup.html', {'form': form})

#             # password validation
#             if form.cleaned_data['password'] != form.cleaned_data['password_confirm']:
#                 form.add_error('password', 'Passwords to not match')
#                 form.add_error('password_confirm', 'Passwords to not match')
#                 return render(request, 'auctionApp/auth/signup.html', {'form': form})

#             password = form.cleaned_data['password']

#             #email validation
#             email = form.cleaned_data['email']
#             if not email:
#                 form.add_error('email', 'Please provide an email')
#                 return render(request, 'auctionApp/auth/signup.html', {'form': form})

#             #city validation
#             city = form.cleaned_data['city']
#             if not city:
#                 form.add_error('city', 'Please provide a city')
#                 return render(request, 'auctionApp/auth/signup.html', {'form': form})

#             # date of birth validation
#             date_of_birth = form.cleaned_data['date_of_birth']
#             if not date_of_birth:
#                 form.add_error('date_of_birth', 'Please provide a date of birth')
#                 return render(request, 'auctionApp/auth/signup.html', {'form': form})

#             # create a new user
#             new_user = User.objects.create(username=username)
#             # set user's details
#             new_user.set_password(password)
#             new_user.city = city
#             new_user.email = email
#             new_user.date_of_birth = date_of_birth
#             new_user.save()
#             # authenticate user
#             # establishes a session, will add user object as attribute
#             # on request objects, for all subsequent requests until logout
#             user = auth.authenticate(username=username, password=password)
#             if user is not None:
#                 auth.login(request, user)
#                 return redirect('auctionApp:home')

#     return render(request, 'auctionApp/auth/signup.html', {'form': SignupForm})


# def login_view(request: HttpRequest) -> HttpResponse:
#     '''
#     Login function
#     Users logging into the app
#     '''

#     form = LoginForm()

#     if request.method == 'POST':
#         form = LoginForm(request.POST)
#         if form.is_valid():
#             username = form.cleaned_data['username']
#             password = form.cleaned_data['password']
#             user = auth.authenticate(username=username, password=password)
#             if user is not None:
#                 auth.login(request, user)
#                 return redirect('http://localhost:8001/')

#             # failed authentication
#             form.add_error('username', 'Invalid credentials')
#             form.add_error('password', 'Invalid credentials')
#             return render(request, 'auctionApp/auth/login.html', {'form': form})

#     return render(request, 'auctionApp/auth/login.html', {'form': form})


# @login_required
# def logout_view(request: HttpRequest) -> HttpResponse:
#     '''
#     Once users logout they are redirected to login page
#     '''

#     auth.logout(request)
#     return redirect('neighbourSwappApp:login')


# def check_user_authenticated(request: HttpRequest) -> HttpResponse:
#     '''
#     Checks if user is authenticated -- returns user details as a dictionary if they are
#     '''
#     if request.method == 'GET':
#         if request.user.is_authenticated:
#             return JsonResponse(request.user.to_dict())
#         return HttpResponse("Unauthourised", status=401)
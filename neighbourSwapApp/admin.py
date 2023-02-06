from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Request, NegotiatedMonetaryValue, NegotiatedStringValue

admin.site.register(Request)

admin.site.register(NegotiatedMonetaryValue)

admin.site.register(NegotiatedStringValue)
# Poopoo
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['id', 'username', 'email', 'date_of_birth', 'image' ]
    ordering = ['id']

# @admin.register(Item)
# class Admin(admin.ModelAdmin):
#     list_display = ['id', 'name', 'starting_price', 'description', 'date_posted', 'image', 'user', 'expiry_date']
#     ordering = ['id']

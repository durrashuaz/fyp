from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone
import datetime

class User(AbstractUser):
    ''' A model that stores a user's details '''

    username = models.CharField(max_length=50, unique=True)
    full_name = models.CharField(max_length=100)
    email = models.EmailField( max_length=254 )
    date_of_birth = models.DateField('Date of Birth', auto_now=True, null=True)
    image = models.ImageField(upload_to='assets/', blank=True)
    # location = models.CharField(max_length=50)
    # response = models.ManyToManyField(
    #     to=Request,
    #     blank=True,
    #     symmetrical=False,
    #     through = "Activity",
    #     related_name='user_responds_to_request',
    # )

    # REQUIRED_FIELDS = []

    def __str__(self):
        return self.username

    def to_dict(self):
        return {
            'id': self.id,
            'full_name': self.full_name,
            'username': self.username,
            'email': self.email,
            'date_of_birth': self.date_of_birth,
            'image': self.image.url if self.image else None,
        }


class Request(models.Model):
    ''' A model  that stores details of a request and is associated with a User
    '''
    product_type = models.CharField(
        choices=[('item', 'Item'),('service', 'Service'),],
        max_length=7,
        default='item'
    )
    product_name = models.CharField(max_length=50, unique=True)
    time = models.DateTimeField(auto_now_add=True,)
    # waiting_duration= models.DurationField()
    # waiting_duration= datetime.timedelta(minutes=15)
    # pick_up_time = models.DateTimeField('Pick Up Time')
    # make a time for the request to end, calculated by current time + waiting duration
    # request_end_time = self.request_end_time
    # request_location =
    # selected_radius = which field should this be?
    status = models.CharField(
        choices=[('pending', 'Pending'),('approved', 'Approved'), ('declined', 'Declined'), ('cancelled','Cancelled'), ('noMatch','No Match')],
        max_length=20,
        unique=True
    )
    requester = models.ForeignKey(
        to= User,
        related_name= "requested_by_user",
        on_delete= models.CASCADE,
        null=True
    )
    accepter = models.ForeignKey(
        to= User,
        related_name= "accepted_by_user",
        on_delete= models.CASCADE,
        null=True
    )

    def __str__(self):
        return self.product_name

    def to_dict(self):
        return {
            'id': self.id,
            'product_type': self.product_type,
            'product_name': self.product_name,
            'status': self.status,
            # 'pick_up_time': self.pick_up_time,
            'requester': self.requester.id,
            'accepter': self.accepter.id
        }

class NegotiatedMonetaryValue(models.Model):
    '''A model that will act as the parent class for multi-table inheritance for the negotiated values of a request'''
    value = models.FloatField()
    # request = models.ForeignKey(Request, related_name= "negotiated_request_value", on_delete=models.CASCADE)
    # negotiator = models.ForeignKey(User, related_name= "negotiator_of_request", on_delete=models.CASCADE)

    def __str__(self):
        return self.value

    def to_dict(self):
        return {
            'value': self.value,
            # 'request': self.request.id,
            # 'negotiator': self.negotiator.id
        }


# class NegotiatedDurationValue(NegotiatedMonetaryValue):
#     duration = models.DurationField()
    #   deadline = models.DateTimeField() deadline for providing service


class NegotiatedStringValue(NegotiatedMonetaryValue):
    stringValue = models.CharField(max_length=100)

    def __str__(self):
        return self.stringValue

    def to_dict(self):
        return {
            'stringValue': self.stringValue
        }


class Message(models.Model):
    message = models.CharField(max_length=100)
    request = models.ForeignKey(Request, related_name= "from_request", on_delete=models.CASCADE)
    sender = models.ForeignKey(User, related_name= "from_user", on_delete=models.CASCADE)

# class Activity(models.Model):
#     user = models.ForeignKey(User, related_name= "user_decision", on_delete=models.CASCADE)
#     request = models.ForeignKey(Request, related_name="on_request", on_delete=models.CASCADE)
#     status = [('pending', 'Pending'),('approved', 'Approved'), ('declined', 'Declined'), ('cancelled','Cancelled'), ('noMatch','No Match')],
#     time = models.DateTimeField(auto_now=True)


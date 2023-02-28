from rest_framework import serializers
from .models import Customer

class CustomerSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Customer 
        fields = ('firstName', 'lastName', 'email', 'phone','address','description')
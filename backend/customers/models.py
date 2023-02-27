from django.db import models

class Customer(models.Model):
	firstName = models.CharField("First name", max_length=255)
	lastName = models.CharField("Last name", max_length=255)
	email = models.EmailField()
	phone = models.CharField(max_length=20)
	address =  models.TextField(blank=True, null=True)
	description = models.TextField(blank=True, null=True)
	createdAt = models.DateTimeField("Created At", auto_now_add=True)
	
	def __str__(self):
		return self.firstName
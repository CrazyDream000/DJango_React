from django.db import migrations

def create_data(apps, schema_editor):
    Customer = apps.get_model('customers', 'Customer')
    Customer(firstName="Customer 001", lastName="Customer 001", email="customer001@email.com", phone="00000000", address="Customer 000 Address", description= "Customer 001 description").save()

class Migration(migrations.Migration):
    dependencies = [
        ('customers', '0001_initial'),
    ]
    operations = [
        migrations.RunPython(create_data),
    ] 
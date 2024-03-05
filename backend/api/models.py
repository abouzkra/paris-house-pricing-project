from django.db import models

# Create your models here.
class House(models.Model):
    square_meters = models.DecimalField(max_digits=10, decimal_places=2)
    number_of_rooms = models.IntegerField()
    has_yard = models.BooleanField(default=False)
    has_pool = models.BooleanField(default=False)
    floors = models.IntegerField()
    city_part_range = models.CharField(max_length=100)
    made = models.IntegerField()
    basement = models.DecimalField(max_digits=10, decimal_places=2)
    garage = models.DecimalField(max_digits=10, decimal_places=2)
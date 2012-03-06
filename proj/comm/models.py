from django.db import models
from catalog.models import Specification
from django.contrib.auth.models import User
from accounts.models import Address
from django.db import connection, transaction


def get_number():
    cursor = connection.cursor()
    cursor.execute("SELECT nextval('comm_order_number')")
    return int(cursor.fetchone()[0])
    

class Order(models.Model):
    dt=models.DateTimeField(auto_now_add=True, verbose_name=u'DateTime')
    number=models.IntegerField(verbose_name=u'Number', default=get_number(), editable=True)
    item_specification=models.ManyToManyField(Specification, through='OrderSpecification')
    user=models.ForeignKey(User, verbose_name=u'User')
    address=models.ForeignKey(Address, verbose_name=u'Address')
    
    def __unicode__(self):
        return self.dt.strftime('%d/%m/%Y %H:%M') + ' ' + self.user.first_name + ' ' + self.user.last_name + " (" + self.user.username + ")"
        
    class Meta:
        verbose_name=u'Order'
        verbose_name_plural=u'Orders'
        
        
class OrderSpecification(models.Model):
    quantity=models.IntegerField(verbose_name=u'Quantity')
    order=models.ForeignKey(Order, verbose_name=u'Order')
    specification=models.ForeignKey(Specification,  verbose_name=u'Item specification')

    def __unicode__(self):
        return self.specification.__unicode__()
        


        
class Basket(models.Model):
    item_specification=models.ManyToManyField(Specification, through='BasketSpecification')
    user=models.OneToOneField(User, verbose_name=u'User')  


    def __unicode__(self):
        return self.user.first_name + ' ' + self.user.last_name + " (" + self.user.username + ")"
        
    class Meta:
        verbose_name=u'Basket'
        verbose_name_plural=u'Baskets'

      
class BasketSpecification(models.Model):
    quantity=models.IntegerField(verbose_name=u'Quantity')
    basket=models.ForeignKey(Basket, verbose_name=u'Basket')
    specification=models.ForeignKey(Specification,  verbose_name=u'Item specification')

    def __unicode__(self):
        return self.specification.__unicode__()

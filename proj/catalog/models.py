#-- encoding=utf8 --
from django.db import models
# Create your models here.
from proj.accounts.models import UserProfile
from django.contrib.auth.models import User

def PARENT_CAT_CHOICES():
    from django.db import connection, transaction
    cursor = connection.cursor()

    cursor.execute("SELECT id,name from catalog_category where parent_id is NULL")
    return cursor.fetchall()
    

class Category(models.Model):
    name=models.CharField(max_length=255, verbose_name=u'Name', help_text=u'i.e. Carabiners')
    name_rus=models.CharField(max_length=255, verbose_name=u'Наименование', help_text=u'i.e. Карабины')
    slug=models.SlugField(verbose_name=u'URL', unique=True)
    parent=models.ForeignKey('self', verbose_name=u'Parent Category', choices=PARENT_CAT_CHOICES(), null=True, blank=True)
    
    
    def get_children(self):
        return Category.objects.filter(parent=self.id)
    
    def __unicode__(self):
        return self.name
     
    class Meta:
        verbose_name=u'Category'
        verbose_name_plural=u'Categories'



class Brand(models.Model):
    name=models.CharField(max_length=255, verbose_name=u'Name', help_text=u'i.e. Marmot')
    name_rus=models.CharField(max_length=255, verbose_name=u'Наименование', help_text=u'i.e. Sivera')
    img=models.ImageField(upload_to='img/brands/', height_field=None, width_field=None, verbose_name=u'Image', blank=True, null=True)
    def __unicode__(self):
        return self.name
    
    class Meta:
        verbose_name=u'Brand'
        verbose_name_plural=u'Brands'

    
class Item(models.Model):
    name=models.CharField(max_length=255, verbose_name=u'Name', help_text=u'i.e. Petzl Am\'d ScrewLock')
    name_rus=models.CharField(max_length=255, verbose_name=u'Наименование', help_text=u'i.e. Petzl Am\'d ScrewLock')
    category=models.ForeignKey(Category, verbose_name=u'Category')
    descr=models.TextField(verbose_name=u'Description')
    descr_rus=models.TextField(verbose_name=u'Описание')
    brand=models.ForeignKey(Brand, verbose_name=u'Brand')
    
    def __unicode__(self):
        return self.name;
        
    class Meta:
        verbose_name=u'Item'
        verbose_name_plural=u'Items'
        

class Specification(models.Model):
    item=models.ForeignKey(Item, verbose_name=u'Item')
    img=models.ImageField(upload_to='img/catalog/', height_field=None, width_field=None, verbose_name=u'Image')
    size=models.CharField(max_length=255, verbose_name=u'Size')
    color=models.CharField(max_length=255, verbose_name=u'Color')
    size_rus=models.CharField(max_length=255, verbose_name=u'Размер')
    color_rus=models.CharField(max_length=255, verbose_name=u'Цвет')
    price=models.FloatField(verbose_name=u'Price in USD')
    quantity=models.IntegerField(verbose_name=u'Available quantity') 

    def __unicode__(self):
        return self.item.name + " :: " + self.size+' '+self.color
        
    class Meta:
        verbose_name=u'Specification'
        verbose_name_plural=u'Specifications'


class UserReview(models.Model):
    rate_choices=(
                    (0,0),
                    (1,1),
                    (2,2),
                    (3,3),
                    (4,4),
                    (5,5)
                  )
    dt=models.DateTimeField(auto_now_add=True, verbose_name=u'Date and Time')
    period=models.CharField(max_length=255, verbose_name=u'Usage period', blank=True)
    period_rus=models.CharField(max_length=255, verbose_name=u'Период использования', blank=True)
    conditions=models.TextField(verbose_name=u'Usage conditions', blank=True)
    conditions_rus=models.TextField(verbose_name=u'Условия использования', blank=True)
    review=models.TextField(verbose_name=u'Review', blank=True)
    review_rus=models.TextField(verbose_name=u'Отзыв', blank=True)
    item=models.ForeignKey(Item, verbose_name=u'Item')
    user=models.ForeignKey(User, verbose_name=u'User')    
    rate=models.IntegerField(verbose_name=u'Rate', choices=rate_choices)
    
    def __unicode__(self):
        return self.dt.strftime('%d/%m/%Y %H:%M') + ', '+ self.user.first_name + " " + self.user.last_name + ", " + self.item.name
        
    class Meta:
        verbose_name=u'User Review'
        verbose_name_plural=u'User Reviews'


import sys,os

from catalog.models import Category, Item, Brand, Specification, UserReview
from django.core.exceptions import ObjectDoesNotExist
from memcached_utils import cache_categories as cache_categories
from django.core.cache import cache
from django.template import RequestContext

from django.shortcuts import render_to_response

def get_items(request, slug=None):
    
    #######categories
    selected_cat = None  
    if slug != None:
        try:
            selected_cat=Category.objects.get(slug=slug)
        except ObjectDoesNotExist:
            raise ValueError()
            pass


    cats=cache.get('cats')
    if cats==None:
        (cats)=cache_categories()
    #######################


    items=Item.objects.filter(category__id__in=cats_filter);
    
    brands=None
    
    if(selected_cat):
        for it in items:
            brands_ids[it.brand]=True        
    else:    
        pass


    selected_brand = None 
    
    if(brand in request.GET):
        try:
            selected_brand = Brand.objects.get(id=request.GET['brand'])
        except:
            pass

    cat_brands=Category.selected_cat = None  
    if slug != None:
#        try:
        selected_cat=Categories.objects.get(slug=slug)
#       except SMTH:
#            pass
    


    query_search=''


        
    try:
        query_search=request.GET['q']
    except:
        query_search=''

    
    filter_context={
        
    }
    
    
    if cats_filter!=[]:
        filter_context['category__id__in']=cats_filter
    
    if brand_filter!=None:
        filter_context['brand__id__exact']=selected_brand.id
        
    if query_search!='':
        filter_context['name__icontains']=query_search



    

    context={
        'cats': cats,
        'selected_cat': selected_cat
    }
    
    
    context=RequestContext(request, context)
    return render_to_response('catalog/items.html', context)


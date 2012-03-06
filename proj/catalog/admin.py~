from django.contrib import admin
from catalog.models import Category, Item, Specification, Brand, UserReview
from django.db import models

from django.utils.translation import ugettext as _
from django.shortcuts import render_to_response


from django import forms
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from catalog.sweet_pagination import MyPage, get_page_list

from django.contrib.admin.actions import delete_selected

from django.contrib.admin.sites import AdminSite

from django.template import RequestContext


from django.contrib import messages

from widgets import AdminImageWidget
from memcached_utils import cache_categories

class CategoryForm(forms.ModelForm):
    def clean(self):
        try:
            cat=Category.objects.get(id=int(self.data['parent']))
            self.data['parent']=self.cleaned_data['parent']=cat
        except:
            pass
        return self.cleaned_data
        
class CategoryAdmin(admin.ModelAdmin):
    form=CategoryForm
    
    list_filter=['parent',]
    list_display=['name', 'parent']
    search_fields = ['name']
    
    def changeslist_view(self, request, extra_content=None):
        xtra_content={
            'categories' : Category.objects.all()
        }
        return super(CategoryAdmin, self).changelist_view(request,xtra_content)

    def save_model(self,request, obj, form, change):
        obj.save()
        cache_categories()
        

class BrandForm(forms.ModelForm):
    img=forms.ImageField(required=False, widget=AdminImageWidget, label=u'Image')

class BrandAdmin(admin.ModelAdmin):
    form=BrandForm
    model=Brand
    search_fields=['name']


    
admin.site.register(Category, CategoryAdmin)
admin.site.register(Brand, BrandAdmin)


class SpecificationForm(forms.ModelForm):
    img=forms.ImageField(widget=AdminImageWidget, label=u'Image')
    
class SpecificationInline(admin.TabularInline):
    form=SpecificationForm
    model = Specification
    fk_name = "item"


class ItemAdmin(admin.ModelAdmin):
    inlines = [
        SpecificationInline,
    ]
    
admin.site.register(Item, ItemAdmin)


def get_url(request,what):
    g=request.GET.copy()
    if what in g: del g[what]
    
    qs='&'.join(['%s=%s' % (key, value) for (key, value) in g.items()])
    
    if qs=='': qs='?'
    else: qs='?'+qs+'&'
   
    return qs


def item_admin_changelist(request):
    user=request.user
        
    try:     
        act=request.POST["action"]
        if act=="delete_selected": 
            if("post" not in request.POST):
                if(request.POST.getlist('_selected_action')==[]):
                    messages.add_message(request, messages.INFO, 'Items must be selected in order to perform actions on them. No items have been changed.')
                    raise ValueError()
                qs=Item.objects.filter(id__in=request.POST.getlist('_selected_action'))
                return delete_selected(ItemAdmin(Item,AdminSite()), request, qs)
    except:
        pass
    
    parent_categories=Category.objects.filter(parent=None)
    brands=Brand.objects.all()
    
    child_categories=[]
    selected_child_cat=None
    selected_parent_cat=None
    selected_brand=None
    query_search=''
    
    cats_filter=[]
    brand_filter=None
    
    try:
        filter_cat_id = int(request.GET['category'])
        filter_cat=Category.objects.get(id=filter_cat_id)


        if filter_cat.parent==None:
            selected_child_cat=None
            selected_parent_cat=filter_cat
            child_categories=Category.objects.filter(parent=selected_parent_cat.id)
            cats_filter.append(selected_parent_cat.id)
            cats_filter.extend(map(lambda c: c.id, child_categories))
    
        else:
            selected_child_cat=filter_cat
            selected_parent_cat=filter_cat.parent
            cats_filter=[selected_child_cat.id,]
            child_categories=Category.objects.filter(parent=selected_parent_cat.id)
    except:
        cats_filter=[]
    
    

    try:
        
        brand_filter=int(request.GET['brand'])
        selected_brand=Brand.objects.get(id=brand_filter)
    except:
        brand_filter=None
        
    try:
        query_search=request.GET['q']
    except:
        query_search=''

    
    filter_context={
        
    }
    
    
    if cats_filter!=[]:
        filter_context['category__id__in']=cats_filter
    
    if brand_filter!=None:
        filter_context['brand__id__exact']=brand_filter

    if query_search!='':
        filter_context['name__icontains']=query_search
        

    
    orig_items=Item.objects.filter(**filter_context)

    paginator = Paginator(orig_items, 50) 
    page = request.GET.get('page')
    
    is_all_items=None
    
    if page == '0':
        items=paginator.page(1)
        items.object_list=orig_items
        is_all_items = True
    else:

        if page == None:
            page=1
    
        try:
            items = paginator.page(page)
        except PageNotAnInteger:
            # If page is not an integer, deliver first page.
            items = paginator.page(1)
        except EmptyPage:
            # If page is out of range (e.g. 9999), deliver last page of results.
            items = paginator.page(paginator.num_pages)

    page_list=get_page_list(paginator,30,page)


        
    
    
    context={
        'has_add_permission': user.has_perm('catalog.add_item'),
        'items': items,
        'parent_categories': parent_categories,
        'child_categories': child_categories,
        'selected_child_cat':selected_child_cat,
        'selected_parent_cat':selected_parent_cat,
        'selected_brand': selected_brand,
        'selected_category': selected_child_cat or selected_parent_cat,
        'brands': brands,
        'page_list':page_list,
        'url_page': get_url(request, "page"),
        'url_category': get_url(request, "category"),
        'url_brand': get_url(request, "brand"),
        'query_search': query_search,
        'is_all_items': is_all_items,
    }
    
    
    context=RequestContext(request, context)
    return render_to_response('admin/catalog/item_changelist.html', context)


class UserReviewAdmin(admin.ModelAdmin):
    model=UserReview
    list_filter=('item', 'user',)
    list_display=('date_format', 'item', 'user', 'short_review')
    search_fields = ('item__name', 'user__first_name', 'user__last_name', 'review',)

    def date_format(self, obj):
        return obj.dt.strftime('%d/%m/%Y %H:%M')
    
    def short_review(self, obj):
        return obj.review[:200]
    

admin.site.register(UserReview, UserReviewAdmin)






def choose_item_spec(request):
    pass
    
    
    
    
    
    

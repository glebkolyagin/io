from django.contrib import admin
from comm.models import Order, Basket, OrderSpecification, BasketSpecification




class OrderSpecificationInline(admin.TabularInline):
    model = OrderSpecification
    fk_name = "order"
    template = "admin/comm/order/edit_inline/tabular.html"


class OrderAdmin(admin.ModelAdmin):
    inlines = [
        OrderSpecificationInline,
    ]
    fields=('number','dt','user','address')
    readonly_fields=('number','dt')
    list_filter=('user',)
    search_fields=('number','user__first_name','user__last_name', 'user__username', 'user__email')

class BasketSpecificationInline(admin.TabularInline):
    model = BasketSpecification
    fk_name = "basket"
    template = "admin/comm/basket/edit_inline/tabular.html"


class  BasketAdmin(admin.ModelAdmin):
    inlines = [
        BasketSpecificationInline,
    ]
    search_fields=('user__first_name', 'user__last_name', 'user__username', 'user__email')

    
admin.site.register(Order, OrderAdmin)
admin.site.register(Basket, BasketAdmin)

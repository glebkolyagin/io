from django.contrib import admin
from accounts.models import Country, State, Address, UserProfile


class CountryAdmin(admin.ModelAdmin):
    model=Country
    search_fields=('name',)
    
admin.site.register(Country,CountryAdmin)

class StateAdmin(admin.ModelAdmin):
    model=State
    search_fields=('name', 'country',)
    list_display=('name','country',)
    list_filter=('country',)
    
admin.site.register(State,StateAdmin)
    

class AddressAdmin(admin.ModelAdmin):
    model=Address
    list_display=('name', 'addr1', 'city', 'country', 'user')
    list_filter=('user',)
    search_fields=('name', 'addr1', 'city', 'country', 'user__first_name', 'user__last_name', 'user__username', 'user__email')
    
admin.site.register(Address, AddressAdmin)

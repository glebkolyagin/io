from accounts.models import Address
from django.shortcuts import render_to_response


from dajax.core.Dajax import Dajax
def addresses_by_user(request,user_id):
    addresses=Address.objects.filter(user__id=user_id)
    dajax = Dajax()
    dajax.alert('123')
    return dajax.json()

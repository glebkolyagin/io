from django.utils import simplejson
from dajaxice.core import dajaxice_functions
from comm.models import Address

def addresses_by_user(request, id):
    addresses=Address.objects.filter(user=id)
    l = map (lambda c: (c.id,c.__unicode__()), addresses) 
    return simplejson.dumps({'addresses': l })

dajaxice_functions.register(addresses_by_user)


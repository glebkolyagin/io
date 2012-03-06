from django.core.cache import cache
from catalog.models import Category

def cache_categories():
    cats=Category.objects.filter(parent=None)
    for c in cats:
        c.children=c.get_children()
        
    try:        
        cache.set('cats', cats)
    except:
        pass
    return (cats)

            
    

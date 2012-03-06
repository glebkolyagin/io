from catalog.views import get_items
from django.conf.urls.defaults import patterns, include, url

urlpatterns = patterns('',
    url(r'^$', get_items),
    url(r'(^[^\/]+)\/$', get_items),
)


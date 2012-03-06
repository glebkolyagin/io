#-*-coding=utf-8-*-
from django.core.urlresolvers import reverse
from admin_tools.menu import items, Menu

class CustomMenu(Menu):
    def __init__(self, **kwargs):
        super(CustomMenu, self).__init__(**kwargs)
        self.children.append(
            items.MenuItem(title=u'Main', url=reverse('admin:index'))
        )
        self.children.append(
            items.MenuItem(
                title=u'Catalog',
                children=[
                    items.MenuItem(title=u'Categories', url='/admin/catalog/category/'),
                    items.MenuItem(title=u'Brands', url='/admin/catalog/brand/'),
                    items.MenuItem(title=u'Items', url='/admin/catalog/item/'),
                    items.MenuItem(title=u'User reviews', url='/admin/catalog/userreview/'),
                ]
            ),
        )
        self.children.append(
            items.MenuItem(
                title=u'Commerce',
                children=[
                    items.MenuItem(title=u'Orders', url='/admin/comm/order/'),
                    items.MenuItem(title=u'Baskets', url='/admin/comm/basket/'),
                ]
            ),
        )
        

        self.children.append(
            items.MenuItem(
                title=u'References',
                children=[
                    items.MenuItem(title=u'Countries', url='/admin/accounts/country/'),
                    items.MenuItem(title=u'States', url='/admin/accounts/state/'),                              ]
            )
        )
                    
        self.children.append(
            items.MenuItem(
                title=u'Users',
                children=[
                    items.MenuItem(title=u'Users', url='/admin/auth/user/'),
                    items.MenuItem(title=u'Groups', url='/admin/auth/group/'),
                    items.MenuItem(title=u'Addresses', url='/admin/accounts/address/'),
                ]
            )
        )

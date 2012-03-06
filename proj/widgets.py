from django import forms
from django.utils.safestring import mark_safe
from django.contrib.admin.widgets import AdminFileWidget

class AdminImageWidget(AdminFileWidget):
    """
    A ImageField Widget for admin that shows a thumbnail.
    """
    def __init__(self, height=20, *args):
        self.height=height
        super(AdminImageWidget, self).__init__(*args)

    def render(self, name, value, attrs=None):
        output = []

        if value and hasattr(value, "url"):
            output.append(('<a target="_blank" href="%s">'
                           '<img src="%s" style="height: %spx;" /></a> '
                           % (value.url, value.url, str(self.height))))
                           
        output.append(super(AdminImageWidget, self).render(name, value, attrs))
        return mark_safe(u''.join(output))


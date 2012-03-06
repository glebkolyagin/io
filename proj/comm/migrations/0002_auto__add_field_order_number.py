# encoding: utf-8
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models

class Migration(SchemaMigration):

    def forwards(self, orm):
        
        # Adding field 'Order.number'
        db.add_column('comm_order', 'number', self.gf('django.db.models.fields.IntegerField')(default=12), keep_default=False)


    def backwards(self, orm):
        
        # Deleting field 'Order.number'
        db.delete_column('comm_order', 'number')


    models = {
        'accounts.address': {
            'Meta': {'object_name': 'Address'},
            'addr1': ('django.db.models.fields.CharField', [], {'max_length': '500', 'blank': 'True'}),
            'addr1_rus': ('django.db.models.fields.CharField', [], {'max_length': '500', 'blank': 'True'}),
            'addr2': ('django.db.models.fields.CharField', [], {'max_length': '500', 'blank': 'True'}),
            'addr2_rus': ('django.db.models.fields.CharField', [], {'max_length': '500', 'blank': 'True'}),
            'city': ('django.db.models.fields.CharField', [], {'max_length': '500', 'blank': 'True'}),
            'city_rus': ('django.db.models.fields.CharField', [], {'max_length': '500', 'blank': 'True'}),
            'country': ('django.db.models.fields.CharField', [], {'max_length': '500'}),
            'country_rus': ('django.db.models.fields.CharField', [], {'max_length': '500'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '500', 'blank': 'True'}),
            'name_rus': ('django.db.models.fields.CharField', [], {'max_length': '500', 'blank': 'True'}),
            'phone': ('django.db.models.fields.TextField', [], {'max_length': '20', 'blank': 'True'}),
            'primary': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'state': ('django.db.models.fields.CharField', [], {'max_length': '500', 'blank': 'True'}),
            'user': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['auth.User']"}),
            'zip_code': ('django.db.models.fields.CharField', [], {'max_length': '20'})
        },
        'auth.group': {
            'Meta': {'object_name': 'Group'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '80'}),
            'permissions': ('django.db.models.fields.related.ManyToManyField', [], {'to': "orm['auth.Permission']", 'symmetrical': 'False', 'blank': 'True'})
        },
        'auth.permission': {
            'Meta': {'ordering': "('content_type__app_label', 'content_type__model', 'codename')", 'unique_together': "(('content_type', 'codename'),)", 'object_name': 'Permission'},
            'codename': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'content_type': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['contenttypes.ContentType']"}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '50'})
        },
        'auth.user': {
            'Meta': {'object_name': 'User'},
            'date_joined': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now'}),
            'email': ('django.db.models.fields.EmailField', [], {'max_length': '75', 'blank': 'True'}),
            'first_name': ('django.db.models.fields.CharField', [], {'max_length': '30', 'blank': 'True'}),
            'groups': ('django.db.models.fields.related.ManyToManyField', [], {'to': "orm['auth.Group']", 'symmetrical': 'False', 'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'is_active': ('django.db.models.fields.BooleanField', [], {'default': 'True'}),
            'is_staff': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'is_superuser': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'last_login': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime.now'}),
            'last_name': ('django.db.models.fields.CharField', [], {'max_length': '30', 'blank': 'True'}),
            'password': ('django.db.models.fields.CharField', [], {'max_length': '128'}),
            'user_permissions': ('django.db.models.fields.related.ManyToManyField', [], {'to': "orm['auth.Permission']", 'symmetrical': 'False', 'blank': 'True'}),
            'username': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '30'})
        },
        'catalog.brand': {
            'Meta': {'object_name': 'Brand'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'img': ('django.db.models.fields.files.ImageField', [], {'max_length': '100', 'null': 'True', 'blank': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'name_rus': ('django.db.models.fields.CharField', [], {'max_length': '255'})
        },
        'catalog.category': {
            'Meta': {'object_name': 'Category'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'name_rus': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'parent': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['catalog.Category']", 'null': 'True', 'blank': 'True'}),
            'slug': ('django.db.models.fields.SlugField', [], {'max_length': '50', 'db_index': 'True'})
        },
        'catalog.item': {
            'Meta': {'object_name': 'Item'},
            'brand': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['catalog.Brand']"}),
            'category': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['catalog.Category']"}),
            'descr': ('django.db.models.fields.TextField', [], {}),
            'descr_rus': ('django.db.models.fields.TextField', [], {}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'name_rus': ('django.db.models.fields.CharField', [], {'max_length': '255'})
        },
        'catalog.specification': {
            'Meta': {'object_name': 'Specification'},
            'color': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'color_rus': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'img': ('django.db.models.fields.files.ImageField', [], {'max_length': '100'}),
            'item': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['catalog.Item']"}),
            'price': ('django.db.models.fields.FloatField', [], {}),
            'quantity': ('django.db.models.fields.IntegerField', [], {}),
            'size': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'size_rus': ('django.db.models.fields.CharField', [], {'max_length': '255'})
        },
        'comm.basket': {
            'Meta': {'object_name': 'Basket'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'item_specification': ('django.db.models.fields.related.ManyToManyField', [], {'to': "orm['catalog.Specification']", 'through': "orm['comm.BasketSpecification']", 'symmetrical': 'False'}),
            'user': ('django.db.models.fields.related.OneToOneField', [], {'to': "orm['auth.User']", 'unique': 'True'})
        },
        'comm.basketspecification': {
            'Meta': {'object_name': 'BasketSpecification'},
            'basket': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['comm.Basket']"}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'quantity': ('django.db.models.fields.IntegerField', [], {}),
            'specification': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['catalog.Specification']"})
        },
        'comm.order': {
            'Meta': {'object_name': 'Order'},
            'address': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['accounts.Address']"}),
            'dt': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'item_specification': ('django.db.models.fields.related.ManyToManyField', [], {'to': "orm['catalog.Specification']", 'through': "orm['comm.OrderSpecification']", 'symmetrical': 'False'}),
            'number': ('django.db.models.fields.IntegerField', [], {'default': '12'}),
            'user': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['auth.User']"})
        },
        'comm.orderspecification': {
            'Meta': {'object_name': 'OrderSpecification'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'order': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['comm.Order']"}),
            'quantity': ('django.db.models.fields.IntegerField', [], {}),
            'specification': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['catalog.Specification']"})
        },
        'contenttypes.contenttype': {
            'Meta': {'ordering': "('name',)", 'unique_together': "(('app_label', 'model'),)", 'object_name': 'ContentType', 'db_table': "'django_content_type'"},
            'app_label': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'model': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '100'})
        }
    }

    complete_apps = ['comm']

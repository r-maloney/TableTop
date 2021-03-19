from .db import db

order_items = db.Table('order_items',
                       db.Column('order_id', db.Integer, db.ForeignKey(
                           'orders.id')),
                       db.Column('item_id', db.Integer, db.ForeignKey(
                           'items.id'))
                       )

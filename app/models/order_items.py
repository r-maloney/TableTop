from .db import db

order_items = db.Table('order_items',
                       db.Column('order_id', db.Integer, db.ForeignKey(
                           'orders.id')),
                       db.Column('item_id', db.Integer, db.ForeignKey(
                           'items.id'))
                       )


class Order_Items(db.Model):
     __tablename__ = 'order_items'

    order_id = db.Column('order_id', db.Integer, db.ForeignKey('orders.id'))
    item_id = db.Column('item_id', db.Integer,db.ForeignKey('items.id'))

    date_created = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())

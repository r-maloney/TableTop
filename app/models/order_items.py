from .db import db


class Order_Items(db.Model):
    __tablename__ = 'order_items'

    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column('order_id', db.Integer, db.ForeignKey('orders.id'))
    item_id = db.Column('item_id', db.Integer, db.ForeignKey('items.id'))

    date_created = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())

    def to_dict(self):
        return self.item_id

    # def item_id(self):
    #     return self.item_id

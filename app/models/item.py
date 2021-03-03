from .db import db
from .order import order_items
# order_items = db.Table('order_items',
#                        db.Column('user_id', db.Integer, db.ForeignKey(
#                            'users.id'), primary_key=True),
#                        db.Column('item_id', db.Integer, db.ForeignKey(
#                            'items.id'), primary_key=True)
#                        )


class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(2000), nullable=False)
    img_url = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Float, nullable=False)
    donation_percentage = db.Column(db.Float, nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey(
        "businesses.id"), nullable=False)

    date_created = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())

    business = db.relationship("Business", back_populates="items")
    orders = db.relationship(
        'Order', secondary=order_items, back_populates='items')

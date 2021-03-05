from .db import db
from .user import user_orders

order_items = db.Table('order_items',
                       db.Column('order_id', db.Integer, db.ForeignKey(
                           'orders.id'), primary_key=True),
                       db.Column('item_id', db.Integer, db.ForeignKey(
                           'items.id'), primary_key=True)
                       )


class Order(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    amount_paid = db.Column(db.Float, nullable=False)
    donation_amount = db.Column(db.Float, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        "users.id"), nullable=False)

    date_created = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())

    items = db.relationship(
        'Item', secondary=order_items, back_populates='orders')
    # users = db.relationship('User', back_populates='orders')
    users = db.relationship(
        "User", secondary=user_orders, back_populates="orders")

    def to_dict(self):
        return {
            "id": self.id,
            "amount_paid": self.amount_paid,
            "donation_amount": self.donation_amount,
            "user": self.user.last_name,
            "order_date": self.date_created,
        }

from .db import db
from .order_items import Order_Items
from .item import Item


class Order(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    in_progress = db.Column(db.Boolean, default=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(
        "users.id"), nullable=False)

    date_created = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())

    items = db.relationship(
        'Item', secondary=lambda: Order_Items.__table__, back_populates='orders')
    user = db.relationship(
        "User", back_populates="orders")

    def to_dict(self):

        return {
            "id": self.id,
            "total": self.calculate_total(),
            # "donation_amount": self.calculate_donation(),
            "user": self.user.to_dict(),
            "order_date": self.date_created,
        }

    @property
    def order_items(self):
        order_items = Order_Items.query.filter_by(order_id=self.id).all()
        items = []
        for order_item in order_items:
            item = Item.query.filter_by(id=order_item.item_id).first()
            items.append(item.to_dict())
        return items

    def calculate_total(self):
        if self.order_items is None:
            return 0
        for item in self.order_items:
            prices = [item['price'] for item in self.order_items]
            total = sum(prices)
        return total

    def calculate_donation(self):
        if self.items is none:
            return 0
        donations = [item.donation_percentage *
                     item.price for item in self.items]
        sum = sum(donations)
        return sum

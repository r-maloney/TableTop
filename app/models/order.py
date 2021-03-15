from .db import db

order_items = db.Table('order_items',
                       db.Column('order_id', db.Integer, db.ForeignKey(
                           'orders.id')),
                       db.Column('item_id', db.Integer, db.ForeignKey(
                           'items.id')),
                       db.Column('item_count', db.Integer)
                       )


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
        'Item', secondary=order_items, back_populates='orders')
    user = db.relationship(
        "User", back_populates="orders")

    def to_dict(self):
        return {
            "id": self.id,
            # "amount_paid": self.calculate_total(),
            # "donation_amount": self.calculate_donation(),
            "user": self.user.to_dict(),
            "order_date": self.date_created,
        }

    def calculate_total(self):
        if self.items is none:
            return 0
        prices = [item.price for item in self.items]
        sum = sum(prices)
        return sum

    def calculate_donation(self):
        if self.items is none:
            return 0
        donations = [item.donation_percentage *
                     item.price for item in self.items]
        sum = sum(donations)
        return sum

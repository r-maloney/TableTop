from .db import db
from .order_items import Order_Items


class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(2000), nullable=False)
    img_url = db.Column(db.String(255), nullable=True)
    price = db.Column(db.Float, nullable=False)
    donation_percentage = db.Column(db.Float, nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey(
        "businesses.id"), nullable=False)

    date_created = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())

    business = db.relationship("Business", back_populates="items")
    orders = db.relationship(
        'Order', secondary=Order_Items, back_populates='items')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "img_url": self.img_url,
            "price": self.price,
            "donation_percentage": self.donation_percentage,
            # "business": self.business.to_dict(),
        }

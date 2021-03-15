from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


user_orders = db.Table('user_orders', db.Column('user_id', db.Integer, db.ForeignKey(
    'users.id'), primary_key=True), db.Column('order_id', db.Integer, db.ForeignKey('orders.id'), primary_key=True))


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    charity_id = db.Column(db.Integer, db.ForeignKey(
        "charities.id"), nullable=True)
    date_created = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())

    charity = db.relationship("Charity", back_populates="users")
    # orders = db.relationship("Order", back_populates="users")
    orders = db.relationship(
        "Order", secondary=user_orders, back_populates="user")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        if self.charity:
            charityObject = self.charity.to_dict()
        else:
            charityObject = ''
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "charity": charityObject,
        }

from .db import db


class Charity(db.Model):
    __tablename__ = 'charities'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(2000), nullable=False)
    img_url = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(100), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(2), nullable=False)
    zip = db.Column(db.Integer, nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    latitude = db.Column(db.Float, nullable=False)

    date_created = db.Column(db.DateTime,  default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime,  default=db.func.current_timestamp(
    ), onupdate=db.func.current_timestamp())

    users = db.relationship("User", back_populates="charity")

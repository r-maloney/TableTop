from app.models import db, Item
from faker import Faker

fake = Faker()


def seed_items():

    first = Item(name="Personal Cheese Pizza"	,
                 description="12 inch cheese pizza"	,
                 price=9.99	,
                 donation_percentage=0.05	,
                 business_id=1	,)
    second = Item(name="Large Cheese Pizza"	,
                  description="16 inch cheese pizza"	,
                  price=14.99	,
                  donation_percentage=0.05	,
                  business_id=1	,)
    third = Item(name="Personal Pepperoni Pizza"	,
                 description="12 inch cheese pizza"	,
                 price=10.99	,
                 donation_percentage=0.05	,
                 business_id=1	,)
    fourth = Item(name="Large Pepperoni Pizza"	,
                  description="12 inch cheese pizza"	,
                  price=15.99	,
                  donation_percentage=0.05	,
                  business_id=1	,)

    db.session.add(first)
    db.session.add(second)
    db.session.add(third)
    db.session.add(fourth)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the items table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_items():
    db.session.execute('TRUNCATE items CASCADE;')
    db.session.commit()

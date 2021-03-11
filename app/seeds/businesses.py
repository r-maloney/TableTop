from app.models import db, Business
from faker import Faker

fake = Faker()


def seed_businesses():

    first = Business(name="Jimmy T's"	,
                     description="Local diner serving the community since 1952"	,
                     img_url="https://www.pngkey.com/png/full/38-381514_clip-free-stock-menu-supreme-logo-suprem-restaurant.png"	,
                     rating=3.7	,
                     type="Restaurant"	,
                     address=fake.street_address()	,
                     city=fake.city()	,
                     state="AZ"	,
                     zip=fake.postcode()	,
                     longitude=fake.longitude()	,
                     latitude=fake.latitude()	,)
    second = Business(name="Chew and Cheer"	,
                      description=fake.catch_phrase()	,
                      img_url="https://marketplace.canva.com/EADaokMwo2g/2/0/1600w/canva-black-with-utensils-icon-restaurant-logo-z2GauAM_TuU.jpg"	,
                      rating=2.8	,
                      type="Restaurant"	,
                      address=fake.street_address()	,
                      city=fake.city()	,
                      state="AZ"	,
                      zip=fake.postcode()	,
                      longitude=fake.longitude()	,
                      latitude=fake.latitude()	,)
    third = Business(name="Chez Isabella"	,
                     description=fake.catch_phrase()	,
                     img_url="https://marketplace.canva.com/EADan7frFl4/2/0/1600w/canva-white-and-orange-simple-fine-dining-food-logo-CzL2vWrjZFs.jpg"	,
                     rating=4.7	,
                     type="Restaurant"	,
                     address=fake.street_address()	,
                     city=fake.city()	,
                     state="AZ"	,
                     zip=fake.postcode()	,
                     longitude=fake.longitude()	,
                     latitude=fake.latitude()	,)
    fourth = Business(name="Toaster and Oven"	,
                      description=fake.catch_phrase()	,
                      img_url="https://marketplace.canva.com/EADapPg4dgY/2/0/1600w/canva-blue-rope-frame-restaurant-logo-ako_rzYyLiU.jpg"	,
                      rating=4.1	,
                      type="Restaurant"	,
                      address=fake.street_address()	,
                      city=fake.city()	,
                      state="AZ"	,
                      zip=fake.postcode()	,
                      longitude=fake.longitude()	,
                      latitude=fake.latitude()	,)
    fifth = Business(name="Lush Lashes"	,
                     description=fake.catch_phrase()	,
                     img_url="https: // marketplace.canva.com/EAD65eU2Sd8/3/0/1600w/canva-green-and-white-beauty-logo-_hUN_tfnBAs.jpg"	,
                     rating=3.7	,
                     type="Retail"	,
                     address=fake.street_address()	,
                     city=fake.city()	,
                     state="AZ"	,
                     zip=fake.postcode()	,
                     longitude=fake.longitude()	,
                     latitude=fake.latitude()	,)
    sixth = Business(name="Refresco"	,
                     description=fake.catch_phrase()	,
                     img_url="https://marketplace.canva.com/EAD7Q0jHPAI/3/0/1600w/canva-green-and-black-travel-agency-logo-gEpj_8kx8sI.jpg"	,
                     rating=2.3	,
                     type="Retail"	,
                     address=fake.street_address()	,
                     city=fake.city()	,
                     state="AZ"	,
                     zip=fake.postcode()	,
                     longitude=fake.longitude()	,
                     latitude=fake.latitude()	,)
    seventh = Business(name="Stryker"	,
                       description=fake.catch_phrase()	,
                       img_url="https://marketplace.canva.com/EAD7RZBpky0/1/0/1600w/canva-blue-and-white-gaming-logo-yUoq7UFbKHY.jpg"	,
                       rating=3.8	,
                       type="Retail"	,
                       address=fake.street_address()	,
                       city=fake.city()	,
                       state="AZ"	,
                       zip=fake.postcode()	,
                       longitude=fake.longitude()	,
                       latitude=fake.latitude()	,)
    eigth = Business(name="Adventurer"	,
                     description=fake.catch_phrase()	,
                     img_url="https://marketplace.canva.com/EAD7RQBTMeY/4/0/1600w/canva-gold-and-black-vintage-logo-hM6WNMGfoOQ.jpg"	,
                     rating=4.9	,
                     type="Retail"	,
                     address=fake.street_address()	,
                     city=fake.city()	,
                     state="AZ"	,
                     zip=fake.postcode()	,
                     longitude=fake.longitude()	,
                     latitude=fake.latitude()	,)

    db.session.add(first)
    db.session.add(second)
    db.session.add(third)
    db.session.add(fourth)
    db.session.add(fifth)
    db.session.add(sixth)
    db.session.add(seventh)
    db.session.add(eigth)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the businesses table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_businesses():
    db.session.execute('TRUNCATE businesses CASCADE;')
    db.session.commit()

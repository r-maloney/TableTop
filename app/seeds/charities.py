from app.models import db, Charity
from faker import Faker

fake = Faker()


def seed_charities():

    first = Charity(name="St. Mary's Food Bank"	,	description="Donate to St Mary's Food Bank & Help Feed Hungry Arizona Children In Need."	,
                    img_url="https://www.usfoodbanks.org/gallery/237_st-marys-food-bank-alliance_aac.png"	,)
    second = Charity(name="Phoenix Children's Hospital Foundation"	,	description="Donations and support from caring people like you make it possible for us to offer the very best medical specialists, cutting-edge technology, and search for answers to the most devastating childhood illnesses."	,
                     img_url="https://www.prismagraphic.com/wp-content/uploads/2020/07/Phoenix-Childrens-Logo.png"	,)
    third = Charity(name="Arizona Humane Society"	,	description="The Arizona Humane Society is continuing its life-saving work for the most vulnerable animals in its trauma center, rescue and cruelty investigation program, Bottle Baby and Puppy Parvo intensive care units, and more."	,
                    img_url="https://www.azhumane.org/wp-content/uploads/2015/10/AHS_ColorLogo_RGB_Stacked.png"	,)
    fourth = Charity(name="Genesis City"	,	description="Genesis Academy serves high-risk, over-age, under-credited and out-of-school youth. The most significant and urgent need is acquiring computers for students to check out so they can access online classes. Some also need WiFi access, as they have none at home."	,
                     img_url="https://s3.amazonaws.com/mobilecause-avatar-production/npos/logos/12129/logo/original/NEWEST_LOGO.png?1600807779")
    fifth = Charity(name="Central Arizona Shelter Services"	,	description="Located on the Human Services Campus, CASS provides shelter for the most vulnerable individuals experiencing homelessness, including seniors, those who are HIV positive, and others with compromised immune systems. The shelter reaches capacity nightly."	,
                    img_url="https://www.cassaz.org/wp-content/uploads/2018/08/CASS-logo_600-300x169.png"	,)
    sixth = Charity(name="The Arizona Pet Project"	,	description="The Arizona Pet Project’s main goal is to keep prevent pet homelessness by providing services, resources and support to families. The nonprofit has seen significant uptick in requests for help with pet food, pet deposit and rent assistance, temporary boarding (so people can access medical treatment), and emergency veterinary care."	,
                    img_url="https://davidsonbelluso.com/wp-content/uploads/2020/03/APP-logo.jpg"	,)
    seventh = Charity(name="Habitat for Humanity"	,	description="Habitat for Humanity brings people together to build homes, communities and hope. While much of the nonprofit’s charitable work and fundraising events have been paused to adhere to the social distancing guidelines of COVID-19, it is still accepting online donations."	,
                      img_url="https://habitatcaz.org/wp-content/uploads/2018/08/Horizontal-Logo-Vector-e1568085543316.png"	,)

    db.session.add(first)
    db.session.add(second)
    db.session.add(third)
    db.session.add(fourth)
    db.session.add(fifth)
    db.session.add(sixth)
    db.session.add(seventh)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the charities table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_charities():
    db.session.execute('TRUNCATE charities CASCADE;')
    db.session.commit()

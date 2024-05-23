import stripe
import os

#poetry add stripe os uvicorn   
#poetry install
#poetry shell
#uvicorn main:app --reload

SECRET_KEY = "sk_test_51PJgYSI4WnBDPekM9HB0FDIltlCCpq1ADw9vix87s8QBD42QMb8WdTVsTWRyYMVk5xtd3mixAwI7e76W9r5nofxf00A2R3LY3D"
stripe.api_key= os.environ.get('SECRET_KEY')

def generate_card_token(cardnumber,expmonth,expyear,cvv):
    data= stripe.Token.create(
            card={
                "number": str(cardnumber),
                "exp_month": int(expmonth),
                "exp_year": int(expyear),
                "cvc": str(cvv),
            })
    card_token = data['id']

    return card_token


def create_payment_charge(tokenid,amount):

    payment = stripe.Charge.create(
                amount= int(amount)*100,                  # convert amount to cents
                currency='usd',
                description='Example charge',
                source=tokenid,
                )

    payment_check = payment['paid']    # return True for successfull payment

    return payment_check



print(create_payment_charge(generate_card_token(4242424242424242,12,2022,123),1000)) #1000 cents = 10 dollars)
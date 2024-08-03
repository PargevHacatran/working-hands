from app.utils.send_random_code import read_api_key_and_number


def test_api_key_and_number():
    api_key, number = read_api_key_and_number()
    print("api_key:", api_key, "sender number:", number)
    assert api_key != ""
    assert number != ""

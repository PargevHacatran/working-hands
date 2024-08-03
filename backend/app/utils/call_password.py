import requests


def send_call_password(destination: str, validate: bool = False):
    url = "https://lcab.smsint.ru/json/v1.0/callpassword/send"
    api_key = read_api_key_and_number()
    data = {
        "recipient": destination,
        "validate": validate,
    }
    headers = {"X-Token": api_key}
    request = requests.post(url=url, json=data, headers=headers)
    print(request.status_code)
    return request


def read_api_key_and_number():
    # create file send_sms_settings.txt in app folder
    # add new line (\n)
    with open('app/send_sms_settings.txt', encoding="utf-8") as f:
        api_key = f.readline()[0:-1]
    return api_key

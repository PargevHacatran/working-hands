import requests


def send_random_code(destination: str, text: str):
    url = "https://api.exolve.ru/messaging/v1/SendSMS"
    api_key, number = read_api_key_and_number()
    data = {
        "number": number,
        "destination": destination,  # example: "79992223344"
        "text": text,
    }
    headers = {"Authorization": f"Bearer {api_key}"}
    request = requests.post(url, json=data, headers=headers)
    print(request.status_code)
    return request


def generate_text_message(random_code: str) -> str:
    return f"Authorization code: {random_code}"


def read_api_key_and_number():
    # create file send_sms_settings.txt in app folder
    # paste api_key and sender number on the next line
    # add new line (\n)
    with open('app/send_sms_settings.txt', encoding="utf-8") as f:
        api_key = f.readline()[0:-1]
        number = f.readline()[0:-1]
    return api_key, number

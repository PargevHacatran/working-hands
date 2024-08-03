import random


def generate_random_code(code_size: int) -> str:
    result = ""
    for _ in range(code_size):
        code = random.randrange(0, 9)
        result += str(code)
    return result


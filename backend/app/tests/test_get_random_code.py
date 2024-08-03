from app.utils.generate_random_code import generate_random_code


def test_generate_random_code():
    size_code = 4
    random_code_1 = generate_random_code(size_code)
    random_code_2 = generate_random_code(size_code)

    print(random_code_1)
    print(random_code_2)
    assert random_code_1 != random_code_2

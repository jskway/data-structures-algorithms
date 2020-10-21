import unittest
from reverse_string_in_place import reverse_chars

class Test(unittest.TestCase):
    def test_reverses_odd_length(self):
        actual = reverse_chars(['s', 't', 'a', 'r', 't'])
        expected = ['t', 'r', 'a', 't', 's']

        self.assertEqual(actual, expected)

    def test_reverses_even_length(self):
        actual = reverse_chars(['s', 'o', 'l', 'u', 't', 'i', 'o', 'n'])
        expected = ['n', 'o', 'i', 't', 'u', 'l', 'o', 's']

        self.assertEqual(actual, expected)

if __name__ == "__main__":
    unittest.main()
